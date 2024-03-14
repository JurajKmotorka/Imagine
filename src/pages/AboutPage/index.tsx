import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import { Suspense } from "react";
function About() {
  return (
    <div id="canvas-container" className=" w-screen h-screen bg-[#0C134F]  ">
      <div className="bg-[url('/blob.svg')] w-[36rem]  h-[26rem] bg-cover bg-center ">
        <Canvas>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}

export default About;
