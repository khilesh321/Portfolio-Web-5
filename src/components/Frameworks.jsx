import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const techStackLogos = ['html5', 'css3', 'javascript', 'react', 'tailwindcss', 'python', 'java', 'node', 'mongodb', 'mysql', 'git', 'github', 'express', 'c', 'gsap', 'framer-motion'];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40} >
      {techStackLogos.map((skill, index) => (
        <Icon key={index} src={`assets/logos/${skill}.svg`} />
      ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={22} radius={100} reverse speed={2}>
        {techStackLogos.reverse().map((skill, index) => (
        <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({src}) => {
  return <img src={src} className="duration=200 rounded-sm hover:scale-110" />
}
