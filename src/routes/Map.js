import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";

import AlphaMap from "../components/map/AlphaMap";
import AOMap from "../components/map/AOMap";
import DisplacementMap from "../components/map/DisplacementMap";
import LightMap from "../components/map/LightMap";
import MapMaterial from "../components/map/MapMaterial";
import MetalnessMap from "../components/map/MetalnessMap";
import NormalMap from "../components/map/NormalMap";
import RoughnessMap from "../components/map/RoughnessMap";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;
const Tabs = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
`;
const Tab = styled.div`
  width: 100%;
  height: 36px;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: 0.8rem;
  background-color: white);
`;
const Title = styled.h1`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font
  font-weight: 400;
`;

function Map(props) {
  return (
    <Container>
      <Tabs>
        <Title>
          <Link to={`/`}>HOME</Link>
        </Title>
        <Title>Mapping</Title>
        <Tab>
          <Link to={`/map/mapmaterial`}>MapMaterial</Link>
        </Tab>
        <Tab>
          <Link to={`/map/normalmap`}>NormalMap</Link>
        </Tab>
        <Tab>
          <Link to={`/map/displacementmap`}>DisplacementMap</Link>
        </Tab>
        <Tab>
          <Link to={`/map/aomap`}>AOMap</Link>
        </Tab>
        <Tab>
          <Link to={`/map/roughnessmap`}>RoughnessMap</Link>
        </Tab>
        <Tab>
          <Link to={`/map/metalness`}>MetalnessMap</Link>
        </Tab>
        <Tab>
          <Link to={`/map/alphamap`}>AlphaMap</Link>
        </Tab>
        <Tab>
          <Link to={`/map/lightmap`}>LightMap</Link>
        </Tab>
      </Tabs>

      <Routes>
        <Route path="/mapmaterial" element={<MapMaterial />} />
        <Route path="/normalmap" element={<NormalMap />} />
        <Route path="/displacementmap" element={<DisplacementMap />} />
        <Route path="/aomap" element={<AOMap />} />
        <Route path="/roughnessmap" element={<RoughnessMap />} />
        <Route path="/metalness" element={<MetalnessMap />} />
        <Route path="/alphamap" element={<AlphaMap />} />
        <Route path="/lightmap" element={<LightMap />} />
      </Routes>
    </Container>
  );
}

export default Map;
