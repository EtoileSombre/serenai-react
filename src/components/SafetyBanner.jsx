export default function SafetyBanner({ message }) {
  if (!message) return null;
  return (
    <div 
      role="status" 
      aria-live="assertive" 
      style={{
        background:'color-mix(in oklab, var(--danger) 10%, rgba(255,255,255,.02))',
        border:'1px solid color-mix(in oklab, var(--danger) 40%, transparent)',
        borderRadius:'var(--radius-sm)',
        padding:12,
        marginBottom:12
      }}>
      <p style={{margin:0, fontSize:'0.9em'}}>
        ⚠️ {message} — <a href="tel:3114" style={{color:'var(--danger)'}}>Appeler 3114</a> · <a href="tel:15" style={{color:'var(--danger)'}}>Appeler le 15</a>
      </p>
    </div>
  );
}
