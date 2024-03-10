/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/scene.gltf -t -o src/pages/AboutPage/Donut.tsx 
Author: ¡Jacques (https://sketchfab.com/iJacques)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/donut-20-8d6cac74abfc4b408ec86c37661fa5a6
Title: Donut 2.0
*/

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Object_4: THREE.Mesh;
    Object_6: THREE.Mesh;
    Object_8: THREE.Mesh;
  };
  materials: {
    donut: THREE.MeshStandardMaterial;
    icing: THREE.MeshPhysicalMaterial;
    sprinkles_bake: THREE.MeshStandardMaterial;
  };
  animations: any;
};

type ContextType = Record<
  string,
  React.ForwardRefExoticComponent<JSX.IntrinsicElements["mesh"]>
>;

export default function Donut(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/scene.gltf") as GLTFResult;
  materials.icing.transparent = true; // Enable transparency
  materials.icing.opacity = 0.6; // Set opacity to 80%
  materials.icing.color = new THREE.Color(0xff0000);
  materials.icing.metalness = 0.2;
  materials.icing.roughness = 0.3;
  return (
    <group {...props} dispose={null} castShadow>
      <mesh
        castShadow
        geometry={nodes.Object_4.geometry}
        material={materials.donut}
        position={[0, 0.037, 0]}
      />
      <mesh
        castShadow
        geometry={nodes.Object_6.geometry}
        material={materials.icing}
        position={[0, 0.037, 0]}
      />
      <mesh
        castShadow
        geometry={nodes.Object_8.geometry}
        material={materials.sprinkles_bake}
        position={[0.076, 0.082, 0.009]}
        rotation={[1.448, 0.073, 3.007]}
        scale={0.141}
      />
    </group>
  );
}

useGLTF.preload("/scene.gltf");