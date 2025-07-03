import { Html, useProgress } from "@react-three/drei"

function Loader() {
  const {progress} = useProgress(); 
  return <Html center className="text-xl text-center font-normal">{progress}% loaded</Html>
}

export default Loader