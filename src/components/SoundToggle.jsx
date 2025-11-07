import { useEffect, useRef, useState } from "react";

export default function SoundToggle(){
  const [on,setOn] = useState(() => localStorage.getItem("serenai_sound")==="on");
  const audioRef = useRef(null);

  useEffect(()=>{
    if (!audioRef.current) {
      audioRef.current = new Audio("/ambience.mp3"); // place ton mp3 dans /public
      audioRef.current.loop = true;
      audioRef.current.volume = 0.25;
    }
    if (on) audioRef.current.play().catch(()=>{});
    else audioRef.current.pause();
    localStorage.setItem("serenai_sound", on ? "on" : "off");
  },[on]);

  return (
    <button className="btn" onClick={()=>setOn(v=>!v)} aria-pressed={on} title="Ambiance sonore">
      {on ? "🔊 Ambiance" : "🔈 Ambiance"}
    </button>
  );
}
