import React from "react";
import Headers from "./components/layouts/Headers";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";

const App = () => {
  const roitai = "สวัสดีครับ";
  return (
    <>
      <BrowserRouter>
        <Headers />
        <Routes>
          {/* <Headers />
        <h1>Hello World</h1>
        <Home />
        <Login/> */}
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
