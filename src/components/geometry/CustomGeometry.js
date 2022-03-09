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

const rawPositions = [-1, -1, 0, 1, -1, 0, -1, 1, 0, 1, 1, 0];
const positions = new Float32Array(rawPositions);
const rawNormals = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1];
const normals = new Float32Array(rawNormals);
const rawColors = [1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0];
const colors = new Float32Array(rawColors);
const rawUVs = [0, 0, 1, 0, 0, 1, 1, 1];
const uvs = new Float32Array(rawUVs);

function CustomGeometry(props) {
  const thisBox = useRef(null);

  return (
    <Container concurrent gl={{ antialias: true }}>
      <Title>CustomGeometry</Title>
      <Canvas>
        <ambientLight />
        <directionalLight position={[-1, 10, 10]} color="white" intensity={1} />
        <group ref={thisBox}>
          <points>
            <bufferGeometry
              attach="geometry"
              setIndex={[0, 1, 2, 2, 1, 3]}
              onUpdate={(points) => points.computeVertexNormals(normals)}
            >
              <bufferAttribute
                attachObject={[
                  "attributes",
                  "position",
                  "normal",
                  "color",
                  "uv",
                ]}
                count={positions.length / 3}
                itemSize={3}
                array={(positions, normals, colors, uvs)}
              />
            </bufferGeometry>
            <meshPhongMaterial
              attach="material"
              color="red"
              vertexColors={true}
            />
          </points>
          <line>
            <bufferGeometry
              attach="geometry"
              setIndex={[0, 1, 2, 2, 1, 3]}
              onUpdate={(points) => points.computeVertexNormals(normals)}
            >
              <bufferAttribute
                attachObject={["attributes", "position"]}
                count={positions.length / 3}
                itemSize={3}
                array={positions}
              />
            </bufferGeometry>
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

export default CustomGeometry;
