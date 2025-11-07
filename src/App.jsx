import { NavLink, Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <h1>SerenAI 🌿</h1>
        <nav>
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="/checkin">Check-in</NavLink>
          <NavLink to="/chat">Chat</NavLink>
          <NavLink to="/exercises">Exercices</NavLink>
          <NavLink to="/journal">Journal</NavLink>
          <NavLink to="/resources">Ressources</NavLink>
          <NavLink to="/settings">Paramètres</NavLink>
        </nav>
      </header>

      <main className="page-content">
        <Outlet />
      </main>

      <footer className="footer">
        <small>⚠️ SerenAI n’est pas un outil médical — Urgence : 15 — Écoute 24/7 : 3114</small>
      </footer>
    </div>
  );
}
