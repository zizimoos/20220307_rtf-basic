import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Geometry from "./routes/Geometry";
import Home from "./routes/Home";
import Material from "./routes/Material";

function Router(props) {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/geometry/*" element={<Geometry />}></Route>
        <Route path="/material/*" element={<Material />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
