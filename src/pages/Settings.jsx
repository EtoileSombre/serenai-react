import { storage } from '../services/storage';
import PageWrapper from '../components/PageWrapper';

export default function Settings(){
  function erase(){
    if(confirm('Effacer toutes tes données locales ?')) {
      storage.clear();
      alert('Données locales effacées.');
      location.reload();
    }
  }
  return (
    <PageWrapper>
      <section className="card">
        <h2>Paramètres</h2>
        <button onClick={erase}>Effacer mes données locales</button>
        <p style={{marginTop:10,color:'#666'}}>Tes données sont stockées uniquement dans ton navigateur (LocalStorage).</p>
      </section>
    </PageWrapper>
  );
}
