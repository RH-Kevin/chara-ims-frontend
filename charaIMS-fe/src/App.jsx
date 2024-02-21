import './App.css'
import React, { useState } from "react";
import { TECollapse, TERipple } from "tw-elements-react";
import Login from "./components/Login";
import Dashboard from './components/Dashboard';
import DeviceList from './components/DeviceList';
import SideNavbar from './components/SideNav';
import QRReader from './components/QRReader';
import AddDevice from './components/AddRecord';



export default function App() {



  const [showLogin, setShowLogin] = useState(true);
  const [showDashboard, setShowDashboard] = useState(false);
  const [showDeviceList, setShowDeviceList] = useState(false);
  const [showGroups, setShowGroups] = useState(false);
  const [showLog, setShowLog] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const [showAddDevice, setShowAddDevice] = useState(false);
  const [showSideNavbar, setShowSideNavbar] = useState(false);

  const handleLoginSuccess = () => {
    setShowLogin(false); // Hide the login component
    setShowDashboard(true); // Show the dashboard as the initial view after login
    setShowSideNavbar(true); // Show the side navbar after login
    // Update other state as necessary based on your app's flow
  };


  return (
    <>
      {showLogin && <Login onLoginSuccess={handleLoginSuccess} />}
      {showSideNavbar && <SideNavbar setShowLogin={setShowLogin} setShowDashboard={setShowDashboard} setShowDeviceList={setShowDeviceList} setShowGroups={setShowGroups} setShowLog={setShowLog} setShowQR={setShowQR} setShowAddDevice={setShowAddDevice}/>}
      {showDashboard && <Dashboard/>}
      {showDeviceList && <DeviceList/>}
      {showQR && <QRReader/>}
      {showAddDevice && <AddDevice/>}
    </>
  );
};
