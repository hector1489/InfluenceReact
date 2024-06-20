import { BrowserRouter, Routes, Route } from "react-router-dom"
import { NavBar } from "./components/index.tsx"
import { Confirm, Home, Register, Tickets } from './views/index.tsx'
import './App.css'

function App() {


  return (
    <BrowserRouter>
     <NavBar />
     <Routes>
          <Route path="/" element={<Home />} />
          <Route path="confirm" element={<Confirm />} />
          <Route path="tickets" element={<Tickets />} />
          <Route path="register" element={<Register />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
