import {motion, useScroll, useSpring, useTransform} from 'motion/react'

function ParallaxBackground() {
  const {scrollYProgress} = useScroll();
  const x = useSpring(scrollYProgress, {damping: 50})
  const mountain3Y = useTransform(x, [0, 1], [0, 200]);
  const planetsX = useTransform(x, [0, 1], [0, -150]);
  const mountain2Y = useTransform(x, [0, 1], [0, 100]);
  const mountain1Y = useTransform(x, [0, 1], [0, 40]);
  return (
    <section className="absolute inset-0 bg-black/40">
      <div className="relative h-screen overflow-hidden">
        {/* Background Sky */}
        <div className="absolute inset-0 w-full h-screen -z-50" 
          style={{
            backgroundImage: "url('https://res.cloudinary.com/dna4sajpg/image/upload/v1752327130/portfolio_projects/rko34uiizzdgag5rhken.jpg')",
            backgroundPosition: 'bottom',
            backgroundSize: 'cover'
          }}>
        </div>
        {/* Mountain Layer */}
        <motion.div className="absolute inset-0 w-full h-screen -z-40" 
          style={{
            backgroundImage: "url('https://res.cloudinary.com/dna4sajpg/image/upload/v1752327122/portfolio_projects/naqioteif47haqiiwztc.png')",
            backgroundPosition: 'bottom',
            backgroundSize: 'cover',
            y: mountain3Y
          }}>
        </motion.div>
        {/* Planets */}
        <motion.div className="absolute inset-0 w-full h-screen -z-30" 
          style={{
            backgroundImage: "url('https://res.cloudinary.com/dna4sajpg/image/upload/v1752327125/portfolio_projects/rneot917hccnukrgnwjc.png')",
            backgroundPosition: 'bottom',
            backgroundSize: 'cover',
            x: planetsX
          }}
            initial={{opacity: 0, y: -20}}
            animate={{opacity:1, y:0}}
            transition={{delay: 2, duration: .6}}
          >
        </motion.div>
        {/* Mountain Layer 2 */}
        <motion.div className="absolute inset-0 w-full h-screen -z-20" 
          style={{
            backgroundImage: "url('https://res.cloudinary.com/dna4sajpg/image/upload/v1752327115/portfolio_projects/ftmjcmr7usgc3auakzxn.png')",
            backgroundPosition: 'bottom',
            backgroundSize: 'cover',
            y: mountain2Y
          }}>
        </motion.div>
        {/* Mountain Layer 1 */}
        <motion.div className="absolute inset-0 w-full h-screen -z-10" 
          style={{
            backgroundImage: "url('https://res.cloudinary.com/dna4sajpg/image/upload/v1752327108/portfolio_projects/nfqi6tjrkz57fszzzv4r.png')",
            backgroundPosition: 'bottom',
            backgroundSize: 'cover',
            y: mountain1Y
          }}>
        </motion.div>
      </div>
    </section>
  )
}

export default ParallaxBackground