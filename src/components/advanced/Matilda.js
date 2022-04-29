import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import MatildaModel from "./models/Matilda";
import Plane from "./Plane";
import { OrbitControls } from "@react-three/drei";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: black;
`;
const Title = styled.h1`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Matilda(props) {
  return (
    <Container>
      <Title>Matilda</Title>
      <Canvas
        concurrent
        gl={{ antialias: true }}
        camera={{ position: [-3, 1, 4] }}
      >
        <ambientLight />
        <directionalLight position={[10, 10, 15]} castShadow />
        <Suspense fallback={null}>
          <MatildaModel />
        </Suspense>
        <Plane rotation={[-Math.PI / 2, 0, 0]}></Plane>
        <OrbitControls />
      </Canvas>
    </Container>
  );
}

export default Matilda;
