import React, { useState, useEffect } from "react";
import "../css/devicelist.css"
import DeviceRecord from "./DeviceRecord";
import EditRecord from "./EditRecord";

const link = import.meta.env.VITE_LINK;


const DeviceList = () => {

    const [devices, setDevices] = useState([]);
    const [openModalId, setOpenModalId] = useState(null);

    const openModal = (id) => {
        setOpenModalId(id);
    };

    const closeModal = () => {
        setOpenModalId(null);
    };

    // Get Device List
    const getDevices = async () => {
        try {
            const response = await fetch(`${link}/devices`);
            const jsonData = await response.json();
            setDevices(jsonData);
        } catch (error) {
            console.error(error);
        }
    }

    // Fetches device list when component mounts
    useEffect(() => {
        getDevices();
    },[]);

    return (
        <>
            <div>
                <div className="flex flex-col" id="device-list">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-center text-sm font-light">
                            <thead
                                className="border-b bg-neutral-50 font-medium dark:border-neutral-500 dark:text-neutral-800">
                                <tr>
                                <th scope="col" className=" px-6 py-4">Serial Number</th>
                                <th scope="col" className=" px-6 py-4">First Name</th>
                                <th scope="col" className=" px-6 py-4">Last Name</th>
                                <th scope="col" className=" px-6 py-4">Device</th>
                                <th scope="col" className=" px-6 py-4">Date Assigned</th>
                                <th scope="col" className=" px-6 py-4">Warranty Coverage</th>
                                <th scope="col" className=" px-6 py-4">Status</th>
                                <th scope="col" className=" px-6 py-4">Location</th>
                                <th scope="col" className=" px-6 py-4">Details</th>
                                <th scope="col" className=" px-6 py-4">Edit Record</th>
                                </tr>
                            </thead>
                            <tbody>
                               {devices.map(device => (
                                    <tr className="border-b dark:border-neutral-500" key={device.id}>
                                        <td className="whitespace-nowrap  px-6 py-4 font-medium">{device.serial_number}</td>
                                        <td className="whitespace-nowrap  px-6 py-4">{device.first_name}</td>
                                        <td className="whitespace-nowrap  px-6 py-4">{device.last_name}</td>
                                        <td className="whitespace-nowrap  px-6 py-4">Device</td>
                                        {/* <td className="whitespace-nowrap  px-6 py-4">{device.email}</td> */}
                                        <td className="whitespace-nowrap  px-6 py-4">{device.date_assigned}</td>
                                        <td className="whitespace-nowrap  px-6 py-4">{device.warranty}</td>
                                        <td className="whitespace-nowrap  px-6 py-4">{device.status}</td>
                                        <td className="whitespace-nowrap  px-6 py-4">{device.location}</td>
                                        <td><DeviceRecord device={device} isOpen={openModalId === device.id} openModal={openModal} closeModal={closeModal}/></td>
                                        <td><EditRecord device={device} isOpen={openModalId === device.id} openModal={openModal} closeModal={closeModal}/></td>
                                    </tr>
                               ))}
                            </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}


export default DeviceList;