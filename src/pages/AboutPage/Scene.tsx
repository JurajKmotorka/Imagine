import { OrbitControls, Sphere, Environment } from "@react-three/drei";
import { useControls } from "leva";
const ReflectiveSphere = () => {
  const tweakableProperties = useControls({
    color: "#ff0000",
    roughness: { value: 0, min: 0, max: 1, step: 0.01 },
    metalness: { value: 1, min: 0, max: 1, step: 0.01 },
  });

  return (
    <Sphere args={[1, 32, 32]} position={[0, 0, 0]}>
      <meshStandardMaterial {...tweakableProperties} />
    </Sphere>
  );
};

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <OrbitControls /> <ReflectiveSphere />
      <Environment preset="city" background />
    </>
  );
}

export default Scene;
