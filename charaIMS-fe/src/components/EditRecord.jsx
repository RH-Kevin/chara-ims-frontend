import React, { useState, useRef, useEffect } from "react";
import "../css/devicerecord.css"
import 'tailwindcss/tailwind.css';
import QRGenerator from "./QRGenerator";
import { ServiceRecordInput } from "./ServiceRecordInput";
import { NotesInput } from "./NotesInput";

const link = import.meta.env.VITE_LINK;

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

    const updateDeviceNotes = async(e) => {
        e.preventDefault();
        try {
            const body = {
                serialNumber: device.serial_number,
                note: deviceNotes,
            };
            console.log(body);
            const response = await fetch(`${link}/device/notes`,{
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            //window.location = "/";
            closeModal();
        } catch (error) {
            console.error(error.message);
        }
    }

    const updateDeviceServiceRecord = async(e) => {
        e.preventDefault();
        try {
            const body = {
                serialNumber: device.serial_number,
                serviceRecord: deviceServiceRecord,
            };
            console.log(body);
            const response = await fetch(`${link}/device/servicerecord`,{
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            //window.location = "/";
            closeModal();
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <>
            <button type="button" className={editButton} onClick={() => openModal(device.id)}>Edit Record</button>
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
                        </div>
                        <div className="service-record block max-w-2xl rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                            <h2 className="qr-code-title">Service Record</h2>
                            <ServiceRecordInput className="serviceRecordInput" value={deviceServiceRecord} onChange={handleServiceRecord}/>
                            <button type="button" className={detailsButton} onClick={updateDeviceServiceRecord}>Save SR Note</button>
                        </div>
                        <div className="notes block max-w-2xl rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                            <h2 className="qr-code-title">Notes</h2>
                            <NotesInput className="notesInput" value={deviceNotes} onChange={handleDeviceNotes}/>
                            <button type="button" className={detailsButton} onClick={updateDeviceNotes}>Save Note</button>
                        </div>
                        <button className="close" data-dismiss="modal" onClick={() => closeModal()}>&times;</button>
                        {/* <button className="save" data-dismiss="modal" onClick={updateDeviceNotes}>Save Changes</button> */}
                    </div>
                </div>
            </div>}
        </>
    )
};

export default EditRecord;