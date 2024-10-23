import React from "react";
import { useState, useEffect } from 'react';

const fetchCitiesData = async (filter = "") => {
    const apiUrl = `http://localhost:8080/api/cities/all?name=${filter}`;
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.response || [];
    } catch (error) {
        console.error('Error fetching the data:', error);
        return [];
    }
};

export default function CitiesCard() {
    const [cities, setCities] = useState([]);
    const [filter, setFilter] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetchCitiesData(filter).then(citiesData => {
            if (citiesData.length > 0) {
                setCities(citiesData);
                setMessage("");
            } else {
                setCities([]);
                setMessage("Sorry, no cities match your search. Please try again.");
            }
        });
    }, [filter]);

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    return (
        <div className="container mx-auto px-4 py-8 bg-black text-white">
            <h1 className="text-2xl font-bold mb-6">City Gallery</h1>
            <input
                type="text"
                placeholder="Filter cities"
                value={filter}
                onChange={handleFilterChange}
                className="w-full p-2 mb-6 text-yellow-900 rounded border text-center "
            />
            {message && <p className="text-red-500">{message}</p>}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {cities.map((city, index) => (
                    <div key={index} className="border rounded-lg p-4 shadow-md bg-gray-800">
                        <img src={city.photo} alt={city.name} className="w-full h-40 object-cover mb-4 rounded" />
                        <h2 className="text-xl font-semibold">{city.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}