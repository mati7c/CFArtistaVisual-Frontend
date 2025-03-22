import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./pages/inicio";
import Bio from "./pages/bio";
import Contacto from "./pages/contacto";
import Muestras from "./pages/muestras";
import Procesos from "./pages/procesos";
import Statement from "./pages/statement";
import Obras from "./pages/obras";
import ObraDetalle from "./pages/obraDetalle"
import Login from "./pages/login";
import AddPiece from "./pages/addPiece";
import EditPiece from "./pages/editPiece";
import AddExhibit from "./pages/addExhibit";
import EditExhibit from "./pages/editExhibit";

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
        <Route path='/obra/:id' element={<ObraDetalle />} />
        <Route path='/obras' element={<Obras />} />
        <Route path='/login' element={<Login />} />
        <Route path='/addPiece' element={<AddPiece />} />
        <Route path='/editPiece' element={<EditPiece />} />
        <Route path='/addExhibit' element={<AddExhibit />} />
        <Route path='/editExhibit' element={<EditExhibit />} />
      </Routes>
    </Router>
  );
}

export default App;