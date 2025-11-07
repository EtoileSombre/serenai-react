const RISK = /(suicide|me tuer|plus envie de vivre|me faire du mal|danger immédiat)/i;

export function checkRisk(text = '') {
  const atRisk = RISK.test(text);
  return {
    atRisk,
    message: atRisk
      ? 'Si tu es en danger immédiat, appelle le 15 (Samu). Aide 24/7 : 3114.'
      : null,
  };
}
