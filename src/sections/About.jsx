import { useRef, lazy, Suspense } from "react"
import Card from "../components/Card"
// Lazy load the Globe component to improve initial load time
const Globe = lazy(() => import("../components/Globe").then(module => ({
  default: module.Globe
})));
import CopyEmailButton from "../components/CopyEmailButton";
import {Frameworks} from "../components/Frameworks";
function About() {
  const grid2Container = useRef();
  return (
    <section id="about" className="c-space section-spacing">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end relative grid-default-color grid-1">
          <img src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?semt=ais_hybrid&w=740" alt="coding image" className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-30 md:inset-y-25 lg:scale-[1.7]"/>
          <div className="z-10">
          <p className="headtext">Hi, I'm Khilesh Jawale</p>
          <p className="subtext">Over the past year, I've built fast, scalable web apps with modern frontend and backend tools.</p>
          </div>
          <div className="absolute pointer-events-none bottom-0 left-0 w-full h-1/2 sm:h-1/4 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2" ref={grid2Container}>
          <div className="flex items-center justify-center w-full h-full">
            <p className="text-5xl text-gray-500">CODE IS CRAFT</p>
            <Card style={{rotate: '75deg', top: '30%', left: '20%'}} text={"SOLID"} containerRef={grid2Container} />
            <Card style={{rotate: '-30deg', top: '60%', left: '45%'}} text={"Design Principles"} containerRef={grid2Container} />
            <Card style={{rotate: '90deg', bottom: '30%', left: '70%'}} text={"Design Patterns"} containerRef={grid2Container} />
            <Card style={{rotate: '30deg', top: '70%', left: '70%'}} image={'assets/logos/css3.svg'} containerRef={grid2Container} />
            <Card style={{rotate: '-25deg', top: '30%', left: '70%'}} image={'assets/logos/html5.svg'} containerRef={grid2Container} />
            <Card style={{rotate: '47deg', top: '30%', left: '10%'}} image={'assets/logos/javascript.svg'} containerRef={grid2Container} />
            <Card style={{rotate: '47deg', top: '65%', left: '25%'}} image={'assets/logos/react.svg'} containerRef={grid2Container} />
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">I'm based in India, and open to remote work worldwide.</p>
            <figure className="absolute left-[70%] -top-[12%] scale-200">
              <Suspense fallback={<div className="size-full flex items-center justify-center">Loading...</div>}>
                <Globe />
              </Suspense>
            </figure>
          </div>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="textcenter headtext">Do you want to start a project together?</p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headtext">Tech Stack</p>
            <p className="subtext">I specialize in a variety of languages, Framework and tools that allow me to build Robust and Scalable Applications.</p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>

      </div>
    </section>
  )
}

export default About