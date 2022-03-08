import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef, useMemo, Suspense } from "react";
import styled from "styled-components";

import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import texture from "./disc.png";

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
      clock.getElapsedTime() * ((20 * Math.PI) / 180);
    props.thisBox.current.rotation.y =
      clock.getElapsedTime() * ((20 * Math.PI) / 180);
    props.thisBox.current.rotation.z =
      clock.getElapsedTime() * ((20 * Math.PI) / 180);
  });
  return null;
};

const MeshBasic = () => {
  const thisBox = useRef();

  const colormap = useLoader(TextureLoader, texture);

  const vertices = [-1, 1, 0, 1, 1, 0, -1, -1, 0, 1, -1, 0];

  const [positions] = useMemo(() => {
    const positions = new Float32Array(vertices, 3);
    // const sizes = new Float32Array(count * 3);

    return [positions];
  }, [vertices]);

  return (
    <group ref={thisBox}>
      <mesh>
        <boxGeometry attach="geometry" args={[1, 1, 1]} />
        <meshBasicMaterial attach="material" color="teal" wireframe />
      </mesh>
      <mesh>
        <boxGeometry attach="geometry" args={[1, 1, 1]} />
        <meshBasicMaterial
          attach="material"
          color="lavender"
          visible={true}
          transparent={true}
          opacity={0.3}
          depthTest={true}
          depthWrite={true} // z-buffer
          side={THREE.DoubleSide}
        />
        <axesHelper args={[1]} />
      </mesh>
      <mesh position={[2, 0, 0]}>
        <sphereGeometry attach="geometry" args={[0.5, 16, 16]} />
        <meshBasicMaterial
          attach="material"
          color="lavender"
          visible={true}
          transparent={true}
          opacity={0.3}
          depthTest={true}
          depthWrite={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh position={[2, 0, 0]}>
        <sphereGeometry attach="geometry" args={[0.5, 16, 16]} />
        <meshBasicMaterial attach="material" color="teal" wireframe />
        <axesHelper args={[1]} />
      </mesh>

      <Animation thisBox={thisBox} />
    </group>
  );
};

function MeshBasicMaterial(props) {
  return (
    <Container>
      <Title>PointsMaterial</Title>
      <Canvas concurrent gl={{ antialias: true }}>
        <ambientLight />
        <directionalLight position={[-1, 10, 10]} color="white" intensity={1} />
        <Suspense fallback={null}>
          <MeshBasic />
        </Suspense>
        <OrbitControls enablePan={true} zoomSpeed={0.5} />
      </Canvas>
    </Container>
  );
}

export default MeshBasicMaterial;
