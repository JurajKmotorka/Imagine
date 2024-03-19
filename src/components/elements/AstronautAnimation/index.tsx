import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import { Suspense } from "react";
function AstronautAnimation() {
  return (
    <div className="bg-[url('/blob.svg')]  h-[30vh] md:h-auto   lg:w-[56rem]  bg-cover bg-center ">
      <Canvas>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default AstronautAnimation;
