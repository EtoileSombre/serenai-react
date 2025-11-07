import { useEffect, useRef, useState } from 'react';
import SafetyBanner from '../components/SafetyBanner.jsx';
import { storage } from '../services/storage';
import { aiReply } from '../services/ailite';
import { checkRisk } from '../services/safety';
import Modal from '../components/Modal';
import Button from '../components/ui/Button';
import { AI_MESSAGES, createMessage } from '../constants';

export default function Chat(){
  const [messages,setMessages] = useState(() => {
    const existing = storage.listMessages();
    if (existing.length) return existing;
    const first = createMessage('ai', AI_MESSAGES.WELCOME);
    storage.addMessage(first);
    return [first];
  });
  const [draft,setDraft] = useState('');
  const [riskMsg,setRiskMsg] = useState(null);
  const [open,setOpen] = useState(false);
  const endRef = useRef(null);

  useEffect(()=>{ endRef.current?.scrollIntoView({behavior:'smooth'}); }, [messages]);

  function send(e){
    e.preventDefault();
    const txt = draft.trim();
    if(!txt) return;
    const userMsg = createMessage('user', txt);
    storage.addMessage(userMsg);
    const risk = checkRisk(txt);
    setRiskMsg(risk.message);
    const aiMsg = aiReply([...messages, userMsg]);
    storage.addMessage(aiMsg);
    setMessages(storage.listMessages());
    setDraft('');
  }

  function resetChatConfirmed(){
    storage.resetMessages();
    const first = createMessage('ai', AI_MESSAGES.RESET);
    storage.addMessage(first);
    setMessages(storage.listMessages());
    setOpen(false);
  }

  return (
    <>
      <section className="card">
        <h2>Chat bien-être 🧘‍♀️</h2>
        <SafetyBanner message={riskMsg} />

        <div style={{display:'flex', justifyContent:'flex-end', marginBottom:'8px'}}>
          <Button variant="danger" onClick={()=>setOpen(true)}>🔄 Reset conversation</Button>
        </div>

        <div aria-live="polite" style={{display:'flex',flexDirection:'column',gap:10,maxHeight:420,overflow:'auto',padding:'8px 0'}}>
          {messages.map(m=>(
            <div key={m.id} className={m.sender==='user' ? 'bubble me' : 'bubble ai'}>
              <p style={{margin:0}}>{m.text}</p>
            </div>
          ))}
          <div ref={endRef} />
        </div>
        <div style={{display:'flex', justifyContent:'flex-end', marginBottom:'8px'}}>
          <Button variant="danger" onClick={()=>setOpen(true)}>🔄 Reset conversation</Button>
        </div>
        <form onSubmit={send} className="row" style={{marginTop:12}}>
          <input aria-label="Message" value={draft} onChange={e=>setDraft(e.target.value)} placeholder="Écris ici…" />
          <button className="btn" type="submit" aria-label="Envoyer">Envoyer</button>
        </form>
      </section>

      <Modal open={open} onClose={()=>setOpen(false)}>
        <h3 style={{marginTop:0}}>Réinitialiser la conversation ?</h3>
        <p style={{opacity:.85}}>Cette action efface les messages du chat, pas tes humeurs.</p>
        <div style={{display:'flex', gap:10, justifyContent:'flex-end'}}>
          <Button variant="ghost" onClick={()=>setOpen(false)}>Annuler</Button>
          <Button variant="danger" onClick={resetChatConfirmed}>Oui, réinitialiser</Button>
        </div>
      </Modal>
    </>
  );
}
