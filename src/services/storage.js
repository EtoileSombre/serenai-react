const KEY = 'serenai_store_v1';

function read() {
  try { return JSON.parse(localStorage.getItem(KEY)) || { moods: [], messages: [] }; }
  catch { return { moods: [], messages: [] }; }
}
function write(data) { localStorage.setItem(KEY, JSON.stringify(data)); }

export const storage = {
  getAll: () => read(),
  // Chat
  listMessages: () => read().messages,
  addMessage(msg) { const s = read(); s.messages.push(msg); write(s); },
  // Moods
  listMoods: () => read().moods,
  addMood(entry) { const s = read(); s.moods.push(entry); write(s); },
  // Reset
  clear() { write({ moods: [], messages: [] }); }
};
