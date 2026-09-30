type ArrowProps = { className?: string; direction?: "right" | "up-right" | "down" };

const Arrow = ({ className = "", direction = "up-right" }: ArrowProps) => (
  <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ transform: direction === "right" ? "rotate(45deg)" : direction === "down" ? "rotate(135deg)" : undefined }}>
    <path d="M5 19 19 5M5 5h14v14" />
  </svg>
);
export default Arrow;
