import { useMemo } from 'react';
import { storage } from '../services/storage';

export default function Journal(){
  const moods = useMemo(()=>storage.listMoods().slice().reverse(), []);
  return (
    <section className="card">
      <h2>Journal & humeurs</h2>
      {!moods.length && <p>Aucun enregistrement pour l’instant.</p>}
      {moods.map(m=>(
        <div key={m.id} style={{borderTop:'1px dashed #ddd', paddingTop:10, marginTop:10}}>
          <strong>{new Date(m.date).toLocaleString()}</strong>
          <div>Échelle : {m.score}/5</div>
          {!!m.emotions?.length && <div>Émotions : {m.emotions.join(', ')}</div>}
          {m.note && <p style={{margin:'6px 0 0'}}>{m.note}</p>}
        </div>
      ))}
    </section>
  );
}
