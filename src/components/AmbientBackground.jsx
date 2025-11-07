import { useEffect, useRef } from "react";

export default function AmbientBackground() {
  const layer1 = useRef(null);
  const layer2 = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      const { innerWidth:w, innerHeight:h } = window;
      const x = (e.clientX - w/2) / w;
      const y = (e.clientY - h/2) / h;
      if (layer1.current) layer1.current.style.transform = `translate(${x * 8}px, ${y * 8}px)`;
      if (layer2.current) layer2.current.style.transform = `translate(${x * -12}px, ${y * -12}px)`;
    };
    window.addEventListener("mousemove", onMove, { passive:true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <div className="bg-anim" aria-hidden />
      <div className="glow glow-a" ref={layer1} aria-hidden />
      <div className="glow glow-b" ref={layer2} aria-hidden />
      <div className="grain" aria-hidden />
    </>
  );
}
