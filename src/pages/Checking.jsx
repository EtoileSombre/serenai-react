import { useState } from 'react';
import { storage } from '../services/storage';

export default function Checkin(){
  const [score,setScore] = useState(3);
  const [emotions,setEmotions] = useState('');
  const [note,setNote] = useState('');

  function submit(e){
    e.preventDefault();
    const moodTags = emotions.split(',').map(s=>s.trim()).filter(Boolean);
    storage.addMood({
      id: crypto.randomUUID(),
      date: new Date().toISOString(),
      score: Number(score),
      emotions: moodTags,
      note: note.trim() || undefined,
    });
    // Choix simple d’un mood dominant pour la scène
    const dominant = (moodTags[0] || '').toLowerCase();
    const mood = dominant.includes('stress') ? 'storm'
              : dominant.includes('calme') || Number(score) >=4 ? 'calm'
              : 'neutral';
    document.documentElement.setAttribute('data-mood', mood);

    setNote(''); setEmotions('');
    alert('Humeur enregistrée ✅');
  }

  return (
    <section className="card">
      <h2>Check-in d’humeur</h2>
      <form onSubmit={submit} className="row">
        <label style={{flex:'1 0 160px'}}>
          Échelle (1–5)
          <input type="number" min="1" max="5" value={score} onChange={e=>setScore(e.target.value)} />
        </label>
        <label style={{flex:'1 0 260px'}}>
          Émotions (séparées par des virgules)
          <input value={emotions} onChange={e=>setEmotions(e.target.value)} placeholder="stress, calme, fatigue…" />
        </label>
        <label style={{flex:'1 0 100%'}}>
          Note
          <textarea rows="4" value={note} onChange={e=>setNote(e.target.value)} placeholder="Quelques mots…" />
        </label>
        <div><button className="btn" type="submit">Enregistrer</button></div>
      </form>
    </section>
  );
}
