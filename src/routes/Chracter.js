import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Archer from "../components/character/Archer";

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

function Chracter(props) {
  return (
    <Container>
      <Tabs>
        <Title>
          <Link to={`/`}>HOME</Link>
        </Title>
        <Title>Chracter</Title>
        <Tab>
          <Link to={`/chracter/Archer`}>Archer</Link>
        </Tab>
      </Tabs>

      <Routes>
        <Route path="/archer" element={<Archer />} />
      </Routes>
    </Container>
  );
}

export default Chracter;
