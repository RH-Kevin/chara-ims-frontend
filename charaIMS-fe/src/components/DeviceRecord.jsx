import React, { useState, useRef, useEffect } from "react";
import "../css/devicerecord.css"
import 'tailwindcss/tailwind.css';
import QRGenerator from "./QRGenerator";


// Tailwind Styles
const detailsButton = "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded";
const editButton = "bg-transparent hover:bg-yellow-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded";


const DeviceRecord = ({ device, isOpen, openModal, closeModal }) => {

    
    const [showModal, setShowModal] = useState(false);
    const [openModalId, setOpenModalId] = useState(null);

console.log(device);
    return (
        <>
            <button type="button" className={detailsButton} onClick={() => openModal(device.id)}>Details</button>
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
                            <div className="user-details-card>">
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
                                    <div>{device.manufacturer}</div>
                                    <div>{device.model}</div>
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
                        </div>
                        <div className="notes block max-w-2xl rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                            <h2 className="qr-code-title">Notes</h2>
                        </div>
                        <button className="close" data-dismiss="modal" onClick={() => closeModal()}>&times;</button>
                    </div>
                </div>
            </div>}
        </>
    )
};

export default DeviceRecord;