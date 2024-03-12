import { CameraControls, PerspectiveCamera, Stage } from "@react-three/drei";
import Donut from "./Donut";
import Astronaut from "./Astronaut";
import MacBook from "./MacBook";
import { degToRad } from "three/src/math/MathUtils";

function Scene() {
  return (
    <>
      <PerspectiveCamera
        makeDefault
        position={[-4, 0, 20]}
        fov={60}
        rotation={[0, -0.2, 0]}
      />
      <Donut position={[12, 2, 0.5]} rotation={[1, -10, 69]} />
      <ambientLight intensity={10} />
      <directionalLight intensity={100} position={[10, 10, 5]} />
      <MacBook position={[2, 0, 4]} rotation={[0, 2, 0]} />
      <Astronaut
        position={[10, -8, 2]}
        scale={4}
        rotation={[degToRad(-55), degToRad(-45), degToRad(-55)]}
      />
    </>
  );
}

export default Scene;
