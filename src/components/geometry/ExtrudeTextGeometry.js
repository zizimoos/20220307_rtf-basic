import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { extend } from "@react-three/fiber";

import React, { useRef, useMemo } from "react";
import styled from "styled-components";
import Roboto from "../Roboto.json";

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

const Text = () => {
  const font = new FontLoader().parse(Roboto);
  const config = useMemo(
    () => ({
      font: font,
      size: 3,
      height: 1,
      curveSegments: 4,
      bevelEnabled: true,
      bevelThickness: 0.3,
      bevelSize: 0.15,
      bevelOffset: 0,
      bevelSegments: 2,
    }),
    [font]
  );
  extend({ TextGeometry });
  return (
    <group>
      <mesh>
        <textGeometry attach="geometry" args={["HELLO", config]} />
        <meshStandardMaterial attach="material" color="dimgray" />
        <axesHelper args={[100]} />
      </mesh>
      <line>
        <textGeometry attach="geometry" args={["HELLO", config]} />
        <lineBasicMaterial attach="material" color="yellow" wireframe />
      </line>
      <axesHelper args={[100]} />
    </group>
  );
};

function ExtrudeTextGeometry(props) {
  const thisBox = useRef(null);

  return (
    <Container concurrent gl={{ antialias: true }}>
      <Title>BoxGeometry</Title>
      <Canvas camera={{ position: [0, 0, 20] }}>
        <ambientLight />
        <directionalLight position={[-1, 10, 10]} color="white" intensity={1} />
        <group ref={thisBox}>
          <Text />
          <axesHelper args={[100]} />
        </group>

        <Animation thisBox={thisBox} />
        <OrbitControls enablePan={true} zoomSpeed={0.5} />
      </Canvas>
    </Container>
  );
}

export default ExtrudeTextGeometry;
