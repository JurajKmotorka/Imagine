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

type ContextType = Record<
  string,
  React.ForwardRefExoticComponent<JSX.IntrinsicElements["mesh"]>
>;

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
  materials.aluminium.metalness = 0.8;
  materials.trackpad.metalness = 0.8;
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
                position={[0, 0.05, -0.09]}
                transform
                occlude
              >
                <div
                  className="bg-white w-[21rem] h-[13.2rem]"
                  onPointerDown={(e) => e.stopPropagation()}
                >
                  <img src="https://images.unsplash.com/photo-1662032370568-3ea9738888c7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
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
