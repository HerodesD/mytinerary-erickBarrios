import React from "react";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const fetchCityDetails = async (name) => {
    const apiUrl = `http://localhost:8080/api/cities/all?name=${encodeURIComponent(name)}`;
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        return data.response.length > 0 ? data.response[0] : null;
    } catch (error) {
        console.error('Error fetching the data:', error);
        return null;
    }
};

export default function DetailsCard() {
    const { name } = useParams();
    const [city, setCity] = useState(null);

    useEffect(() => {

        fetchCityDetails(name).then(cityData => {

            if (cityData) {
                setCity(cityData);
            }
        });
    }, [name]);

    if (!city) {
        return <div>Loading...</div>;
    }

    return (
        <div className="mx-auto px-4 py-8 bg-black items-center text-white">
            <h1 className="text-4xl mb-6 text-center text-amber-600 shadow font-extrabold">{city.name}</h1>
            <img src={city.photo} alt={city.name} className="w-72 h-40 items-center object-cover mb-4 rounded " />
            <p>Country: {city.country}</p>
            <p>Population: {city.population}</p>
            <p>Language: {city.language}</p>

            <p>{city.description}</p>
            <p className="text-center text-red-500 text-3xl md:text-4xl">Under Construction</p>
        </div>
    );
}