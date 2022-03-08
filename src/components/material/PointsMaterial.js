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

const Particles = () => {
  const thisBox = useRef();

  const count = 5000;
  const colormap = useLoader(TextureLoader, texture);

  const [positions] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    // const sizes = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
      // sizes[i] = Math.random() < 0.03 ? 6 : 3;
    }

    // return [positions, sizes];
    return [positions];
  }, []);

  return (
    <group ref={thisBox}>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attachObject={["attributes", "position"]}
            count={positions.length / 3}
            itemSize={3}
            array={positions}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.02}
          color="yellow"
          alphaTest={0.1}
          map={colormap}
          sizeAttenuation={true}
        />
      </points>
      <Animation thisBox={thisBox} />
    </group>
  );
};

function PointsMaterial(props) {
  return (
    <Container>
      <Title>PointsMaterial</Title>
      <Canvas concurrent gl={{ antialias: true }}>
        <ambientLight />
        <directionalLight position={[-1, 10, 10]} color="white" intensity={1} />
        <Suspense fallback={null}>
          <Particles />
        </Suspense>

        <OrbitControls enablePan={true} zoomSpeed={0.5} />
      </Canvas>
    </Container>
  );
}

export default PointsMaterial;
