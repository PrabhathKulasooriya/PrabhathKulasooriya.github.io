import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Test from './Components/Test';

function App() {

  return (
    <div className='max-w-screen min-h-screen overflow-x-hidden relative'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App
