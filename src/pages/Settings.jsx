import { storage } from '../services/storage';

export default function Settings(){
  function erase(){
    if(confirm('Effacer toutes tes données locales ?')) {
      storage.clear();
      alert('Données locales effacées.');
      location.reload();
    }
  }
  return (
    <section className="card">
      <h2>Paramètres</h2>
      <button className="btn danger" onClick={erase}>Effacer mes données locales</button>
      <p style={{marginTop:10,opacity:.7}}>Tes données sont stockées uniquement dans ton navigateur (LocalStorage).</p>
    </section>
  );
}
