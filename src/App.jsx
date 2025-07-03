import ParallaxBackground from './components/ParallaxBackground'
import Hero from './sections/Hero'
import Navbar from './sections/Navbar'

const App = () => {
  return (
    <div className='container mx-auto max-w-7xl'>
      <Navbar />
      <Hero />
      <ParallaxBackground />
      <section className='min-h-[100vh]'></section>
      <section className='min-h-[100vh]'></section>
      <section className='min-h-[100vh]'></section>
    </div>
  )
}

export default App
