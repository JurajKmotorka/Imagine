import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import { Suspense } from "react";
function AstronautAnimation() {
  return (
    <div className="bg-[url('/blob.svg')]  h-[50vh]   md:w-[36rem]  md:h-[26rem] bg-cover bg-center ">
      <Canvas>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default AstronautAnimation;
