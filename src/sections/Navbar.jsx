import { useState } from "react"
import { motion } from "motion/react"

function Navigation({ onLinkClick }){
  // Smooth scroll handler for nav links
  const handleNavClick = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (window.lenis && target) {
      window.lenis.scrollTo(target, { offset: -60 }); // adjust offset for fixed navbar
    }
    else if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    if (onLinkClick) {
      onLinkClick();
    }
  };
  return <>
    <ul className="nav-ul">
      <li className="nav-li"><a href="#home" className="nav-link" onClick={e => handleNavClick(e, 'home')}>Home</a></li>
      <li className="nav-li"><a href="#about" className="nav-link" onClick={e => handleNavClick(e, 'about')}>About</a></li>
      <li className="nav-li"><a href="#work" className="nav-link" onClick={e => handleNavClick(e, 'work')}>Work</a></li>
      <li className="nav-li"><a href="#contact" className="nav-link" onClick={e => handleNavClick(e, 'contact')}>Contact</a></li>
    </ul>
  </>
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40" style={{ backdropFilter: 'blur(12px)' }}>
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a href="/" className="py-3">
            <img src='assets/header_logo.png' alt="Header Image Logo" className="h-8 sm:h-10"/>
          </a>
          <button onClick={() => setIsOpen(!isOpen)} className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden">
            <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"} alt="toggle" className="h-6 w-6" />
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>
      {isOpen && <motion.div className="block overflow-hidden text-center sm:hidden"
        initial={{opacity:0, x: -10}}
        animate={{opacity:1, x:10}}
        transition={{duration: 1}}
        style={{maxHeight: '100vh'}}
      >
        <nav className="pb-5"><Navigation onLinkClick={() => setIsOpen(false)}/></nav>
      </motion.div>}
    </div>
  )
}

export default Navbar
