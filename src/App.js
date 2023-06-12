import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
// import { Switch } from "react-router";
import Detail from "./Components/Detail";
import Login from "./Components/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        {/* <Detail />
        <Login /> */}

         <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
