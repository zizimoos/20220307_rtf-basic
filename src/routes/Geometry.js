import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import BoxGeometry from "../components/geometry/BoxGeometry";
import CircleGeometry from "../components/geometry/CircleGeometry";
import CornGeometry from "../components/geometry/CornGeometry";
import CylinderGeometry from "../components/geometry/CylinderGeometry";
import SphereGeometry from "../components/geometry/SphereGeometry";
import RingGeometry from "../components/geometry/RingGeometry";
import PlaneGeometry from "../components/geometry/PlaneGeometry";
import TorusGeometry from "../components/geometry/TorusGeometry";
import TorusKnotGeometry from "../components/geometry/TorusKnotGeometry";

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

function Geometry(props) {
  return (
    <Container>
      <Tabs>
        <Title>Geometry</Title>
        <Tab>
          <Link to={`/geometry/boxgeometry`}>BoxGeometry</Link>
        </Tab>
        <Tab>
          <Link to={`/geometry/circlegeometry`}>CircleGeometry</Link>
        </Tab>
        <Tab>
          <Link to={`/geometry/corngeometry`}>ConeGeomertry</Link>
        </Tab>
        <Tab>
          <Link to={`/geometry/cylindergeometry`}>CylinderGeometry</Link>
        </Tab>
        <Tab>
          <Link to={`/geometry/spheregeometry`}>SphereGeometry</Link>
        </Tab>
        <Tab>
          <Link to={`/geometry/ringgeometry`}>RingGeometry</Link>
        </Tab>
        <Tab>
          <Link to={`/geometry/planegeometry`}>PlaneGeometry</Link>
        </Tab>
        <Tab>
          <Link to={`/geometry/torusgeometry`}>TorusGeometry</Link>
        </Tab>
        <Tab>
          <Link to={`/geometry/torusknotgeometry`}>TorusKnotGeometry</Link>
        </Tab>
      </Tabs>

      <Routes>
        <Route path="/boxgeometry" element={<BoxGeometry />} />
        <Route path="/circlegeometry" element={<CircleGeometry />} />
        <Route path="/corngeometry" element={<CornGeometry />} />
        <Route path="/cylindergeometry" element={<CylinderGeometry />} />
        <Route path="/spheregeometry" element={<SphereGeometry />} />
        <Route path="/ringgeometry" element={<RingGeometry />} />
        <Route path="/planegeometry" element={<PlaneGeometry />} />
        <Route path="/torusgeometry" element={<TorusGeometry />} />
        <Route path="/torusknotgeometry" element={<TorusKnotGeometry />} />
      </Routes>
    </Container>
  );
}

export default Geometry;
