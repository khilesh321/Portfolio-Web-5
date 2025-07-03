import { FlipWords } from "./FlipWords"
import { motion } from 'motion/react'

function HeroText() {
  const words = ["Innovative", "Scalable", "Dynamic", "Immersive", "Next-Gen", "Responsive", "Future-Ready"];
  const variants = {
    hidden: {opacity: 0, x:-50},
    visible: {opacity: 1, x:0}
  }
  function motionProps(delay){
    return {
    variants: variants,
    initial:'hidden',
    animate:'visible',
    transition:{delay: delay}
  }}
  
  return (
    <div className="z-10 mt-25 text-center md:mt-50 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1 className="text-3xl font-medium" {...motionProps(1)}>Hi I'm Khilesh</motion.h1>
        <div className="flex flex-col items-start">
          <motion.p className="text-4xl font-medium text-neutral-300" {...motionProps(1.2)}>
            A Developer <br />Dedicated to Crafting
          </motion.p>
          <motion.div {...motionProps(1.5)}>
            <FlipWords words={words} className='font-black text-white text-7xl'/>
          </motion.div>
          <motion.p className="text-3xl font-medium text-neutral-300" {...motionProps(1.8)}>Web Solutions</motion.p>
        </div>
      </div>
      {/* Mobile View */}
      <div className="flex flex-col space-y-6 md:hidden">
        <p className="text-4xl font-medium">Hi I'm Khilesh</p>
        <div>
          <p className="text-5xl font-black text-neutral-300">Buidling</p>
          <div><FlipWords words={words} className='font-bold text-white text-7xl'/></div>
          <p className="text-5xl font-black text-neutral-300">Web Applications</p>
        </div>
      </div>
    </div>
  )
}

export default HeroText