import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import styled from "styled-components";

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

function BoxGeometry(props) {
  return (
    <Container>
      <Title>BoxGeometry</Title>
      <Canvas>
        <ambientLight />
        <directionalLight
          position={[10, 10, 10]}
          color="#fffffff"
          intensity={3}
        />
        <mesh>
          <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
          <meshPhongMaterial attach="material" color="white" />
        </mesh>
        <OrbitControls enablePan={true} zoomSpeed={0.5} />
      </Canvas>
    </Container>
  );
}

export default BoxGeometry;
