import React, { useState, useEffect } from "react";
import "../css/addrecord.css";
import 'tailwindcss/tailwind.css';


const link = import.meta.env.VITE_LINK;

const AddDevice = () => {

  const [serial, setSerial] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [model, setModel] = useState('');
  const [warranty, setWarranty]= useState('');
  const [status, setStatus] = useState('Select...');
  const [location, setLocation] = useState('');
  const [purchaseDate, setPurchaseDate] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    setSerial(e.target.value);
    setManufacturer(e.target.value);
    setModel(e.target.value);
    setWarranty(e.target.value);
    setStatus(e.target.value);
    setLocation(e.target.value);
    setPurchaseDate(e.target.value);
    setNotes(e.target.value);
  }

  const handleSerial = (e) => {
    setSerial(e.target.value);
  }

  const handleManufacturer = (e) => {
    setManufacturer(e.target.value);
  }

  const handleModel = (e) => {
    setModel(e.target.value);
  }

  const handleWarranty = (e) => {
    setWarranty(e.target.value);
  }

  const handleStatus = (e) => {
    setStatus(e.target.value);
  }

  const handleLocation = (e) => {
    setLocation(e.target.value);
  }

  const handlePurchaseDate = (e) => {
    setPurchaseDate(e.target.value);
  }

  const handleNotes = (e) => {
    setNotes(e.target.value);
  }

  const submitNewDeviceRecord = async(e) => {
    e.preventDefault();
    try {
        const body = {
            serialNumber: serial,
            manufacturer: manufacturer,
            model: model,
            warranty: warranty,
            status: status,
            location: location,
            purchaseDate: purchaseDate,
            notes: notes,
        };
        console.log(body);
        const response = await fetch(`${link}/devices/adddevice`,{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        });
        //window.location = "/";
    } catch (error) {
        console.error(error.message);
    }
  }




  return (
    <>
      <div className="main-form-container">
        <form className="form">
          <div className="form-grid">
          <div className="page-heading block text-gray-700 text-xxl font-bold mb-2"><h1>Add New Record</h1></div>
            <div className="a">
              <label className="block text-gray-700 text-sm font-bold mb-2" for="serial-number">Serial Number</label>
              <input value={serial} onChange={handleSerial} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="serial-number" name="serial-number"></input>
            </div>
            <br/>
            <div className="b">
              <label className="block text-gray-700 text-sm font-bold mb-2" for="manufacturer">Manufacturer</label>
              <input value={manufacturer} onChange={handleManufacturer} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="manufacturer" name="manufacturer"></input>
            </div>
            <br/>
            <div className="c">
              <label className="block text-gray-700 text-sm font-bold mb-2" for="model">Model</label>
              <input value={model} onChange={handleModel} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="model" name="model"></input>
            </div>
            <br/>
            <div className="d">
              <label className="block text-gray-700 text-sm font-bold mb-2" for="warranty">Warranty End Date</label>
              <input value={warranty} onChange={handleWarranty} type="date" id="warranty" name="warranty"></input>
            </div>
            <br/>
            <div className="e">
              <label className="block text-gray-700 text-sm font-bold mb-2" for="status">Status</label>
              <select value={status} onChange={handleStatus} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="status" name="status">
                <option value="teacher">Select...</option>
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
              <input value={location} onChange={handleLocation} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="location" name="location"></input>
            </div>
            <br/>
            <div className="g">
              <label className="block text-gray-700 text-sm font-bold mb-2" for="purchase_date">Purchase Date</label>
              <input value={purchaseDate} onChange={handlePurchaseDate} type="date" id="purchase_date" name="purchase_date"></input>
            </div>
            <br/>
            <div className="h">
              <label className="block text-gray-700 text-sm font-bold mb-2" for="notes">Notes</label>
              <textarea value={notes} onChange={handleNotes} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="notes" name="notes" rows="5" cols="20"></textarea>
            </div>
            <br/>
            <button onClick={submitNewDeviceRecord} class="add-record-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">Add Record</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddDevice;
