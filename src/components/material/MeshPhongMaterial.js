import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef, useMemo, Suspense } from "react";
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

const MeshLambert = () => {
  const thisBox = useRef();

  const vertices = [-1, 1, 0, 1, 1, 0, -1, -1, 0, 1, -1, 0];

  const [positions] = useMemo(() => {
    const positions = new Float32Array(vertices, 3);
    // const sizes = new Float32Array(count * 3);

    return [positions];
  }, [vertices]);

  return (
    <group ref={thisBox}>
      <mesh>{/* <axesHelper args={[4]} /> */}</mesh>
      <mesh position={[1, -1, 0]}>
        <boxGeometry attach="geometry" args={[1, 1, 1]} />
        <meshPhongMaterial
          attach="material"
          color="teal"
          emissive="black"
          specular="yellow" // 빛을 받을 때 반사되는 색
          shininess={10} // 빛을 받을 때 반사되는 색의 밝기 강도
          flatShading={false}
          wireframe={false}
        />
        <axesHelper args={[1]} />
      </mesh>
      <mesh position={[1, 1, 0]}>
        <boxGeometry attach="geometry" args={[1, 1, 1]} />
        <meshPhongMaterial
          attach="material"
          color="teal"
          emissive="black"
          specular="black"
          shininess={0}
          flatShading={false}
          wireframe={false}
        />
        <axesHelper args={[1]} />
      </mesh>
      <mesh position={[-1, -1, 0]}>
        <sphereGeometry attach="geometry" args={[0.5, 16, 16]} />
        <meshPhongMaterial
          attach="material"
          color="teal"
          emissive="black"
          specular="yellow"
          shininess={10}
          flatShading={false}
          wireframe={false}
        />
        <axesHelper args={[1]} />
      </mesh>
      <mesh position={[-1, 1, 0]}>
        <sphereGeometry attach="geometry" args={[0.5, 16, 16]} />
        <meshPhongMaterial
          attach="material"
          color="teal"
          emissive="black"
          specular="black"
          shininess={0}
          flatShading={false}
          wireframe={false}
        />
        <axesHelper args={[1]} />
      </mesh>
      <Animation thisBox={thisBox} />
    </group>
  );
};

function MeshPhongMaterial(props) {
  return (
    <Container>
      <Title>PointsMaterial</Title>
      <Canvas concurrent gl={{ antialias: true }}>
        <ambientLight />
        <directionalLight position={[-1, 10, 10]} color="white" intensity={1} />
        <Suspense fallback={null}>
          <MeshLambert />
        </Suspense>
        <OrbitControls enablePan={true} zoomSpeed={0.5} />
      </Canvas>
    </Container>
  );
}

export default MeshPhongMaterial;
