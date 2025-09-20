// src/pages/TurtleIntegrationDemo.tsx
import { useState } from "react";
import { AnimatedSection, MotionButton, MotionCard, MotionModal, MotionToast } from "../ui/MotionWrappers";

export default function TurtleIntegrationDemo() {
  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--brand-bg)] text-[var(--brand-fg)]">
      <header className="sticky top-0 z-20 border-b border-[var(--brand-border)] bg-black/40 backdrop-blur-md">
        <div className="mx-auto max-w-6xl p-4 flex items-center justify-between">
          <div className="font-semibold text-[var(--brand-primary)]">Turtle</div>
          <MotionButton className="rounded-lg px-4 py-2 border border-[var(--brand-border)] bg-[var(--brand-glass)]">
            Se connecter
          </MotionButton>
        </div>
      </header>

      <main className="mx-auto max-w-6xl p-6 grid gap-6">
        <AnimatedSection>
          <h1 className="text-3xl md:text-5xl font-semibold">Intégration Motion — 100% ta charte</h1>
          <p className="text-[var(--brand-mute)] mt-2">On garde tes styles. On ajoute la vie ✨</p>
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2">
          <MotionCard className="rounded-2xl border border-[var(--brand-border)] bg-[var(--brand-glass)] p-6">
            <h3 className="text-xl font-semibold">Carte de cours</h3>
            <p className="text-[var(--brand-mute)] mt-1">Apparition douce + hover 3D léger.</p>
            <div className="mt-4">
              <MotionButton
                className="rounded-lg px-4 py-2 bg-[var(--brand-primary)] text-[var(--brand-primaryOn)]"
                onClick={() => setOpen(true)}
              >
                Démarrer
              </MotionButton>
            </div>
          </MotionCard>

          <MotionCard className="rounded-2xl border border-[var(--brand-border)] bg-[var(--brand-glass)] p-6">
            <h3 className="text-xl font-semibold">Feedback</h3>
            <p className="text-[var(--brand-mute)] mt-1">Modals & toasts cohérents.</p>
            <div className="mt-4 flex gap-2">
              <MotionButton
                className="rounded-lg px-4 py-2 border border-[var(--brand-border)] bg-[var(--brand-glass)]"
                onClick={() => setOpen(true)}
              >
                Modal
              </MotionButton>
              <MotionButton
                className="rounded-lg px-4 py-2 bg-[var(--brand-primary)] text-[var(--brand-primaryOn)]"
                onClick={() => setToast(true)}
              >
                Toast
              </MotionButton>
            </div>
          </MotionCard>
        </div>
      </main>

      <MotionModal open={open} onClose={() => setOpen(false)}>
        <h3 className="text-lg font-semibold">Exemple de modal</h3>
        <p className="text-[var(--brand-mute)] mt-1">Rendu aligné à la charte.</p>
        <div className="mt-4 flex justify-end">
          <MotionButton
            className="rounded-lg px-4 py-2 border border-[var(--brand-border)] bg-[var(--brand-glass)]"
            onClick={() => setOpen(false)}
          >
            Fermer
          </MotionButton>
        </div>
      </MotionModal>

      <MotionToast
        open={toast}
        onClose={() => setToast(false)}
        className="border-[var(--brand-border)] bg-[var(--brand-glass)] text-white"
      >
        Action réussie ✅
      </MotionToast>
    </div>
  );
}