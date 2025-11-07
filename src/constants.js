// Messages système pour l'IA
export const AI_MESSAGES = {
  WELCOME: "Bonjour 👋 Je suis un compagnon de bien-être (non médical). Comment te sens-tu aujourd'hui ?",
  RESET: "Conversation réinitialisée 🌿 Comment te sens-tu maintenant ?",
};

// Numéros d'urgence
export const EMERGENCY = {
  SAMU: "15",
  MENTAL_HEALTH: "3114",
};

// Animations Framer Motion
export const PAGE_TRANSITIONS = {
  initial: { opacity: 0, y: 24, filter: "blur(6px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, y: -24, filter: "blur(6px)", transition: { duration: 0.35, ease: "easeIn" } }
};

// Helpers
export const createMessage = (sender, text) => ({
  id: crypto.randomUUID(),
  sender,
  text,
  createdAt: Date.now(),
});
