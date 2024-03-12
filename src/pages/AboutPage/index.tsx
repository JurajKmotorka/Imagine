import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import { Suspense } from "react";

function About() {
  return (
    <div
      id="canvas-container"
      className="w-[100vw] h-[100vh] bg-[url(/galaxy.jpg)] bg-cover bg-center brightness-50"
    >
      <Canvas shadows="soft">
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default About;
