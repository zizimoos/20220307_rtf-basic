import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef, Suspense } from "react";
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

const MeshStandard = () => {
  const thisBox = useRef();

  // const vertices = [-1, 1, 0, 1, 1, 0, -1, -1, 0, 1, -1, 0];

  // const [positions] = useMemo(() => {
  //   const positions = new Float32Array(vertices, 3);
  //   // const sizes = new Float32Array(count * 3);

  //   return [positions];
  // }, [vertices]);

  return (
    <group ref={thisBox}>
      <mesh>{/* <axesHelper args={[4]} /> */}</mesh>
      <mesh position={[1, -1, 0]}>
        <boxGeometry attach="geometry" args={[1, 1, 1]} />
        <meshPhysicalMaterial
          attach="material"
          color="teal"
          emissive="black"
          roughness={1}
          metalness={0}
          clearcoat={1}
          clearcoatRoughness={0}
          wireframe={false}
          flatShading={false}
        />
        <axesHelper args={[1]} />
      </mesh>
      <mesh position={[1, 1, 0]}>
        <boxGeometry attach="geometry" args={[1, 1, 1]} />
        <meshStandardMaterial
          attach="material"
          color="teal"
          emissive="black"
          roughness={0.2}
          metalness={0.3}
          wireframe={false}
          flatShading={false}
        />
        <axesHelper args={[1]} />
      </mesh>
      <mesh position={[-1, -1, 0]}>
        <sphereGeometry attach="geometry" args={[0.5, 16, 16]} />
        <meshPhysicalMaterial
          attach="material"
          color="teal"
          emissive="black"
          roughness={1}
          metalness={0}
          clearcoat={1}
          clearcoatRoughness={0}
          wireframe={false}
          flatShading={false}
        />
        <axesHelper args={[1]} />
      </mesh>
      <mesh position={[-1, 1, 0]}>
        <sphereGeometry attach="geometry" args={[0.5, 16, 16]} />
        <meshStandardMaterial
          attach="material"
          color="teal"
          emissive="black"
          roughness={0.2}
          metalness={0.3}
          wireframe={false}
          flatShading={false}
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
      <Canvas concurrent gl={{ antialias: true }}>
        <ambientLight />
        <directionalLight position={[0, 20, 10]} color="white" intensity={1} />
        <Suspense fallback={null}>
          <MeshStandard />
        </Suspense>
        <OrbitControls enablePan={true} zoomSpeed={0.5} />
      </Canvas>
    </Container>
  );
}

export default MeshPhysicalMaterial;
