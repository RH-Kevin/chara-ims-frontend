import React, { useState, useRef, useEffect } from "react";
import "../css/devicerecord.css"
import 'tailwindcss/tailwind.css';
import QRGenerator from "./QRGenerator";
import { ServiceRecordInput } from "./ServiceRecordInput";
import { NotesInput } from "./NotesInput";


// Tailwind Styles
const detailsButton = "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded";
const editButton = "bg-transparent hover:bg-yellow-500 text-yellow-500 font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded";


const EditRecord = ({ device, isOpen, openModal, closeModal }) => {

    const [deviceNotes, setDeviceNotes] = useState(device.notes);
    const [deviceServiceRecord, setDeviceServiceRecord] = useState(device.service_record);
    const [deviceDetails, setDeviceDetails] = useState();
    //const [showModal, setShowModal] = useState(false);
    const [openEditModalId, setOpenEditModalId] = useState(null);

    useEffect(() => {
        setDeviceNotes(device.notes);
        setDeviceServiceRecord(device.service_record);
    }, [device]);

    const handleServiceRecord = (e) => {
        setDeviceServiceRecord(e.target.value);
    }

    const handleDeviceNotes = (e) => {
        setDeviceNotes(e.target.value);
    }

    const updateRecord = async(e) => {
        e.preventDefault();
        try {
            const body = { deviceDetails };
            console.log(body);
            window.location = "/";
        } catch (error) {
            console.error(error.message);
        }
    }

    console.log(deviceServiceRecord);
    return (
        <>
            <button type="button" className={editButton} onClick={() => openModal(device.id)}>Details</button>
            {isOpen &&
                <div className="modal" id={`id${device.id}`}>
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-200 bg-opacity-100 rounded-lg" id="modal-panel">
                    <div className="main-container-grid">
                        <div className="page-title">
                            <h1 className="device-record">Device Record</h1>
                        </div>
                        <div className="user-details block max-w-xl rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                            <h2 className="user-info">User Details</h2>
                            <br/>
                            <div className="user-details-card">
                                <div className="user-details-grid">
                                <div className="user-details-grid-labels">
                                    <div>First Name</div>
                                    <div>Last Name</div>
                                    <div>Date Assigned</div>
                                    <div>Brand</div>
                                    <div>Model</div>
                                    <div>Serial Number</div>
                                    <div>Warranty End</div>
                                </div>
                                <div className="user-details-grid-details">
                                    <div>{device.first_name}</div>
                                    <div>{device.last_name}</div>
                                    <div>{device.date_assigned}</div>
                                    <div>Brand</div>
                                    <div>Model</div>
                                    <div>{device.serial_number}</div>
                                    <div>{device.warranty_end}</div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="qr-code block max-w-sm rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                            <h2 className="qr-code-title">QR Code</h2>
                            <QRGenerator serial={device.serial_number}/>
                            <button className="regenerate-qr-button inline-block rounded bg-danger px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(220,76,100,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)]">Regenerate QR</button>
                        </div>
                        <div className="service-record block max-w-2xl rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                            <h2 className="qr-code-title">Service Record</h2>
                            <ServiceRecordInput className="serviceRecordInput" value={deviceServiceRecord} onChange={handleServiceRecord}/>
                        </div>
                        <div className="notes block max-w-2xl rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                            <h2 className="qr-code-title">Notes</h2>
                            <NotesInput className="notesInput" value={deviceNotes} onChange={handleDeviceNotes}/>
                        </div>
                        <button className="close" data-dismiss="modal" onClick={() => closeModal()}>&times;</button>
                        <button className="save" data-dismiss="modal" onClick={updateRecord}>Save Changes</button>
                    </div>
                </div>
            </div>}
        </>
    )
};

export default EditRecord;