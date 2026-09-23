import { motion, useReducedMotion } from 'motion/react'

const networkNodes = [
  [244, 584],
  [372, 626],
  [577, 443],
  [757, 490],
  [965, 284],
  [1155, 364],
]

export function AnimatedBackground() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="ambient-grid absolute inset-0" />
      <div className="ambient-vignette absolute inset-0" />
      <motion.div
        className="absolute -top-56 right-[5%] h-[32rem] w-[32rem] rounded-full bg-cyan-500/[0.08] blur-[110px]"
        animate={
          shouldReduceMotion
            ? undefined
            : { x: [0, -38, 18, 0], y: [0, 24, -16, 0], scale: [1, 1.08, 0.96, 1] }
        }
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-64 -left-40 h-[34rem] w-[34rem] rounded-full bg-blue-600/[0.07] blur-[120px]"
        animate={
          shouldReduceMotion
            ? undefined
            : { x: [0, 35, 0], y: [0, -24, 0], scale: [1, 0.94, 1] }
        }
        transition={{ duration: 17, repeat: Infinity, ease: 'easeInOut' }}
      />

      <svg
        className="absolute inset-0 h-full w-full opacity-70"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="network-line" x1="0" x2="1">
            <stop stopColor="#42d9f5" stopOpacity="0" />
            <stop offset=".5" stopColor="#42d9f5" stopOpacity=".26" />
            <stop offset="1" stopColor="#2b6cff" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path
          d="M50 690 244 584l128 42 205-183 180 47 208-206 190 80 230-151"
          fill="none"
          stroke="url(#network-line)"
          strokeWidth="1"
          initial={shouldReduceMotion ? false : { pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 2.4, delay: 0.6, ease: 'easeOut' }}
        />
        {networkNodes.map(([cx, cy], index) => (
          <motion.circle
            key={`${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r="3"
            fill="#70e7fb"
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0 }}
            animate={
              shouldReduceMotion
                ? { opacity: 0.45, scale: 1 }
                : { opacity: [0.25, 0.9, 0.25], scale: [0.8, 1.25, 0.8] }
            }
            transition={{
              duration: 3.2,
              delay: 1.1 + index * 0.16,
              repeat: shouldReduceMotion ? 0 : Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </svg>
      <div className="noise-layer absolute inset-0" />
    </div>
  )
}
