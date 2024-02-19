import React, { useState } from "react";
import "../css/devicerecord.css"
import 'tailwindcss/tailwind.css';





const DeviceRecord = ({ device }) => {

    const [deviceDetails, setDeviceDetails] = useState();
    const [showModal, setShowModal] = useState(false);


    console.log(device);
    return (
        <>
            <button type="button" className="btn btn-warning" data-toggle="modal" onClick={() => setShowModal(true)}>Details</button>
            {showModal && 
                <div className="modal" id={`id${device.id}`} onClick={() => setDeviceDetails(device.id)}>
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-200 bg-opacity-100 rounded-lg" id="modal-panel">
                    <div className="main-container-grid">
                        <div className="page-title">
                            <h1 className="device-record">Device Record</h1>
                        </div>
                        <div className="user-details block max-w-xl rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                            <h2 className="user-info">User Details</h2>
                            <br/>
                            <div className="user-details-card>">
                                <div>{device.first_name}</div>
                                <div>{device.last_name}</div>
                                <div>Date Assigned</div>
                                <div>Brand</div>
                                <div>Model</div>
                                <div>Serial Number</div>
                                <div>Warranty Coverage</div>
                            </div>
                        </div>
                        <div className="qr-code block max-w-sm rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                            <h2 className="qr-code-title">QR Code</h2>
                            <button className="regenerate-qr-button inline-block rounded bg-danger px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(220,76,100,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)]">Regenerate QR</button>
                        </div>
                        <div className="service-record block max-w-2xl rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                            <h2 className="qr-code-title">Service Record</h2>
                        </div>
                        <div className="notes block max-w-2xl rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                            <h2 className="qr-code-title">Notes</h2>
                        </div>
                        <button className="close" data-dismiss="modal" onClick={() => setShowModal(false)}>&times;</button>
                    </div>
                </div>
            </div>}
        </>
    )
};

export default DeviceRecord;