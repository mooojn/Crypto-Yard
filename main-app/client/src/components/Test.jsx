import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Testing = () => {
    const API_URL = 'http://localhost:5182/api/controller/GetUserFromAzure';
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(API_URL)
            .then(response => {
                alert('Data fetched successfully!');
                setData(response.data);
            })
            .catch(error => {
                // Log the entire response object for detailed error information
                console.error('Error fetching data:', error.response);
                alert('Error fetching data. See console for details.');
            });
    }, []);

    return (
        <div>
            <h1>User Data</h1>
            <ul>
                {data.map((user, index) => (
                    <li key={index}>
                        <strong>Name:</strong> {user.name}, <strong>Password:</strong> {user.password}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Testing;
