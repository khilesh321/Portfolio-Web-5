import Project from "../components/Project"
import { myProjects } from "../constants"
import {motion, useSpring, useMotionValue} from 'motion/react'
import { useState } from "react";

function Projects() {
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
      {preview && <motion.img className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg border-2 border-neutral-500 pointer-events-none"
        style={{x: springX, y: springY}}
        src={preview}
      />}
    </section>
  )
}

export default Projects