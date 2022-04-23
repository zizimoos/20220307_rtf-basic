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

const Line = () => {
  const thisBox = useRef();

  const colormap = useLoader(TextureLoader, texture);

  const [positions] = useMemo(() => {
    const vertices = [-1, 1, 0, 1, 1, 0, -1, -1, 0, 1, -1, 0];
    const positions = new Float32Array(vertices, 3);
    // const sizes = new Float32Array(count * 3);

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
          size={0.2}
          color="yellow"
          alphaTest={0.1}
          map={colormap}
        />
      </points>
      <line onUpdate={(line) => line.computeLineDistances()}>
        <bufferGeometry>
          <bufferAttribute
            attachObject={["attributes", "position"]}
            count={positions.length / 3}
            itemSize={3}
            array={positions}
          />
        </bufferGeometry>
        <lineDashedMaterial
          color="yellow"
          dashSize={0.01}
          gapSize={0.01}
          scale={0.1}
        />
      </line>
      <lineLoop
        position={[3, 0, 0]}
        onUpdate={(line) => line.computeLineDistances()}
      >
        <bufferGeometry>
          <bufferAttribute
            attachObject={["attributes", "position"]}
            count={positions.length / 3}
            itemSize={3}
            array={positions}
          />
        </bufferGeometry>
        <lineDashedMaterial
          color="yellow"
          dashSize={0.01}
          gapSize={0.01}
          scale={0.1}
        />
      </lineLoop>
      <lineSegments
        position={[-3, 0, 0]}
        onUpdate={(line) => line.computeLineDistances()}
      >
        <bufferGeometry>
          <bufferAttribute
            attachObject={["attributes", "position"]}
            count={positions.length / 3}
            itemSize={3}
            array={positions}
          />
        </bufferGeometry>
        <lineDashedMaterial
          color="yellow"
          dashSize={0.01}
          gapSize={0.01}
          scale={0.1}
        />
      </lineSegments>
      <Animation thisBox={thisBox} />
    </group>
  );
};

function LineDashedMaterial(props) {
  return (
    <Container>
      <Title>PointsMaterial</Title>
      <Canvas concurrent gl={{ antialias: true }}>
        <ambientLight />
        <directionalLight position={[-1, 10, 10]} color="white" intensity={1} />
        <Suspense fallback={null}>
          <Line />
        </Suspense>
        <OrbitControls enablePan={true} zoomSpeed={0.5} />
      </Canvas>
    </Container>
  );
}

export default LineDashedMaterial;
