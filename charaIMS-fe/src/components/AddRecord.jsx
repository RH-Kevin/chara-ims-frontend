import React, { useState, useEffect } from "react";
import "../css/addrecord.css";
import 'tailwindcss/tailwind.css';


// /devices/adddevice

// 
const link = import.meta.env.VITE_LINK;

const AddDevice = () => {

  return (
    <>
      <div className="main-form-container">
        <form className="form">
          <div className="form-grid">
          <div className="page-heading block text-gray-700 text-xxl font-bold mb-2"><h1>Add New Record</h1></div>
            <div className="a">
              <label className="block text-gray-700 text-sm font-bold mb-2" for="serial-number">Serial Number</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="serial-number" name="serial-number"></input>
            </div>
            <br/>
            <div className="b">
              <label className="block text-gray-700 text-sm font-bold mb-2" for="manufacturer">Manufacturer</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="manufacturer" name="manufacturer"></input>
            </div>
            <br/>
            <div className="c">
              <label className="block text-gray-700 text-sm font-bold mb-2" for="model">Model</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="model" name="model"></input>
            </div>
            <br/>
            <div className="d">
              <label className="block text-gray-700 text-sm font-bold mb-2" for="warranty">Warranty End Date</label>
              <input  type="date" id="warranty" name="warranty"></input>
            </div>
            <br/>
            <div className="e">
              <label className="block text-gray-700 text-sm font-bold mb-2" for="status">Status</label>
              <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="status" name="status">
                <option value="teacher">Teacher</option>
                <option value="staff">Staff</option>
                <option value="teacher-communal">Teacher Communal</option>
                <option value="staff-communal">Staff Communal</option>
                <option value="assistant">Assistant</option>
                <option value="unassigned">Unassigned</option>
                <option value="student-communal">Student Communal</option>
                <option value="student">Student</option>
              </select>
            </div>
            <br/>
            <div className="f">
              <label className="block text-gray-700 text-sm font-bold mb-2" for="location">Location</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="location" name="location"></input>
            </div>
            <br/>
            <div className="g">
              <label className="block text-gray-700 text-sm font-bold mb-2" for="notes">Service Record</label>
              <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="notes" name="notes" rows="5" cols="20"></textarea>
            </div>
            <br/>
            <div className="h">
              <label className="block text-gray-700 text-sm font-bold mb-2" for="notes">Notes</label>
              <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="notes" name="notes" rows="5" cols="20"></textarea>
            </div>
            <br/>
            <button class="add-record-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">Add Record</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddDevice;
