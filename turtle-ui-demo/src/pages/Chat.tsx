// src/pages/Chat.tsx
import { MotionCard } from "../ui/MotionWrappers";
export default function Chat(){
  return (
    <MotionCard className="rounded-2xl border border-[var(--brand-border)] bg-[var(--brand-glass)] p-6">
      <h3 className="text-xl font-semibold">Chat IA</h3>
      <p className="text-[var(--brand-mute)] mt-1">
        L’interface du chat arrive à l’étape 5 (bubbles, typing, streaming, etc.).
      </p>
    </MotionCard>
  );
}
