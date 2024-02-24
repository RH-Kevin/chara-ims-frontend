import React, { useState, useEffect } from "react";
import "../css/adminpanel.css"
import UserModal from "./UserModal";

const link = import.meta.env.VITE_LINK;


const AdminPanel = () => {

    const [users, setUsers] = useState([]);


    const [openUserModalId, setOpenUserModalId] = useState(null);

    const openUserModal = (id) => {
        setOpenUserModalId(id);
    };

    const closeUserModal = () => {
        setOpenUserModalId(null);
    };


    // Get Users List
    const getUsers = async () => {
        try {
            const response = await fetch(`${link}/users`);
            const jsonData = await response.json();
            setUsers(jsonData);
        } catch (error) {
            console.error(error);
        }
    }

    // Fetches device list when component mounts
    useEffect(() => {
        getUsers();
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
                                <th scope="col" className=" px-6 py-4">User Name</th>
                                <th scope="col" className=" px-6 py-4">Admin</th>
                                <th scope="col" className=" px-6 py-4">Can View</th>
                                <th scope="col" className=" px-6 py-4">Details</th>
                                </tr>
                            </thead>
                            <tbody>
                               {users.map(user => (
                                    <tr className="border-b dark:border-neutral-500" key={user.id}>
                                        <td className="whitespace-nowrap  px-6 py-4 font-medium">{user.user_name}</td>
                                        <td className="whitespace-nowrap  px-6 py-4">{user.isAdmin ? 'Yes' : 'No'}</td>
                                        <td className="whitespace-nowrap  px-6 py-4">{user.canAccess ? 'Yes' : 'No'}</td>
                                        <td><UserModal user={user} isOpen={openUserModalId === user.id} openModal={openUserModal} closeModal={closeUserModal}/></td>

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


export default AdminPanel;