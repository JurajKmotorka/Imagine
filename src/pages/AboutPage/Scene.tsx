import { OrbitControls, Sphere } from "@react-three/drei";
import Donut from "./Donut";

function GroundPlane() {
  return (
    <mesh
      receiveShadow={true}
      rotation={[Math.PI / -2, 0, 0]}
      position={[0, 0, 0]}
    >
      <planeGeometry attach="geometry" args={[500, 500]} />
      <meshStandardMaterial attach="material" color="white" />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.3} />
      <directionalLight
        castShadow
        position={[0, 10, 5]}
        intensity={5}
        shadow-mapSize={[1024, 1024]}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <Donut scale={10} position={[0, 0, 0]} castShadow={true} />

      <GroundPlane />
    </>
  );
}

export default Scene;
