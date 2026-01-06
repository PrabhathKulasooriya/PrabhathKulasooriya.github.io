import './App.css'
import { Routes, Route } from "react-router-dom";
import ScrollToHash from "./Components/ScrollToHash";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Project from './Components/Project';


function App() {

  return (
    <div className="max-w-screen min-h-screen overflow-x-hidden relative bg-primary">
      <ScrollToHash />
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<Project />} />
      </Routes>
    </div>
  );
}

export default App
