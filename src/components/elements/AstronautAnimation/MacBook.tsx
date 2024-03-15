import * as THREE from "three";
import { useRef } from "react";
import { useGLTF, Html } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    Cube008: THREE.Mesh;
    Cube008_1: THREE.Mesh;
    Cube008_2: THREE.Mesh;
    keyboard: THREE.Mesh;
    Cube002: THREE.Mesh;
    Cube002_1: THREE.Mesh;
    touchbar: THREE.Mesh;
  };
  materials: {
    aluminium: THREE.MeshStandardMaterial;
    ["matte.001"]: THREE.MeshStandardMaterial;
    ["screen.001"]: THREE.MeshStandardMaterial;
    keys: THREE.MeshStandardMaterial;
    trackpad: THREE.MeshStandardMaterial;
    touchbar: THREE.MeshStandardMaterial;
  };
  animations: any;
};

// type ContextType = Record<
//   string,
//   React.ForwardRefExoticComponent<JSX.IntrinsicElements["mesh"]>
// >;

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/mac-draco.glb") as GLTFResult;

  const group = useRef<any>();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current &&
      (group.current.rotation.x = THREE.MathUtils.lerp(
        group.current?.rotation.x ?? 0,
        Math.cos(t / 2) / 20 + 0.25,
        0.1
      ));
    group.current &&
      (group.current.rotation.y = THREE.MathUtils.lerp(
        group.current?.rotation.y ?? 0,
        Math.sin(t / 4) / 20,
        0.1
      ));
    group.current &&
      (group.current.rotation.z = THREE.MathUtils.lerp(
        group.current?.rotation.z ?? 0,
        Math.sin(t / 8) / 20,
        0.1
      ));
    group.current &&
      (group.current.position.y = THREE.MathUtils.lerp(
        group.current?.position.y ?? 0,
        (-2 + Math.sin(t / 2)) / 2,
        0.1
      ));
  });
  materials.aluminium.metalness = 0.92;
  materials.trackpad.metalness = 0.9;
  materials.touchbar.metalness = 0.8;

  return (
    <group ref={group}>
      <group {...props} dispose={null}>
        <group position={[0.002, -0.038, 0.414]} rotation={[0.014, 0, 0]}>
          <group position={[0, 2.965, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes.Cube008.geometry}
              material={materials.aluminium}
            />
            <mesh
              geometry={nodes.Cube008_1.geometry}
              material={materials["matte.001"]}
            />
            <mesh
              geometry={nodes.Cube008_2.geometry}
              material={materials["screen.001"]}
            >
              <Html
                className="content"
                rotation-x={-Math.PI / 2}
                rotation-y={-Math.PI / 0.94}
                position={[0, -0.1, -0.35]}
                transform
                occlude
              >
                <div
                  className=" w-[4.5rem] "
                  onPointerDown={(e) => e.stopPropagation()}
                >
                  <img src="/spacebook.png" alt="spacebook" />
                </div>
              </Html>
            </mesh>
          </group>
        </group>
        <mesh
          geometry={nodes.keyboard.geometry}
          material={materials.keys}
          position={[1.793, 0, 3.451]}
        />
        <group position={[0, -0.1, 3.394]}>
          <mesh
            geometry={nodes.Cube002.geometry}
            material={materials.aluminium}
          />
          <mesh
            geometry={nodes.Cube002_1.geometry}
            material={materials.trackpad}
          />
        </group>
        <mesh
          geometry={nodes.touchbar.geometry}
          material={materials.touchbar}
          position={[0, -0.027, 1.201]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/mac-draco.glb");
