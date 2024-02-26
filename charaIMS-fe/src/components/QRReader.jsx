import React, { useState, useEffect } from "react";
import { Html5QrcodeScanner } from 'html5-qrcode';
import "../css/qrreader.css";

const link = import.meta.env.VITE_LINK;

const QRReader = () => {

    const [scanResult, setScanResult] = useState(null);
    const [deviceDetail, setDeviceDetail] = useState(null);

    useEffect(() => {
        const scanner = new Html5QrcodeScanner('reader', {
            qrbox: {
                width: 400,
                height: 400,
            },
            fps: 5,
        }, 100);


        const success = (result) => {
            scanner.clear();
            setScanResult(result);
            getDeviceDetail(result);
        }



        // const error = () => {
        //     console.error(error);
        // }

        scanner.render(success);
    },[]);

    const getDeviceDetail = async (result) => {
        try {
            console.log(link);
            const response = await fetch(`${link}/devices/${result}`);
            const jsonData = await response.json();
            setDeviceDetail(jsonData);
            console.log(jsonData);
            
        } catch (error) {
            console.error(error);
        }
    }


    console.log(deviceDetail);
    return (
        <>
            <div className="App">
                <h1>Scan QR Code</h1>
                { deviceDetail
                ? <div>
                    <div>Serial Number: {deviceDetail[0].serial_number}</div>
                    <div>First Name: {deviceDetail[0].first_name}</div>
                    <div>Last Name: {deviceDetail[0].last_name}</div>
                    <div>Date Assigned: {deviceDetail[0].date_assigned}</div>
                </div>:
                <div id="reader"></div>}
            </div>
        </>
    )
}


export default QRReader;




{/* <>
            <div className="App">
                <h1>QR Code Scanning</h1>
                
                <div id="reader"></div>
            </div>
        </> */}