import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef, useMemo, Suspense } from "react";
import styled from "styled-components";

import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

import imap from "./Glass_Window_002_basecolor.jpg";
import imapAO from "./Glass_Window_002_ambientOcclusion.jpg";
import imapHeight from "./Glass_Window_002_height.png";
import imapNormal from "./Glass_Window_002_normal.jpg";
import imapRoughness from "./Glass_Window_002_roughness.jpg";
import imapMetalic from "./Glass_Window_002_metallic.jpg";
import imapAlpha from "./Glass_Window_002_opacity.jpg";

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
      clock.getElapsedTime() * ((10 * Math.PI) / 180);
    props.thisBox.current.rotation.y =
      clock.getElapsedTime() * ((10 * Math.PI) / 180);
    props.thisBox.current.rotation.z =
      clock.getElapsedTime() * ((10 * Math.PI) / 180);
  });
  return null;
};

const Map = () => {
  const thisBox = useRef();

  const map = useLoader(TextureLoader, imap);
  const mapAO = useLoader(TextureLoader, imapAO);
  const mapHeight = useLoader(TextureLoader, imapHeight);
  const mapNormal = useLoader(TextureLoader, imapNormal);
  const mapRoughness = useLoader(TextureLoader, imapRoughness);
  const mapMetalic = useLoader(TextureLoader, imapMetalic);
  const mapAlpha = useLoader(TextureLoader, imapAlpha);

  const vertices = [-1, 1, 0, 1, 1, 0, -1, -1, 0, 1, -1, 0];

  const [positions] = useMemo(() => {
    const positions = new Float32Array(vertices, 3);

    return [positions];
  }, [vertices]);

  return (
    <group ref={thisBox}>
      <mesh>{/* <axesHelper args={[4]} /> */}</mesh>
      <mesh position={[1, -1, 0]}>
        <boxGeometry
          attach="geometry"
          args={[1, 1, 1, 256, 256, 256]}
        ></boxGeometry>
        <meshPhysicalMaterial
          attach="material"
          clearcoat={1}
          clearcoatRoughness={0}
          wireframe={false}
          flatShading={false}
          map={map}
          normalMap={mapNormal}
          displacementMap={mapHeight}
          displacementScale={0.2}
          displacementBias={-0.15}
          aoMap={mapAO}
          aoMapIntensity={1}
          roughnessMap={mapRoughness}
          roughness={0.5}
          metalnessMap={mapMetalic}
          metalness={0.5}
          alphaMap={mapAlpha}
          transparent={true}
          opacity={1}
          side={THREE.DoubleSide}
        />
        <axesHelper args={[1]} />
      </mesh>
      <mesh position={[1, 1, 0]}>
        <boxGeometry attach="geometry" args={[1, 1, 1, 256, 256, 256]} />
        <meshStandardMaterial
          attach="material"
          wireframe={false}
          flatShading={false}
          map={map}
          normalMap={mapNormal}
          displacementMap={mapHeight}
          displacementScale={0.2}
          displacementBias={-0.15}
          aoMap={mapAO}
          aoMapIntensity={1}
          roughnessMap={mapRoughness}
          roughness={0.5}
          metalnessMap={mapMetalic}
          metalness={0.5}
          alphaMap={mapAlpha}
          transparent={true}
          opacity={1}
          side={THREE.DoubleSide}
        />
        <axesHelper args={[1]} />
      </mesh>
      <mesh position={[-1, -1, 0]}>
        <sphereGeometry attach="geometry" args={[0.5, 512, 512]} />
        <meshPhysicalMaterial
          attach="material"
          clearcoat={1}
          clearcoatRoughness={0}
          wireframe={false}
          flatShading={false}
          map={map}
          normalMap={mapNormal}
          displacementMap={mapHeight}
          displacementScale={0.2}
          displacementBias={-0.15}
          aoMap={mapAO}
          aoMapIntensity={1}
          roughnessMap={mapRoughness}
          roughness={0.5}
          metalnessMap={mapMetalic}
          metalness={0.5}
          alphaMap={mapAlpha}
          transparent={true}
          opacity={1}
          side={THREE.DoubleSide}
        />
        <axesHelper args={[1]} />
      </mesh>
      <mesh position={[-1, 1, 0]}>
        <sphereGeometry attach="geometry" args={[0.5, 512, 512]} />
        <meshStandardMaterial
          attach="material"
          wireframe={false}
          flatShading={false}
          map={map}
          normalMap={mapNormal}
          displacementMap={mapHeight}
          displacementScale={0.2}
          displacementBias={-0.15}
          aoMap={mapAO}
          aoMapIntensity={1}
          roughnessMap={mapRoughness}
          roughness={0.5}
          metalnessMap={mapMetalic}
          metalness={0.5}
          alphaMap={mapAlpha}
          transparent={true}
          opacity={1}
          side={THREE.DoubleSide}
        />
        <axesHelper args={[1]} />
      </mesh>
      <Animation thisBox={thisBox} />
    </group>
  );
};

function AlphaMap(props) {
  return (
    <Container>
      <Title>AlphaMap</Title>
      <Canvas
        concurrent
        gl={{ antialias: true }}
        camera={{ position: [0, 4, 0] }}
      >
        <ambientLight />
        <directionalLight
          position={[0, 20, 10]}
          color="white"
          intensity={0.1}
        />
        <Suspense fallback={null}>
          <Map />
        </Suspense>
        <OrbitControls enablePan={true} zoomSpeed={0.5}></OrbitControls>
      </Canvas>
    </Container>
  );
}

export default AlphaMap;
