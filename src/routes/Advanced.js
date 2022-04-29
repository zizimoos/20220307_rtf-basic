import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Matilda from "../components/advanced/Matilda";
import Circumstance from "../components/advanced/Circumstance";

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

function Advanced(props) {
  return (
    <Container>
      <Tabs>
        <Title>
          <Link to={`/`}>HOME</Link>
        </Title>
        <Title>Advanced</Title>
        <Tab>
          <Link to={`/advanced/Matilda`}>Matilda</Link>
        </Tab>
        <Tab>
          <Link to={`/advanced/Circumstance`}>Circumstance</Link>
        </Tab>
      </Tabs>

      <Routes>
        <Route path="/matilda" element={<Matilda />} />
        <Route path="/circumstance" element={<Circumstance />} />
      </Routes>
    </Container>
  );
}

export default Advanced;
