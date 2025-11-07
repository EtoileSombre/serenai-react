import PageWrapper from '../components/PageWrapper';

export default function Home() {
  return (
    <PageWrapper>
      <section>
        <h2>Bienvenue 👋</h2>
        <p>Je suis SerenAI, un compagnon de bien-être psychologique (non médical).</p>
        <p>Tu peux faire un check-in d'humeur ou discuter avec moi dans le chat.</p>
      </section>
    </PageWrapper>
  );
}

const audio = new Audio("/ambience.mp3");

<button onClick={() => audio.play()}>
  🌿 Activer l’ambiance sonore
</button>
