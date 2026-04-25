import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useTransform, motion, animate } from "motion/react";

export default function AnimatedCounter({
  value,
  duration = 2.5
}: {
  value: string;
  duration?: number;
}) {
  // Extract the number and the suffix (e.g., "97" and "%", or "850" and "+")
  const numberMatch = value.match(/(\d+)/);
  const targetNumber = numberMatch ? parseInt(numberMatch[0], 10) : 0;
  const suffix = value.replace(numberMatch ? numberMatch[0] : "", "");

  const ref = useRef<HTMLSpanElement>(null);
  // Trigger animation when the element comes into view
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const count = useMotionValue(0);
  const displayCount = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      if (targetNumber <= 3) {
        const controls = animate(count, targetNumber, { duration, ease: "circOut" });
        return () => controls.stop();
      }

      let isCancelled = false;
      let interval: ReturnType<typeof setInterval>;
      
      // Phase 1: Zoom up to (target - 3) using circOut
      const tickTarget = targetNumber - 3;
      const phase1Duration = duration * 0.7; 
      
      const controls = animate(count, tickTarget, { 
        duration: phase1Duration, 
        ease: "circOut",
        onComplete: () => {
          if (isCancelled) return;
          
          // Phase 2: Distinctly "tick" the last 3 numbers
          const tickTimeMs = (duration * 0.3 * 1000) / 3;
          let ticksDone = 1;
          
          // Instantly jump to the first tick after Phase 1 ends
          count.set(tickTarget + ticksDone);
          ticksDone++;

          interval = setInterval(() => {
            if (isCancelled) return;
            count.set(tickTarget + ticksDone);
            ticksDone++;
            if (ticksDone > 3) {
              clearInterval(interval);
            }
          }, tickTimeMs);
        }
      });
      
      return () => {
        isCancelled = true;
        controls.stop();
        if (interval) clearInterval(interval);
      };
    }
  }, [isInView, targetNumber, count, duration]);

  return (
    <span ref={ref} className="inline-flex">
      <motion.span>{displayCount}</motion.span>
      {suffix}
    </span>
  );
}
