import React from "react";
import NavCanvas from "./components/NavCanvas/NavCanvas.js";
import NavCanvasLinks from "./components/NavCanvasLinks/NavCanvasLinks.js";
import { NavProvider } from "./contexts/NavContext.js";
import AboutMe from "./components/AboutMe/AboutMe.js";
import Portfolio from "./components/Portfolio/Portfolio.js"
import AboutThis from "./components/AboutThis/AboutThis.js"
import Header from "./components/Header/Header.js";
import "./App.css";

function App() {

  return (
    <>
    <Header />
      <NavProvider>
        <NavCanvas />
        <NavCanvasLinks />
      </NavProvider>
      <AboutMe />
      <Portfolio />
      <AboutThis />
    </>
  );
}

export default App;
