"""Generate Project Pollinate's printable housing, CAD, and matched drawings.

Requires trimesh and manifold3d. All dimensions are millimetres.
The STL files are exported in their intended print orientations.
"""
from __future__ import annotations

import hashlib
import json
import math
from pathlib import Path
from zipfile import ZIP_DEFLATED, ZipFile

import manifold3d as m
import numpy as np
import trimesh

DEST = Path(__file__).resolve().parents[1] / "public" / "project-pollinate"
WIDTH, DEPTH, HEIGHT = 180.0, 150.0, 160.0
WALL, BACK = 4.0, 3.0
PITCH = 20.0
ROOF_HALF, FRONT_OVERHANG, REAR_OVERHANG = 100.0, 40.0, 10.0
ROOF_THICKNESS, CLEARANCE = 4.0, 0.4
PEAK = HEIGHT + WIDTH / 2 * math.tan(math.radians(PITCH)) + ROOF_THICKNESS + 0.5
ROOF_DEPTH = DEPTH + FRONT_OVERHANG + REAR_OVERHANG
BOLT_Y = (50.0, 110.0)
BOLT_Z = 154.0


def box(size: tuple[float, float, float], at: tuple[float, float, float]) -> m.Manifold:
    return m.Manifold.cube(size).translate(at)


def polygon(points: list[tuple[float, float]]) -> m.CrossSection:
    area = sum(a[0] * b[1] - b[0] * a[1] for a, b in zip(points, points[1:] + points[:1]))
    return m.CrossSection([np.asarray(points if area > 0 else points[::-1], dtype=np.float64)])


def roof_height(x: float) -> float:
    return PEAK - abs(x) * math.tan(math.radians(PITCH))


def roof_profile() -> m.CrossSection:
    profile = polygon([(-ROOF_HALF, roof_height(ROOF_HALF)), (0, PEAK),
                       (ROOF_HALF, roof_height(ROOF_HALF)),
                       (ROOF_HALF, roof_height(ROOF_HALF) - ROOF_THICKNESS),
                       (0, PEAK - ROOF_THICKNESS),
                       (-ROOF_HALF, roof_height(ROOF_HALF) - ROOF_THICKNESS)])
    # Each 4 mm side wall fits a 4.8 mm channel, with 0.4 mm per side.
    for left, right in [(83.2, 85.6), (90.4, 92.8), (-85.6, -83.2), (-92.8, -90.4)]:
        profile += polygon([(left, 148), (right, 148),
                            (right, roof_height(right) - 1), (left, roof_height(left) - 1)])
    return profile


def to_mesh(solid: m.Manifold) -> trimesh.Trimesh:
    raw = solid.to_mesh()
    return trimesh.Trimesh(vertices=np.asarray(raw.vert_properties)[:, :3],
                          faces=np.asarray(raw.tri_verts), process=True)


def make_parts() -> tuple[m.Manifold, m.Manifold]:
    body = box((WIDTH, DEPTH, HEIGHT), (-WIDTH / 2, 0, 0))
    body -= box((WIDTH - 2 * WALL, DEPTH - BACK + 2, HEIGHT + 2), (-WIDTH / 2 + WALL, -2, WALL))
    for y in BOLT_Y:
        hole = m.Manifold.cylinder(220, 1.7, circular_segments=40).rotate((0, 90, 0)).translate((-110, y, BOLT_Z))
        body -= hole
    for z in (30.0, 125.0):
        hole = m.Manifold.cylinder(10, 2.25, circular_segments=40).rotate((90, 0, 0)).translate((0, DEPTH + 2, z))
        body -= hole
    for x in (-65.0, 65.0):
        body -= m.Manifold.cylinder(8, 1.5, circular_segments=32).translate((x, 10, -2))
    roof = roof_profile().extrude(ROOF_DEPTH).rotate((90, 0, 0)).translate((0, DEPTH + REAR_OVERHANG, 0))
    # Relieve the inner roof rails where they pass the closed back wall.
    roof -= box((WIDTH - 2 * WALL, BACK + 2 * CLEARANCE, 12 + 2 * CLEARANCE),
                (-WIDTH / 2 + WALL, DEPTH - BACK - CLEARANCE, 148 - CLEARANCE))
    for y in BOLT_Y:
        roof -= m.Manifold.cylinder(220, 1.7, circular_segments=40).rotate((0, 90, 0)).translate((-110, y, BOLT_Z))
    return body, roof


