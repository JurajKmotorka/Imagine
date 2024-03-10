import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import Scene from "./Scene";
import { Suspense } from "react";
function About() {
  return (
    <div id="canvas-container" className="w-[100vw] h-[100vh]">
      <span className="absolute">some mother fucking text</span>
      <Canvas shadows="soft">
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 5, 0]} />
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default About;
