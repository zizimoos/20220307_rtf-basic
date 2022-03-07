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
import ShapeGeometry from "../components/geometry/ShapeGeometry";
import ShapeHeartGeometry from "../components/geometry/ShapeHeartGeometry";
import ShapeSinGeometry from "../components/geometry/ShapeSinGeometry";
import ShapeLatheGeometry from "../components/geometry/ShapeLatheGeometry";
import ExtrudeHeartGeometry from "../components/geometry/ExtrudeHeartGeometry";
import ExtrudeTextGeometry from "../components/geometry/ExtrudeTextGeometry";

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
        <Tab>
          <Link to={`/geometry/shapegeometry`}>ShapeGeometry</Link>
        </Tab>
        <Tab>
          <Link to={`/geometry/shapeheartgeometry`}>ShapeHeartGeometry</Link>
        </Tab>
        <Tab>
          <Link to={`/geometry/shapesingeometry`}>ShapeSinGeometry</Link>
        </Tab>
        <Tab>
          <Link to={`/geometry/shapelathegeometry`}>ShapeLatheGeometry</Link>
        </Tab>
        <Tab>
          <Link to={`/geometry/extrudegeometry`}>ExtrudeHeartGeometry</Link>
        </Tab>
        <Tab>
          <Link to={`/geometry/extrudetextgeometry`}>ExtrudeTextGeometry</Link>
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
        <Route path="/shapegeometry" element={<ShapeGeometry />} />
        <Route path="/shapeheartgeometry" element={<ShapeHeartGeometry />} />
        <Route path="/shapesingeometry" element={<ShapeSinGeometry />} />
        <Route path="/shapelathegeometry" element={<ShapeLatheGeometry />} />
        <Route path="/extrudegeometry" element={<ExtrudeHeartGeometry />} />
        <Route path="/extrudetextgeometry" element={<ExtrudeTextGeometry />} />
      </Routes>
    </Container>
  );
}

export default Geometry;
