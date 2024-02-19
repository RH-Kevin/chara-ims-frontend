import './App.css'
import React, { useState } from "react";
import { TECollapse, TERipple } from "tw-elements-react";
import Login from "./components/Login";
import Dashboard from './components/Dashboard';
import DeviceList from './components/DeviceList';
import SideNavbar from './components/SideNav';
import QRReader from './components/QRReader';


export default function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [showDeviceList, setShowDeviceList] = useState(false);
  const [showGroups, setShowGroups] = useState(false);
  const [showLog, setShowLog] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const [showSideNavbar, setShowSideNavbar] = useState(true);




  return (
    <>
      {showLogin && <Login/>}
      {showSideNavbar && <SideNavbar setShowLogin={setShowLogin} setShowDashboard={setShowDashboard} setShowDeviceList={setShowDeviceList} setShowGroups={setShowGroups} setShowLog={setShowLog} setShowQR={setShowQR}/>}
      {showDashboard && <Dashboard/>}
      {showDeviceList && <DeviceList/>}
      {showQR && <QRReader/>}
    </>
  );
};
