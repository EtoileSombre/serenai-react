import { useEffect, useRef } from "react";

export default function CursorSpotlight(){
  const ref = useRef(null);
  useEffect(()=>{
    const el = ref.current;
    const onMove = (e)=> {
      el?.style.setProperty('--mx', `${e.clientX}px`);
      el?.style.setProperty('--my', `${e.clientY}px`);
    };
    window.addEventListener('pointermove', onMove, { passive:true });
    return ()=> window.removeEventListener('pointermove', onMove);
  },[]);
  return <div ref={ref} className="cursor-spotlight" aria-hidden />;
}
