import { useEffect, useRef, useState } from "react";

export default function Reveal({ children, y=26, delay=0 }){
  const ref = useRef(null);
  const [show,setShow] = useState(false);
  useEffect(()=>{
    const io = new IntersectionObserver(([e])=>{
      if(e.isIntersecting){ setShow(true); io.disconnect(); }
    }, { threshold:.2 });
    if(ref.current) io.observe(ref.current);
    return ()=> io.disconnect();
  },[]);
  return (
    <div ref={ref}
      style={{
        transform: `translateY(${show?0:y}px)`,
        opacity: show?1:0,
        filter: `blur(${show?0:6}px)`,
        transition: `transform .7s ease, opacity .7s ease, filter .7s ease`,
        transitionDelay: `${delay}ms`
      }}>
      {children}
    </div>
  );
}
