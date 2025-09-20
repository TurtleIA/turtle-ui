// src/layout/AppLayout.tsx
import { NavLink, Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { getBrand } from "../brand/BrandBridge";

const linkBase =
  "rounded-lg px-3 py-1.5 border border-[var(--brand-border)] bg-[var(--brand-glass)] text-sm";

export default function AppLayout() {
  const b = getBrand();

  return (
    <div className="min-h-screen bg-[var(--brand-bg)] text-[var(--brand-fg)]">
      {/* Header sticky */}
      <header className="sticky top-0 z-50 border-b border-[var(--brand-border)] bg-black/40 backdrop-blur-md">
        <div className="mx-auto max-w-6xl p-4 flex items-center justify-between">
          <NavLink to="/" className="font-semibold text-[var(--brand-primary)]">
            Turtle
          </NavLink>
          <nav className="flex gap-2">
            <NavLink to="/" className={({isActive}) => `${linkBase} ${isActive ? "outline outline-1 outline-[var(--brand-primary)]" : ""}`}>
              Accueil
            </NavLink>
            <NavLink to="/catalog" className={({isActive}) => `${linkBase} ${isActive ? "outline outline-1 outline-[var(--brand-primary)]" : ""}`}>
              Catalogue
            </NavLink>
            <NavLink to="/chat" className={({isActive}) => `${linkBase} ${isActive ? "outline outline-1 outline-[var(--brand-primary)]" : ""}`}>
              Chat IA
            </NavLink>
          </nav>
          <button className={linkBase}>Se connecter</button>
        </div>
      </header>

      {/* Transition de page */}
      <motion.main
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: b.motion.base, ease: b.motion.ease }}
        className="mx-auto max-w-6xl p-6"
      >
        <Outlet />
      </motion.main>
    </div>
  );
}
