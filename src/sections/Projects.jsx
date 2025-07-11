import Project from "../components/Project"
import { myProjects } from "../constants"
import {motion, useSpring, useMotionValue, AnimatePresence} from 'motion/react'
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

function Projects() {
  const isSmallScreen = useMediaQuery({maxWidth: 640}); // Tailwind's default 'sm' breakpoint is 640px
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, {damping: 10, stiffness: 50});
  const springY = useSpring(y, {damping: 10, stiffness: 50});
  const [preview, setPreview] = useState(null)
  return (
    <section id="work" className="relative c-space section-spacing"
      onMouseMove={e => {
        x.set(e.clientX + 30)
        y.set(e.clientY - 50)
      }}
    >
      <h2 className="text-heading">My Selected Projects</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full"></div>
      {myProjects.map(project => <Project key={project.id} {...project} setPreview={setPreview}/>)}
      <AnimatePresence>
        {preview && !isSmallScreen && (
          <motion.img 
            className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg ring-2 ring-neutral-500 pointer-events-none"
            style={{x: springX, y: springY}}
            src={preview}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ 
              duration: 0.3, 
              ease: "easeOut",
              scale: { type: "spring", damping: 15, stiffness: 300 }
            }}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
