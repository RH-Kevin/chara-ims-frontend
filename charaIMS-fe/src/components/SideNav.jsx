import React from 'react';
import '../css/sidenav.css';

const SideNavbar = ({ setShowLogin, setShowDashboard, setShowDeviceList, setShowGroups, setShowLog }) => {

  const handleDashboardClick = () => {
    setShowLogin(false);
    setShowDashboard(true);
    setShowDeviceList(false);
    setShowGroups(false);
    setShowLog(false);
  };

  const handleDeviceListClick = () => {
    setShowLogin(false);
    setShowDashboard(false);
    setShowDeviceList(true);
    setShowGroups(false);
    setShowLog(false);
  };

  const handleGroupsClick = () => {
    setShowLogin(false);
    setShowDashboard(false);
    setShowDeviceList(false);
    setShowGroups(true);
    setShowLog(false);
  };

  const handleLogClick = () => {
    setShowLogin(false);
    setShowDashboard(false);
    setShowDeviceList(false);
    setShowGroups(false);
    setShowLog(true);
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
          </ul>
        </div>
      </div>
    </div>
        </nav>
    </>
  );
};

export default SideNavbar;