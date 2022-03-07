import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
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

const shape = new THREE.Shape();
shape.moveTo(1, 1);
shape.lineTo(1, -1);
shape.lineTo(-1, -1);
shape.lineTo(-1, 1);
shape.closePath();

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

function ShapeGeometry(props) {
  const thisBox = useRef(null);
  return (
    <Container concurrent gl={{ antialias: true }}>
      <Title>BoxGeometry</Title>
      <Canvas>
        <ambientLight />
        <directionalLight position={[-1, 10, 10]} color="white" intensity={1} />
        <group ref={thisBox}>
          <mesh>
            <shapeGeometry attach="geometry" args={[shape]} />
            <meshPhongMaterial attach="material" color="dimgray" />
          </mesh>
          <line>
            <shapeGeometry attach="geometry" args={[shape]} />
            <lineBasicMaterial attach="material" color="yellow" wireframe />
          </line>
          <axesHelper args={[100]} />
        </group>

        <Animation thisBox={thisBox} />
        <OrbitControls enablePan={true} zoomSpeed={0.5} />
      </Canvas>
    </Container>
  );
}

export default ShapeGeometry;
