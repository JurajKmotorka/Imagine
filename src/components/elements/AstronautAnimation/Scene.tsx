import { useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { PerspectiveCamera, Stars } from "@react-three/drei";
import { degToRad } from "three/src/math/MathUtils";
import Astronaut from "./Astronaut";
import MacBook from "./MacBook";

function Scene() {
  const groupRef = useRef<any>();
  const starRef = useRef<any>();
  const { viewport } = useThree();

  const [scale, setScale] = useState(0.02);

  useFrame(({ mouse }) => {
    if (scale < 1.1) {
      setScale((prevScale) => prevScale + 0.002 / (scale * 2));
    }

    const x = (mouse.x * viewport.width) / 300;
    const y = (mouse.y * viewport.height) / 200;

    // Apply rotation to the Astronaut
    starRef.current.rotation.set(x, y, 0);
  });

  return (
    <>
      <PerspectiveCamera
        makeDefault
        position={[-4, 0, 20]}
        fov={40}
        rotation={[0, -0.2, 0]}
      />
      <ambientLight intensity={10} />
      <directionalLight intensity={200} position={[10, 10, 5]} />
      <group ref={starRef}>
        <Stars radius={80} depth={50} count={840} factor={4} speed={1.2} />
      </group>

      <group
        ref={groupRef}
        position={[-10, 2, 0]}
        rotation={[0, degToRad(30), 0]}
        scale={[scale, scale, scale]}
      >
        <MacBook position={[5, 0, 2]} rotation={[0, 2, 0]} scale={0.8} />
        <Astronaut
          position={[10, -8, 2]}
          scale={4}
          rotation={[degToRad(-55), degToRad(-45), degToRad(-55)]}
        />
      </group>
    </>
  );
}

export default Scene;
