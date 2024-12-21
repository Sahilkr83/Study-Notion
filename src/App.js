import { Route, Routes } from "react-router-dom";

import "./App.css";
import NavBar from "./component/NavBar";
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard";
import { useState } from "react";
import PrivateRoute from "./component/PrivateRoute";

function App() {

  const [isUserLogin , setUserLogin] = useState (false )

  return (
    <div className="app w-[100vw] h-screen overflow-y-scroll  bg-black flex flex-col"> 
      <NavBar isUserLogin={isUserLogin} setUserLogin={setUserLogin}/>

      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login setUserLogin={setUserLogin}/>} />
        <Route path="/signup" element={<Signup setUserLogin={setUserLogin}/>} />
        <Route path="/dashboard" element={
          <PrivateRoute isUserLogin={isUserLogin} >
            <Dashboard/>
          </PrivateRoute>
        } />

      </Routes>
    </div>
  )
}

export default App;
