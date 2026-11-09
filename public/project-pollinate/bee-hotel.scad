// Project Pollinate v1.0 - printable housing, millimetres.
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
