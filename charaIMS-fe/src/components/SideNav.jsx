import React from 'react';
import '../css/sidenav.css';
import { Logout } from './Logout';

const SideNavbar = ({ setShowLogin, setShowDashboard, setShowDeviceList, setShowGroups, setShowLog, setShowQR, setShowAddDevice, logout }) => {

  const handleDashboardClick = () => {
    setShowLogin(false);
    setShowDashboard(true);
    setShowDeviceList(false);
    setShowGroups(false);
    setShowLog(false);
    setShowQR(false);
    setShowAddDevice(false);
  };

  const handleDeviceListClick = () => {
    setShowLogin(false);
    setShowDashboard(false);
    setShowDeviceList(true);
    setShowGroups(false);
    setShowLog(false);
    setShowQR(false);
    setShowAddDevice(false);
  };

  const handleGroupsClick = () => {
    setShowLogin(false);
    setShowDashboard(false);
    setShowDeviceList(false);
    setShowGroups(true);
    setShowLog(false);
    setShowQR(false);
    setShowAddDevice(false);
  };

  const handleLogClick = () => {
    setShowLogin(false);
    setShowDashboard(false);
    setShowDeviceList(false);
    setShowGroups(false);
    setShowLog(true);
    setShowQR(false);
    setShowAddDevice(false);
  };

  const handleQRClick = () => {
    setShowLogin(false);
    setShowDashboard(false);
    setShowDeviceList(false);
    setShowGroups(false);
    setShowLog(false);
    setShowQR(true);
    setShowAddDevice(false);
  };

  const handleAddDeviceClick = () => {
    setShowLogin(false);
    setShowDashboard(false);
    setShowDeviceList(false);
    setShowGroups(false);
    setShowLog(false);
    setShowQR(false);
    setShowAddDevice(true);
  };

  return (
    <>
        <nav className='sidenav'>
        <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-5/5 bg-gray-400 text-black">
        <div className="p-4" >
          <h1 className="text-xl font-semibold" >Chara IMS</h1>
          <br/><br/>
          <ul className="mt-4">
            <li><a href="#" className="block py-2 px-4 hover:bg-gray-700" onClick={handleDashboardClick}>Dashboard</a></li>
            <li><a href="#" className="block py-2 px-4 hover:bg-gray-700" onClick={handleDeviceListClick}>Device List</a></li>
            <li><a href="#" className="block py-2 px-4 hover:bg-gray-700" onClick={handleGroupsClick}>Groups</a></li>
            <li><a href="#" className="block py-2 px-4 hover:bg-gray-700" onClick={handleLogClick}>Log</a></li>
            <li><a href="#" className="block py-2 px-4 hover:bg-gray-700" onClick={handleQRClick}>Scan QR</a></li>
            <li><a href="#" className="block py-2 px-4 hover:bg-gray-700" onClick={handleAddDeviceClick}>Add New Record</a></li>
          </ul>
        </div>
        <Logout className="logout-button" logout={logout}/>
      </div>
      
    </div>
        </nav>
    </>
  );
};

export default SideNavbar;