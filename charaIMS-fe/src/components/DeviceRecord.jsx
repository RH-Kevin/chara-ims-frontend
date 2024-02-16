import React from "react";
import "../css/devicerecord.css"



const DeviceRecord = () => {
    return (
        <>
                <div className="main-container-grid">
                    <div className="page-title">
                        <h1 className="device-record">Device Record</h1>
                    </div>
                    <div className="user-details">
                        <h3 className="user-info">User Details</h3>
                    </div>
                    <div className="qr-code">
                        <h3 className="qr-code-title">QR Code</h3>
                    </div>
                    <div className="service-record">
                        <h3 className="qr-code-title">Service Record</h3>
                    </div>
                    <div className="notes">
                        <h3 className="qr-code-title">Notes</h3>
                    </div>
                </div>
        </>
    )
};

export default DeviceRecord;