import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

const Display = () => {
    const [mydata, setMyData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/getdata");
                if (response.status === 200) {
                    setMyData(response.data); // Assuming the data is in response.data
                    console.log(response.data);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (

        <>
        <Navbar/>
        <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold my-4">All User Details</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <th className="w-1/6 px-4 py-2">Name</th>
                            <th className="w-1/6 px-4 py-2">Email</th>
                            <th className="w-1/6 px-4 py-2">Age</th>
                            <th className="w-1/6 px-4 py-2">Message</th>
                            <th className="w-1/6 px-4 py-2">Reg No</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mydata.map((item, index) => (
                            <tr key={index} className="bg-gray-100 even:bg-gray-200">
                                <td className="border px-4 py-2">{item.name}</td>
                                <td className="border px-4 py-2">{item.email}</td>
                                <td className="border px-4 py-2">{item.age}</td>
                                <td className="border px-4 py-2">{item.message}</td>
                                <td className="border px-4 py-2">{item.regNo}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        </>
        
    );
}

export default Display;
