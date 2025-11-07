import { NavLink, Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import AmbientBackground from "./components/AmbientBackground.jsx";
import CursorSpotlight from "./components/CursorSpotlight";
import SoundToggle from "./components/SoundToggle";

const page = {
  initial: { opacity: 0, y: 24, filter: "blur(6px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut" } },
  exit:    { opacity: 0, y: -24, filter: "blur(6px)", transition: { duration: 0.35, ease: "easeIn" } }
};

export default function App() {
  const location = useLocation();

  return (
    <div className="app-shell sensorium">
      <AmbientBackground />
      <CursorSpotlight />
      <header className="topbar glass">
        <h1>SerenAI <span className="dot">●</span></h1>
        <nav>
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="/checkin">Check-in</NavLink>
          <NavLink to="/chat">Chat</NavLink>
          <NavLink to="/exercises">Exercices</NavLink>
          <NavLink to="/journal">Journal</NavLink>
          <NavLink to="/resources">Ressources</NavLink>
          <NavLink to="/settings">Paramètres</NavLink>
        </nav>
        <SoundToggle />
      </header>

      <main className="page-content">
        <AnimatePresence mode="wait">
          <motion.div key={location.pathname} variants={page} initial="initial" animate="animate" exit="exit">
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="footer glass">
        <small>⚠️ Non médical — Urgence : 15 — Écoute 24/7 : 3114</small>
      </footer>
    </div>
  );
}
