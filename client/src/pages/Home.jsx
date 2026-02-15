import tutorials from "../data/tutorials"
import TutorialCard from "../components/Card"
import { motion } from "framer-motion"
import HomeBackground from "@/components/HomeBackground"

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none">
        <HomeBackground />
      </div>

      <div className="relative z-10 min-h-screen py-12">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center text-white md:text-4xl mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
          >
            Learn Smartphone Skills
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="text-center font-semibold text-white/95 max-w-2xl mx-auto mb-12 drop-shadow-[0_1px_4px_rgba(0,0,0,0.25)]"
          >
            Simple, step-by-step tutorials to help parents and beginners master
            smartphones with confidence
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={container}
            className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          >
            {tutorials.map((tutorial) => (
              <motion.div
                key={tutorial.slug}
                variants={item}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 rounded-xl outline-none"
              >
                <TutorialCard {...tutorial} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
