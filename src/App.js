import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./pages/inicio";
import Bio from "./pages/bio";
import Contacto from "./pages/contacto";
import Muestras from "./pages/muestras";
import Procesos from "./pages/procesos";
import Statement from "./pages/statement";
import Obras from "./pages/obras";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/bio' element={<Bio />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/muestras' element={<Muestras />} />
        <Route path='/procesos' element={<Procesos />} />
        <Route path='/statement' element={<Statement />} />
        <Route path='/obras' element={<Obras />} />
      </Routes>
    </Router>
  );
}

export default App;