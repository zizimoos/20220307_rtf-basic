import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef, Suspense } from "react";
import styled from "styled-components";

import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

import iuvmap from "./uv_grid_opengl.jpg";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  color: white;
  background-color: black;
`;

const Title = styled.h1`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Animation = (props) => {
  useFrame(({ clock }) => {
    props.thisBox.current.rotation.x =
      clock.getElapsedTime() * ((10 * Math.PI) / 180);
    props.thisBox.current.rotation.y =
      clock.getElapsedTime() * ((10 * Math.PI) / 180);
    props.thisBox.current.rotation.z =
      clock.getElapsedTime() * ((10 * Math.PI) / 180);
  });
  return null;
};

const Map = () => {
  const thisBox = useRef();

  const uvmap = useLoader(TextureLoader, iuvmap);

  uvmap.repeat.set(2, 2);
  uvmap.wrapS = THREE.RepeatWrapping;
  uvmap.wrapT = THREE.RepeatWrapping;

  uvmap.magFilter = THREE.LinearFilter;
  uvmap.minFilter = THREE.NearestMipMapLinearFilter;

  return (
    <group ref={thisBox}>
      <mesh>{/* <axesHelper args={[4]} /> */}</mesh>
      <mesh position={[1, -1, 0]}>
        <boxGeometry attach="geometry" args={[1, 1, 1]} />
        <meshStandardMaterial attach="material" map={uvmap} />
        <axesHelper args={[1]} />
      </mesh>
      <mesh position={[1, 1, 0]}>
        <boxGeometry attach="geometry" args={[1, 1, 1]} />
        <meshStandardMaterial
          attach="material"
          roughness={0.2}
          metalness={0.3}
          wireframe={false}
          flatShading={false}
          map={uvmap}
        />
        <axesHelper args={[1]} />
      </mesh>
      <mesh position={[-1, -1, 0]}>
        <sphereGeometry attach="geometry" args={[0.5, 16, 16]} />
        <meshStandardMaterial attach="material" map={uvmap} />
        <axesHelper args={[1]} />
      </mesh>
      <mesh position={[-1, 1, 0]}>
        <sphereGeometry attach="geometry" args={[0.5, 16, 16]} />
        <meshStandardMaterial
          attach="material"
          roughness={0.2}
          metalness={0.3}
          wireframe={false}
          flatShading={false}
          map={uvmap}
        />
        <axesHelper args={[1]} />
      </mesh>
      <Animation thisBox={thisBox} />
    </group>
  );
};

function MeshPhysicalMaterial(props) {
  return (
    <Container>
      <Title>PointsMaterial</Title>
      <Canvas
        concurrent
        gl={{ antialias: true }}
        camera={{ position: [0, 4, 0] }}
      >
        <ambientLight intensity={0.1} />
        <directionalLight position={[0, 40, 10]} color="white" intensity={1} />
        <Suspense fallback={null}>
          <Map />
        </Suspense>
        <OrbitControls enablePan={true} zoomSpeed={0.5} />
      </Canvas>
    </Container>
  );
}

export default MeshPhysicalMaterial;
