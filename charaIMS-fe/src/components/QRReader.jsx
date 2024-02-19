import React, { useState, useEffect } from "react";
import { Html5QrcodeScanner } from 'html5-qrcode';

const QRReader = () => {

    const [scanResult, setScanResult] = useState(null);

    useEffect(() => {
        const scanner = new Html5QrcodeScanner('reader', {
            qrbox: {
                width: 250,
                height: 250,
            },
            fps: 5,
        });
    
        
    
        const success = (result) => {
            scanner.clear();
            setScanResult(result);
        }
    
        const error = () => {
            console.error(error);
        }

        scanner.render(success, error);
    },[]);

    return (
        <>
            <div className="App">
                <h1>QR Code Scanning</h1>
                { scanResult 
                ? <div>Success: <a href={"http://localhost:3000"}>{scanResult}</a></div>: <div id="reader"></div>}
            </div>
        </>
    )
}


export default QRReader;