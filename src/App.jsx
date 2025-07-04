import ParallaxBackground from './components/ParallaxBackground'
import About from './sections/About'
import Experiences from './sections/Experiences'
import Hero from './sections/Hero'
import Navbar from './sections/Navbar'
import Projects from './sections/Projects'

const App = () => {
  return (
    <div className='container mx-auto max-w-7xl'>
      <Navbar />
      <Hero />
      <ParallaxBackground />
      <About />
      <Projects />
      <Experiences />
      <section className='min-h-[100vh]'></section>
      <section className='min-h-[100vh]'></section>
      <section className='min-h-[100vh]'></section>
    </div>
  )
}

export default App
