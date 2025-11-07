import { useEffect, useRef, useState } from "react";

export default function Exercises(){
  const [phase,setPhase] = useState("Inspire 4s");
  const circleRef = useRef(null);

  useEffect(()=>{
    let i=0;
    const seq = [
      { label:"Inspire 4s", scale:1.15, dur:4000 },
      { label:"Retiens 7s", scale:1.25, dur:7000 },
      { label:"Expire 8s", scale:0.90, dur:8000 },
    ];
    let t;
    const loop = () => {
      const step = seq[i % seq.length];
      setPhase(step.label);
      circleRef.current?.animate(
        [{ transform:`scale(${step.scale})` }],
        { duration: step.dur, fill:"forwards", easing:"ease-in-out" }
      );
      t = setTimeout(()=>{ i++; loop(); }, step.dur);
    };
    loop();
    return ()=> clearTimeout(t);
  },[]);

  return (
    <section className="card" style={{textAlign:'center'}}>
      <h2>Respiration 4–7–8</h2>
      <p style={{opacity:.85}}>Laisse-toi guider par l’animation.</p>
      <div style={{display:'grid', placeItems:'center', height:360}}>
        <div ref={circleRef}
             style={{
               width:180, height:180, borderRadius:'50%',
               background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,.15), rgba(255,255,255,.02))',
               boxShadow:'0 0 120px rgba(139,92,246,.35), inset 0 0 60px rgba(255,255,255,.06)',
               border:'1px solid rgba(255,255,255,.12)'
             }} />
      </div>
      <p style={{letterSpacing:1.2, opacity:.9}}>{phase}</p>
    </section>
  );
}
