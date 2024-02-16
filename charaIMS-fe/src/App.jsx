import './App.css'
import React, { useState } from "react";
import { TECollapse, TERipple } from "tw-elements-react";
import Login from "./components/Login";
import Dashboard from './components/Dashboard';


export default function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showDashboard, setShowDashboard] = useState(true);

  const toggleShow = () => setShow(!show);

  return (
    <>
      {/* {showLogin && <Login/>}
      {showDashboard && <Dashboard/>} */}
      <Dashboard/>
      
    </>
  );
};
