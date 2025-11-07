import Button from "../components/ui/Button";
import Reveal from "../components/Reveal";

export default function Home(){
  return (
    <section className="card" style={{textAlign:'center', padding:'28px'}}>
      <Reveal><h2 style={{fontSize:'2rem', marginTop:0}}>Bienvenue dans ton espace sensoriel 🌌</h2></Reveal>
      <Reveal delay={120}><p style={{opacity:.9}}>
        SerenAI t'accompagne dans un voyage émotionnel. Commence par un <strong>check-in</strong>,
        puis explore des exercices et un chat d'écoute non clinique.
      </p></Reveal>
      <Reveal delay={220}>
        <div style={{display:'flex', gap:12, justifyContent:'center', marginTop:16}}>
          <a href="/checkin"><Button className="cta-shine">Commencer le check-in</Button></a>
          <a href="/exercises"><Button variant="ghost">Respiration guidée</Button></a>
        </div>
      </Reveal>
    </section>
  );
}
