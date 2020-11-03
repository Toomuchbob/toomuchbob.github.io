import React from "react";
import NavCanvas from "./components/NavCanvas/NavCanvas.js"
import NavCanvasLinks from "./components/NavCanvasLinks/NavCanvasLinks.js"
import { NavProvider } from "./contexts/NavContext.js"

function App() {

  return (
    <NavProvider>
      <NavCanvas />
      <NavCanvasLinks />
    </NavProvider>
  );
}

export default App;