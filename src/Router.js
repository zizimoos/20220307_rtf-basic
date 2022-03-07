import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Geometry from "./routes/Geometry";
import Home from "./routes/Home";

function Router(props) {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/geometry/*" element={<Geometry />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