def export_and_check(solid: m.Manifold, name: str, rotate_x: float) -> dict:
    mesh = to_mesh(solid)
    mesh.apply_transform(trimesh.transformations.rotation_matrix(math.radians(rotate_x), (1, 0, 0)))
    mesh.apply_translation(-mesh.bounds[0])
    path = DEST / name
    mesh.export(path)
    # Re-import the actual delivered STL, including float32 STL quantization.
    delivered = trimesh.load_mesh(path, process=True)
    assert delivered.is_watertight, f"{name}: open mesh"
    assert delivered.is_winding_consistent and delivered.is_volume, f"{name}: invalid solid"
    assert len(delivered.split(only_watertight=False)) == 1, f"{name}: disconnected solids"
    assert np.all(delivered.extents <= np.array([220, 220, 250])), f"{name}: printer envelope exceeded"
    assert abs(delivered.bounds[0, 2]) < 0.001, f"{name}: not on build plate"
    bottom_faces = np.all(np.abs(delivered.vertices[delivered.faces][:, :, 2]) < 0.001, axis=1)
    contact_area = float(delivered.area_faces[bottom_faces].sum())
    assert contact_area > 500, f"{name}: insufficient build-plate contact"
    if name == "housing.stl":
        assert contact_area > WIDTH * HEIGHT * 0.9, "Housing back must face the build plate"
    print_solid = m.Manifold(m.Mesh(np.asarray(delivered.vertices, dtype=np.float32),
                                   np.asarray(delivered.faces, dtype=np.uint32)))
    layer_heights = np.arange(0.1, delivered.extents[2], 0.2)
    assert all(print_solid.slice(float(z)).area() > 0 for z in layer_heights), f"{name}: empty print layers"
    return {"file": name, "watertight": True, "connected_solids": 1,
            "build_plate_contact_mm2": round(contact_area, 2),
            "nonempty_layers_at_0_2_mm": len(layer_heights),
            "bounds_mm": [round(float(v), 3) for v in delivered.extents],
            "volume_cm3": round(float(delivered.volume / 1000), 2),
            "sha256": hashlib.sha256(path.read_bytes()).hexdigest()}


def write_scad() -> None:
    source = '''// Project Pollinate v1.0 - printable housing, millimetres.
// CC BY 4.0, SJ Shogun. Natural nesting tubes are added separately.
// Choose "body_print" or "roof_print" to export an oriented STL.
part = "assembly"; // [assembly,body_print,roof_print]
width = 180; depth = 150; height = 160;
wall = 4; back = 3; pitch = 20;
roof_half = 100; roof_t = 4; front_overhang = 40; rear_overhang = 10;
clearance = 0.4; rail_t = 2.4;
peak = height + width/2*tan(pitch) + roof_t + 0.5;
bolt_y = [50,110]; bolt_z = height-6;
$fn = 40;
function rh(x) = peak-abs(x)*tan(pitch);
module bolt_holes() {
  for (y=bolt_y) translate([-width/2-20,y,bolt_z]) rotate([0,90,0]) cylinder(h=width+40,d=3.4);
}
module body() {
  difference() {
    translate([-width/2,0,0]) cube([width,depth,height]);
    translate([-width/2+wall,-2,wall]) cube([width-2*wall,depth-back+2,height+2]);
    bolt_holes();
    for(z=[30,125]) translate([0,depth+2,z]) rotate([90,0,0]) cylinder(h=10,d=4.5);
    for(x=[-65,65]) translate([x,10,-2]) cylinder(h=8,d=3);
  }
}
module rail(a,b) { polygon([[a,height-12],[b,height-12],[b,rh(b)-1],[a,rh(a)-1]]); }
module roof_section() {
  union() {
    polygon([[-roof_half,rh(roof_half)],[0,peak],[roof_half,rh(roof_half)],
      [roof_half,rh(roof_half)-roof_t],[0,peak-roof_t],[-roof_half,rh(roof_half)-roof_t]]);
    // Slots follow the housing wall positions when width or wall is edited.
    for(s=[-1,1]) scale([s,1]) {
      rail(width/2-wall-clearance-rail_t,width/2-wall-clearance);
      rail(width/2+clearance,width/2+clearance+rail_t);
    }
  }
}
module roof() {
  difference() {
    translate([0,depth+rear_overhang,0]) rotate([90,0,0])
      linear_extrude(depth+front_overhang+rear_overhang) roof_section();
    translate([-width/2+wall,depth-back-clearance,height-12-clearance])
      cube([width-2*wall,back+2*clearance,12+2*clearance]);
    bolt_holes();
  }
}
if(part=="body_print") translate([width/2,0,depth]) rotate([-90,0,0]) body();
else if(part=="roof_print") translate([roof_half,peak,front_overhang]) rotate([90,0,0]) roof();
else { color("ivory") body(); color("goldenrod") roof(); }
'''
    (DEST / "bee-hotel.scad").write_text(source, encoding="utf-8")


