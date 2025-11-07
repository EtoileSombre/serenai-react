export default function Button({ children, variant="default", className="", ...props }){
  const cls = ["btn", className, variant==="ghost"&&"ghost", variant==="danger"&&"danger"].filter(Boolean).join(" ");
  return <button className={cls} {...props}>{children}</button>;
}
