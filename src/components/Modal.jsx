export default function Modal({ open, onClose, children }){
  if(!open) return null;
  return (
    <div role="dialog" aria-modal="true"
      style={{position:'fixed',inset:0,zIndex:50,display:'grid',placeItems:'center'}}>
      <div onClick={onClose} style={{position:'absolute',inset:0,backdropFilter:'blur(8px)',background:'rgba(0,0,0,.35)'}} />
      <div className="card" style={{position:'relative',width:'min(520px, 92vw)'}}>
        {children}
      </div>
    </div>
  );
}
