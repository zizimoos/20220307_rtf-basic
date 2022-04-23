import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import styled from "styled-components";

import ArcherModel from "./models/Archer";
import Plane from "./Plane";

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
const ControlBox = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Archer(props) {
  const [action, setAction] = useState("walking");
  return (
    <Container>
      <Title>Archer</Title>
      <ControlBox>
        <button
          onClick={() => {
            setAction("Death");
          }}
        >
          Death
        </button>
        <button
          onClick={() => {
            setAction("DrawArrow");
          }}
        >
          DrawArrow
        </button>
        <button
          onClick={() => {
            setAction("RunForward");
          }}
        >
          RunForward
        </button>
        <button
          onClick={() => {
            setAction("StandingIdle");
          }}
        >
          Idel
        </button>
        <button
          onClick={() => {
            setAction("walking");
          }}
        >
          Walking
        </button>
      </ControlBox>
      <Canvas
        concurrent
        gl={{ antialias: true }}
        camera={{ position: [-3, 1, 4] }}
      >
        <ambientLight />
        <directionalLight
          position={[0, 20, 10]}
          color="white"
          intensity={0.5}
          castShadow
        />
        <pointLight position={[-1, 1, 3]} color="red" intensity={2} />
        <pointLight position={[1, 1, 3]} color="blue" intensity={2} />
        <pointLight position={[0, 3, -10]} color="white" intensity={2} />
        <Suspense fallback={null}>
          <ArcherModel action={action} />
        </Suspense>
        <Plane rotation={[-Math.PI / 2, 0, 0]}></Plane>
        <OrbitControls enablePan={true} zoomSpeed={0.5}></OrbitControls>
      </Canvas>
    </Container>
  );
}

export default Archer;
