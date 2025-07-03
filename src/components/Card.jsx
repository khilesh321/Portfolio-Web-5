import {motion} from 'motion/react'

function Card({image, text, style, containerRef}) {
  return image && !text ? (
    <motion.img src={image} style={style} className="absolute w-15 cursor-grab" whileHover={{scale: 1.05}} drag dragConstraints={containerRef} dragElastic={1}/>
  ):
  (
    <motion.div style={style} className="absolute px-1 py-4 text-xl text-center rounded-full border border-gray-700 font-extralight bg-storm w-[12rem] cursor-grab" whileHover={{scale: 1.05}} drag dragConstraints={containerRef} dragElastic={1}>{text}</motion.div>
  )
}

export default Card