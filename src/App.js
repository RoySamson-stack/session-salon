import {BrowserRouter, Route , Routes } from 'react-router-dom'
import Index from "./components/landing/index"
import  Login from "./components/login/login"
import Home from "./components/home/home"
import Signup from "./components/signup/signup"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<Home/>} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
