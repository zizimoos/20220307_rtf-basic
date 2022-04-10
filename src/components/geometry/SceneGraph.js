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

const Moon = () => {
  return (
    <>
      <mesh>
        <sphereGeometry attach="geometry" args={[0.1, 8, 8]} />
        <meshPhongMaterial attach="material" color="dimgray" />
      </mesh>
      <axesHelper args={[1]} />
    </>
  );
};
const Earth = () => {
  return (
    <>
      <mesh>
        <sphereGeometry attach="geometry" args={[0.2, 8, 8]} />
        <meshPhongMaterial attach="material" color="teal" />
      </mesh>
      <axesHelper args={[2]} />
    </>
  );
};
const Sun = () => {
  return (
    <>
      <mesh>
        <sphereGeometry attach="geometry" args={[1, 16, 16]} />
        <meshPhongMaterial
          attach="material"
          emissive="crimson"
          color="crimson"
          flatShading={true}
        />
      </mesh>
      <axesHelper args={[100]} />
    </>
  );
};

const SunAnimation = (props) => {
  useFrame(({ clock }) => {
    props.thisBox.current.rotation.y =
      clock.getElapsedTime() * ((20 * Math.PI) / 180);
  });
  return null;
};
const EarthAnimation = (props) => {
  useFrame(({ clock }) => {
    props.earth.current.rotation.y =
      clock.getElapsedTime() * ((80 * Math.PI) / 180);
  });
  return null;
};
const MoonAnimation = (props) => {
  useFrame(({ clock }) => {
    props.moon.current.rotation.y =
      clock.getElapsedTime() * ((320 * Math.PI) / 180);
  });
  return null;
};

function SceneGraph(props) {
  const thisBox = useRef(null);
  const earth = useRef(null);
  const moon = useRef(null);

  return (
    <Container>
      <Title>BoxGeometry</Title>
      <Canvas
        concurrent
        gl={{ antialias: true }}
        camera={{ position: [0, 5, 5] }}
      >
        <ambientLight />
        <directionalLight position={[-1, 10, 10]} color="white" intensity={1} />
        <group ref={thisBox}>
          <Sun />
          <SunAnimation thisBox={thisBox} />
          <group ref={earth} position={[3, 0, 0]}>
            <Earth />
            <EarthAnimation earth={earth} />
            <group ref={moon} position={[0.5, 0, 0]}>
              <Moon />
              <MoonAnimation moon={moon} />
            </group>
          </group>
        </group>
        <OrbitControls enablePan={true} zoomSpeed={0.5} />
      </Canvas>
    </Container>
  );
}

export default SceneGraph;
