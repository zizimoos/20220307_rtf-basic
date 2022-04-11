import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

function Home(props) {
  return (
    <Container>
      <Link to="/geometry">Geometry</Link>
      <Link to="/material">Material</Link>
      <Link to="/map">Map</Link>
      <Link to="/chracter">Chracter</Link>
    </Container>
  );
}

export default Home;