def write_blueprints() -> None:
    # Views are projected from the same parameters used to make the solids.
    scale = 1.55
    def front(points):
        return " ".join(f"{270+x*scale:.2f},{405-z*scale:.2f}" for x,z in points)
    profile = [(-100,roof_height(100)),(0,PEAK),(100,roof_height(100)),
               (100,roof_height(100)-4),(0,PEAK-4),(-100,roof_height(100)-4)]
    body_path = f"M{270-90*scale} 405V{405-160*scale}H{270+90*scale}V405Z"
    roof_outlines = ''.join(f'<polygon points="{front([tuple(point) for point in contour])}"/>' for contour in roof_profile().to_polygons())
    side_x = lambda y: 760+y*scale
    side_top = 405-PEAK*scale
    drawing = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 820" role="img" aria-labelledby="title"><title id="title">Project Pollinate v1.0 assembly and print dimensions, in millimetres</title>
<rect width="1200" height="820" fill="BG"/>
<g font-family="Arial,sans-serif" fill="INK"><text x="55" y="48" font-size="19" font-weight="bold">PROJECT POLLINATE / V1.0</text><text x="55" y="73" font-size="11">All dimensions in mm. Housing: 180 W × 150 D × 160 H. Roof: 200 W × 200 D.</text>
<text x="270" y="483" text-anchor="middle" font-size="11">FRONT</text><text x="870" y="483" text-anchor="middle" font-size="11">SIDE</text></g>
<g fill="none" stroke="INK" stroke-width="1.4"><path d="{body_path}"/><path d="M{270-86*scale} 399V{405-160*scale}M{270+86*scale} 399V{405-160*scale}M{270-90*scale} 399H{270+90*scale}"/>{roof_outlines}
<rect x="{side_x(0)}" y="{405-160*scale}" width="{150*scale}" height="{160*scale}"/><path d="M{side_x(147)} {405-160*scale}V405M{side_x(0)} 399H{side_x(150)}"/>
<rect x="{side_x(-40)}" y="{side_top}" width="{200*scale}" height="{(PEAK-roof_height(100))*scale}"/>
<path d="M{side_x(-40)} {405-148*scale}H{side_x(160)}M{side_x(-40)} {405-roof_height(100)*scale}V{405-148*scale}M{side_x(160)} {405-roof_height(100)*scale}V{405-148*scale}"/>
<circle cx="{side_x(50)}" cy="{405-154*scale}" r="2.64"/><circle cx="{side_x(110)}" cy="{405-154*scale}" r="2.64"/>
</g>
<g fill="none" stroke="ACCENT" stroke-width=".8"><path d="M130.5 416V446M409.5 416V446M130.5 435H409.5M127.5 432l6 6M406.5 432l6 6M{side_x(0)} 416V446M{side_x(150)} 416V446M{side_x(0)} 435H{side_x(150)}M{side_x(-40)} 113V86M{side_x(160)} 113V86M{side_x(-40)} 86H{side_x(160)}M440 157V405M430 157H450M430 405H450"/>
</g><g font-family="Arial,sans-serif" fill="ACCENT" font-size="12"><text x="270" y="459" text-anchor="middle">180</text><text x="876" y="459" text-anchor="middle">150</text><text x="852" y="77" text-anchor="middle">200 overall roof depth</text><text x="453" y="285">160</text></g>
<rect x="50" y="494" width="500" height="290" fill="BG"/>
<g font-family="Arial,sans-serif" fill="INK"><text x="55" y="530" font-size="12" font-weight="bold">PRINT ORIENTATIONS</text><text x="55" y="563" font-size="12">Housing: closed back flat on the build plate.</text><text x="55" y="587" font-size="12">Print envelope: 180 × 160 × 150 mm.</text><text x="55" y="621" font-size="12">Roof: front gable edge flat on the build plate.</text><text x="55" y="645" font-size="12">Print envelope: 200 × {PEAK-148:.1f} × 200 mm.</text><text x="55" y="679" font-size="12">Use a 220 × 220 × 250 mm or larger printer.</text><text x="55" y="703" font-size="12">Roof brim: 5 mm. STL orientations are already set.</text>
<text x="650" y="530" font-size="12" font-weight="bold">ASSEMBLY DETAILS</text><text x="650" y="563" font-size="12">Housing walls 4 mm. Closed back 3 mm.</text><text x="650" y="587" font-size="12">Roof channels 4.8 mm; 0.4 mm clearance per side.</text><text x="650" y="621" font-size="12">4 × M3 × 16 mm bolts, washers and nuts.</text><text x="650" y="645" font-size="12">Bolt centres: depth 50 / 110; height 154.</text><text x="650" y="679" font-size="12">2 × 4.5 mm rear mounting holes; heights 30 / 125.</text><text x="650" y="703" font-size="12">2 × 3 mm floor drain holes; x ±65, depth 10.</text><text x="55" y="764" font-size="10">SJ Shogun / CC BY 4.0. Geometry validated; physical print and field performance not yet tested.</text></g></svg>'''
    for name, background, ink, accent in [("blueprints.svg", "#ffffff", "#222222", "#72530b"), ("blueprints-dark.svg", "#111113", "#bcbcc2", "#e9c66a")]:
        (DEST / name).write_text(drawing.replace("BG",background).replace("INK",ink).replace("ACCENT",accent),encoding="utf-8")


def main() -> None:
    DEST.mkdir(parents=True, exist_ok=True)
    body, roof = make_parts()
    interference = (body ^ roof).volume()
    assert interference < 0.001, f"Assembly collision: {interference} mm3"
    results = [export_and_check(body, "housing.stl", -90), export_and_check(roof, "roof.stl", 90)]
    scene = trimesh.Scene()
    for solid, name, color in [(body, "housing", [203,204,190,255]), (roof,"roof",[206,168,73,255])]:
        mesh = to_mesh(solid)
        mesh.visual.vertex_colors = color
        scene.add_geometry(mesh, node_name=name, geom_name=name)
    (DEST / "bee-hotel-assembly.glb").write_bytes(scene.export(file_type="glb"))
    write_scad()
    write_blueprints()
    report = {"version": "1.0", "units": "mm", "assembly_interference_mm3": interference,
              "roof_channel_clearance_per_side_mm": CLEARANCE, "parts": results,
              "physical_print_tested": False, "field_tested": False}
    (DEST / "validation.json").write_text(json.dumps(report, indent=2), encoding="utf-8")
    files = ["housing.stl", "roof.stl", "bee-hotel.scad", "blueprints.svg", "README.txt", "validation.json"]
    with ZipFile(DEST / "project-pollinate-v1.zip", "w", ZIP_DEFLATED) as bundle:
        for name in files:
            bundle.write(DEST / name, arcname=f"project-pollinate-v1/{name}")
    print(json.dumps(report, indent=2))


if __name__ == "__main__":
    main()
