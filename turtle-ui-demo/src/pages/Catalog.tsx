// src/pages/Catalog.tsx
import { MotionCard, MotionButton } from "../ui/MotionWrappers";
export default function Catalog(){
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {[1,2,3,4].map(i=>(
        <MotionCard key={i} className="rounded-2xl border border-[var(--brand-border)] bg-[var(--brand-glass)] p-6">
          <h3 className="text-xl font-semibold">Cours #{i}</h3>
          <p className="text-[var(--brand-mute)] mt-1">Intro courte au cours.</p>
          <div className="mt-4">
            <MotionButton className="rounded-lg px-4 py-2 bg-[var(--brand-primary)] text-[var(--brand-primaryOn)]">
              Voir
            </MotionButton>
          </div>
        </MotionCard>
      ))}
    </div>
  );
}
