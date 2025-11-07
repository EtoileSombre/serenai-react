import { useEffect, useRef, useState } from 'react';
import SafetyBanner from '../components/SafetyBanner.jsx';
import { storage } from '../services/storage';
import { aiReply } from '../services/ailite';
import { checkRisk } from '../services/safety';
import PageWrapper from '../components/PageWrapper';

export default function Chat(){
  const [messages,setMessages] = useState(() => {
    const existing = storage.listMessages();
    if (existing.length) return existing;
    const first = { id: crypto.randomUUID(), sender:'ai', createdAt: Date.now(),
      text: "Bonjour 👋 Je suis un compagnon de bien-être (non médical). Comment te sens-tu aujourd’hui ?" };
    storage.addMessage(first);
    return [first];
  });
  const [draft,setDraft] = useState('');
  const [riskMsg,setRiskMsg] = useState(null);
  const endRef = useRef(null);

  useEffect(()=>{ endRef.current?.scrollIntoView({behavior:'smooth'}); }, [messages]);

  function send(e){
    e.preventDefault();
    const txt = draft.trim();
    if(!txt) return;
    const userMsg = { id: crypto.randomUUID(), sender:'user', text: txt, createdAt: Date.now() };
    storage.addMessage(userMsg);
    const risk = checkRisk(txt);
    setRiskMsg(risk.message);
    const aiMsg = aiReply([...messages, userMsg]);
    storage.addMessage(aiMsg);
    setMessages(storage.listMessages());
    setDraft('');
  }

  return (
    <PageWrapper>
      <section className="card">
        <h2>Chat bien-être 🧘‍♀️</h2>
        <SafetyBanner message={riskMsg} />
        <div aria-live="polite" style={{display:'flex',flexDirection:'column',gap:10,maxHeight:420,overflow:'auto',padding:'8px 0'}}>
          {messages.map(m=>(
            <div key={m.id} className={m.sender==='user' ? 'bubble me' : 'bubble ai'}>
              <p style={{margin:0}}>{m.text}</p>
            </div>
          ))}
          <div ref={endRef} />
        </div>
        <form onSubmit={send} className="row" style={{marginTop:12}}>
          <input aria-label="Message" value={draft} onChange={e=>setDraft(e.target.value)} placeholder="Écris ici…" />
          <button type="submit" aria-label="Envoyer">Envoyer</button>
        </form>
      </section>
    </PageWrapper>
  );
}
