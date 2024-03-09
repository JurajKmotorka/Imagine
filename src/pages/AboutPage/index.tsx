import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
function About() {
  return (
    <div id="canvas-container" className="w-[100vw] h-[100vh]">
      <Canvas camera={{ fov: 70, position: [0, 0, 5] }}>
        <Scene />
      </Canvas>
    </div>
  );
}

export default About;
