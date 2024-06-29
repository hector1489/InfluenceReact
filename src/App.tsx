import { BrowserRouter, Routes, Route } from "react-router-dom"
import { BasesLegales, Ganadores, Home, SorteoBronce, SorteoOro, SorteoPlata, } from './views/index.tsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Confirm from "./views/Confirm/Confirm.tsx"

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bases" element={<BasesLegales />} />
        <Route path="/oro" element={<SorteoOro />} />
        <Route path="/plata" element={<SorteoPlata />} />
        <Route path="/bronce" element={<SorteoBronce />} />
        <Route path="/ganadores" element={<Ganadores />} />
        <Route path="/confirm" element={<Confirm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
