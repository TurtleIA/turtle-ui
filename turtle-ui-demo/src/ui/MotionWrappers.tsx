// src/ui/MotionWrappers.tsx
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getBrand } from "../brand/BrandBridge.ts";

const cx = (...p: (string | false | undefined)[]) => p.filter(Boolean).join(" ");

function useReduced() {
  const [r, setR] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    const on = () => setR(!!mq?.matches);
    on();
    mq?.addEventListener?.("change", on);
    return () => mq?.removeEventListener?.("change", on);
  }, []);
  return r;
}

export function AnimatedSection({
  children, className, delay = 0, offset = 12,
}: { children: React.ReactNode; className?: string; delay?: number; offset?: number; }) {
  const b = getBrand(), r = useReduced();
  return (
    <motion.div
      initial={r ? undefined : { opacity: 0, y: offset }}
      animate={r ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: r ? 0.01 : b.motion.base, delay, ease: b.motion.ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function MotionButton({
  children, className, onClick, disabled = false, hoverScale = 1.03, tapScale = 0.98,
}: { children: React.ReactNode; className?: string; onClick?: () => void; disabled?: boolean; hoverScale?: number; tapScale?: number; }) {
  const b = getBrand(), r = useReduced();
  return (
    <motion.button
      onClick={onClick} disabled={disabled}
      whileHover={disabled || r ? undefined : { scale: hoverScale, boxShadow: b.shadows.glowSoft }}
      whileTap={disabled || r ? undefined : { scale: tapScale }}
      transition={{ type: "spring", stiffness: 360, damping: 26 }}
      className={cx(className, disabled && "opacity-60 cursor-not-allowed")}
    >
      {children}
    </motion.button>
  );
}

export function MotionCard({
  children, className, inview = true, hoverTilt = 2, hoverScale = 1.02,
}: { children: React.ReactNode; className?: string; inview?: boolean; hoverTilt?: number; hoverScale?: number; }) {
  const b = getBrand(), r = useReduced();
  const [show, setShow] = useState(!inview);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!inview || !ref.current) return;
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setShow(true)), { threshold: 0.2 });
    io.observe(ref.current); return () => io.disconnect();
  }, [inview]);

  return (
    <motion.div
      ref={ref}
      initial={inview && !r ? { opacity: 0, y: 12 } : undefined}
      animate={show && !r ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: r ? 0.01 : b.motion.base, ease: b.motion.ease }}
      whileHover={r ? undefined : { scale: hoverScale, rotateY: hoverTilt, transition: { type: "spring", stiffness: 320, damping: 24 } }}
      whileTap={r ? undefined : { scale: 0.98 }}
      className={cx(className, "will-change-transform")}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </motion.div>
  );
}

export function MotionModal({
  open, onClose, children, className, panelClassName,
}: { open: boolean; onClose: () => void; children: React.ReactNode; className?: string; panelClassName?: string; }) {
  const b = getBrand();
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          transition={{ duration: b.motion.fast }}
          className={cx("fixed inset-0 z-50 flex items-center justify-center", className)}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} aria-hidden />
          <motion.div
            role="dialog" aria-modal="true"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
            transition={{ duration: b.motion.base, ease: b.motion.ease }}
            className={cx("relative z-10 w-[92vw] max-w-lg rounded-2xl border p-6",
              panelClassName || "border-[var(--brand-border)] bg-[var(--brand-glass)] text-[var(--brand-fg)]")}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function MotionToast({
  open, onClose, children, className,
}: { open: boolean; onClose: () => void; children: React.ReactNode; className?: string; }) {
  const b = getBrand();
  useEffect(() => { if (!open) return; const t = setTimeout(onClose, 3500); return () => clearTimeout(t); }, [open, onClose]);
  return (
    <div className="pointer-events-none fixed inset-0 z-50 flex items-end justify-center p-4">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: b.motion.base, ease: b.motion.ease }}
            className={cx("pointer-events-auto rounded-lg border px-3 py-2 text-sm backdrop-blur-md", className)}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
