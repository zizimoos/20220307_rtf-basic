import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import BoxGeometry from "../components/geometry/BoxGeometry";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;
const Title = styled.h1`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font
  font-weight: 400;
`;

const Tabs = styled.div`
  width: 30%;
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

function Geometry(props) {
  return (
    <Container>
      <Tabs>
        <Title>Geometry</Title>
        <Tab>
          <Link to={`/geometry/boxgeometry`}>BoxGeometry</Link>
        </Tab>
        <Tab>
          <Link to={`/geometry/boxgeometry`}>BoxGeometry</Link>
        </Tab>
      </Tabs>

      <Routes>
        <Route path="/boxgeometry" element={<BoxGeometry />} />
      </Routes>
    </Container>
  );
}

export default Geometry;
