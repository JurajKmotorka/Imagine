import {
  CameraControls,
  ContactShadows,
  PerspectiveCamera,
} from "@react-three/drei";
import Donut from "./Donut";
import MacBook from "./MacBook";

function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[-10, 5, 15]} />

      <CameraControls />
      <ambientLight intensity={0.3} />
      <directionalLight
        castShadow
        position={[8, 10, -6]}
        intensity={3}
        shadow-mapSize={[1024, 1024]}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />

      <Donut position={[1.8, 0, 0.5]} />

      <ContactShadows
        position={[0.1, 0, -0.1]}
        blur={2.5}
        far={0.1}
        scale={12}
        frames={1}
      />
      <MacBook position={[0, 0, -8]} />
    </>
  );
}

export default Scene;
