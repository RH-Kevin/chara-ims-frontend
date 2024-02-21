import React from "react";
import 'tailwindcss/tailwind.css';
import '../css/logout.css'


const detailsButton = "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded";

export const Logout = ({logout}) => {

  return (
    <>
      <button type="button" id="logout-button" className={detailsButton} onClick={logout}>Logout</button>
    </>
  );
};
