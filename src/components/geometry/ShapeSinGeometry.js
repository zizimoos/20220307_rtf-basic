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

class CustomSinCurve extends THREE.Curve {
  constructor(scale) {
    super();
    this.scale = scale;
  }
  getPoint(t) {
    const tx = t * 3 - 1.5;
    const ty = Math.sin(2 * Math.PI * t);
    const tz = 0;
    return new THREE.Vector3(tx, ty, tz).multiplyScalar(this.scale);
  }
}
const path = new CustomSinCurve(4);

function ShapeSinGeometry(props) {
  const thisBox = useRef(null);
  return (
    <Container concurrent gl={{ antialias: true }}>
      <Title>BoxGeometry</Title>
      <Canvas camera={{ position: [0, 0, 20] }}>
        <ambientLight />
        <directionalLight position={[-1, 10, 10]} color="white" intensity={1} />
        <group ref={thisBox}>
          <mesh>
            <tubeGeometry attach="geometry" args={[path]} />
            <meshPhongMaterial attach="material" color="dimgray" />
          </mesh>
          <line>
            <tubeGeometry attach="geometry" args={[path]} />
            <lineBasicMaterial attach="material" color="yellow" />
          </line>
          <axesHelper args={[100]} />
        </group>

        <Animation thisBox={thisBox} />
        <OrbitControls enablePan={true} zoomSpeed={0.5} />
      </Canvas>
    </Container>
  );
}

export default ShapeSinGeometry;
