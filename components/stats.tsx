"use client";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { useEffect, useRef } from "react";

interface AnimatedCounterProps {
  value: number;
  suffix: string;
}

/**
 * A reusable component to animate a number from 0 to a target value.
 * The animation triggers when the component comes into view.
 */
function AnimatedCounter({ value, suffix }: AnimatedCounterProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, {
        duration: 2,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [inView, value, count]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function Stats() {
  const stats = [
    { number: "50+", label: "Projects Launched" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "1M+", label: "Lines of Code Written" },
    { number: "10+", label: "Industries Served" },
  ];

  return (
    <section className="py-20 px-4 bg-card border-y border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold mb-2 bg-linear-to-b from-foreground to-muted-foreground text-transparent bg-clip-text">
                <AnimatedCounter
                  value={parseInt(stat.number.match(/\d+/)?.[0] || "0", 10)}
                  suffix={stat.number.match(/[^\d.]+/)?.[0] || ""}
                />
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

