import tutorials from "../data/tutorials";
import TutorialCard from "../components/Card";
import { motion } from "framer-motion";
import Iridescence from '@/components/Iridescence';
// import DarkVeil from "@/components/DarkVeil";
//  import DarkVeil from './DarkVeil';


export default function Home() {
  return (
    <>
      <div className="relative min-h-screen overflow-hidden">

        {/* BACKGROUND */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <Iridescence
            color={[0.6, 0.6, 0.8]}
            mouseReact={false}
            amplitude={0.1}
            speed={1}
          />
        </div>

        {/* FOREGROUND CONTENT */}
        <div className="relative z-10 min-h-screen py-12">
          <div className="container mx-auto">

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-center 
              text-white mb-4"
            >
              Learn Smartphone Skills
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center font-semibold text-white max-w-2xl mx-auto mb-10"
            >
              Simple, step-by-step tutorials to help parents and beginners
              master smartphones with confidence 🤍
            </motion.p>

            {/* Cards */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.12 } },
              }}
              className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            >
              {tutorials.map((x) => (
                <motion.div
                  key={x.slug}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  whileHover={{ scale: 1.05 }}
                  className="hover:shadow-2xl rounded-2xl transition-all"
                >
                  <TutorialCard {...x} />
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </div>
      {/* <div className="container mx-auto">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    Learn Smartphone Skills
                </h1>
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        tutorials.map((x) => (
                            <TutorialCard key={x.slug} {...x} />
                        ))
                    }
                </div>
            </div> */}
    </>
  )
}


