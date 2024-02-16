import React from 'react';
import '../css/sidenav.css';

const SideNavbar = () => {
  return (
    <>
        <nav className='sidenav'>
        <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/5 bg-gray-800 text-black">
        <div className="p-4" >
          <h1 className="text-xl font-semibold" >Chara IMS</h1>
          <br/><br/>
          <ul className="mt-4">
            <li><a href="#" className="block py-2 px-4 hover:bg-gray-700">Dashboard</a></li>
            <li><a href="#" className="block py-2 px-4 hover:bg-gray-700">Groups</a></li>
            <li><a href="#" className="block py-2 px-4 hover:bg-gray-700">Team</a></li>
            <li><a href="#" className="block py-2 px-4 hover:bg-gray-700">Log</a></li>
          </ul>
        </div>
      </div>
    </div>
        </nav>
    </>
  );
};

export default SideNavbar;