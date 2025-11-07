export default function SafetyBanner({ message }) {
  if (!message) return null;
  return (
    <div className="card" role="status" aria-live="assertive" style={{background:'#fff4f4', border:'1px solid #ffd2d2', borderRadius:12, padding:12}}>
      <p style={{margin:0}}>
        {message} — <a href="tel:3114" rel="nofollow">Appeler 3114</a> · <a href="tel:15" rel="nofollow">Appeler le 15</a>
      </p>
    </div>
  );
}
