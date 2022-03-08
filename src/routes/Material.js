import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import LineDashedMaterial from "../components/material/LineDashedMaterial";
import LineMaterial from "../components/material/LineMaterial";
import PointsMaterial from "../components/material/PointsMaterial";

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

function Material(props) {
  return (
    <Container>
      <Tabs>
        <Title>Material</Title>
        <Tab>
          <Link to={`/material/pointsmaterial`}>PointsMaterial</Link>
        </Tab>
        <Tab>
          <Link to={`/material/linematerial`}>LineMaterial</Link>
        </Tab>
        <Tab>
          <Link to={`/material/linedashedmaterial`}>LineDashedMaterial</Link>
        </Tab>
      </Tabs>

      <Routes>
        <Route path="/pointsmaterial" element={<PointsMaterial />} />
        <Route path="/linematerial" element={<LineMaterial />} />
        <Route path="/linedashedmaterial" element={<LineDashedMaterial />} />
      </Routes>
    </Container>
  );
}

export default Material;
