import { OrbitControls, Float } from "@react-three/drei"
import { Astronaut } from "../components/Astronaut"
import HeroText from "../components/HeroText"
import { Canvas, useFrame } from "@react-three/fiber"
import { useMediaQuery } from "react-responsive"
import { easing } from "maath"
import Loader from "../components/Loader"
import { Suspense } from "react"

const Hero = () => {
  const isMobile = useMediaQuery({maxWidth: 853});
  return (
    <section className="flex items-start justify-center md:justify-start min-h-screen overflow-hidden c-space">
      <HeroText />
      <figure className="absolute inset-0 z-10" style={{width: '100vw', height: '100vh'}}>
        <Canvas camera={{position: [0,1,3]}}>
          <Suspense fallback={<Loader />}>
            <Float>
              <Astronaut scale={isMobile && 0.23} position={isMobile && [0, -1.5, 0]} />
            </Float>
            <OrbitControls enableZoom={false} />
            <Rig />
          </Suspense>
        </Canvas>
      </figure>
    </section>
  )
}

function Rig(){
  useFrame((state, delta) => {
  easing.damp3(state.camera.position, [state.mouse.x / 4, state.mouse.y / 4 + 1, 3], .5, delta)
  })
  return null
}

export default Hero