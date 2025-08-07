import ParallaxBackground from './components/ParallaxBackground'
import About from './sections/About'
import Contact from './sections/Contact'
import Experiences from './sections/Experiences'
import Footer from './sections/Footer'
import Hero from './sections/Hero'
import Navbar from './sections/Navbar'
import Projects from './sections/Projects'
import Testimonial from './sections/Testimonial'
import WebsiteLoader from './components/WebsiteLoader'
import Certifications from './components/Certifications';
import { certificateData } from './constants';

const App = () => {
  return (
    <WebsiteLoader>
      <div className='container mx-auto max-w-7xl'>
        <Navbar />
        <Hero />
        <ParallaxBackground />
        <About />
        <Projects />
        <Certifications certificates={certificateData} />
        <Experiences />
        {/* <Testimonial /> */}
        <Contact />
        <Footer />
      </div>
    </WebsiteLoader>
  )
}

export default App
