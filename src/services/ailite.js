const SAFE_PREFIX =
  "Je ne remplace pas un professionnel de santé. Si tu es en danger, appelle le 15 ou le 3114. ";

export function aiReply(history) {
  const last = history[history.length - 1];
  const lower = (last?.text || '').toLowerCase();

  let body = "Merci d’avoir partagé. Tu préfères un exercice (respiration), écrire (journal), ou une astuce courte ?";
  if (lower.includes('stress')) body = "Essayons 4-7-8 : inspire 4s, retiens 7s, expire 8s (3 cycles).";
  if (lower.includes('fatigue')) body = "Micro-pause grounding : 5 choses que tu vois, 4 que tu touches, 3 que tu entends, 2 que tu sens, 1 que tu goûtes.";
  if (lower.includes('triste') || lower.includes('chagrin')) body = "Note 3 petites choses qui t’ont aidé aujourd’hui, même infimes.";

  return {
    id: crypto.randomUUID(),
    sender: 'ai',
    text: SAFE_PREFIX + body,
    createdAt: Date.now(),
    tags: ['supportive','non-clinical'],
  };
}
