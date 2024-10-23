import React from "react";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const fetchCityDetails = async (name) => {
    const apiUrl = `http://localhost:8080/api/cities/all?name=${name}`;
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('API Response:', data); // Añadir este log para ver la respuesta de la API
        return data.response.length > 0 ? data.response[0] : null;
    } catch (error) {
        console.error('Error fetching the data:', error);
        return null;
    }
};

export default function Details() {
    const { name } = useParams();
    const [city, setCity] = useState(null);

    useEffect(() => {
        fetchCityDetails(name).then(cityData => {
            console.log('City Data:', cityData); // Añadir este log para ver los datos de la ciudad
            if (cityData) {
                setCity(cityData);
            } else {
                console.log('No city found with the given name'); // Añadir este log si no se encuentra la ciudad
            }
        });
    }, [name]);

    if (!city) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8 bg-black text-white">
            <h1 className="text-2xl font-bold mb-6">{city.name}</h1>
            <img src={city.photo} alt={city.name} className="w-full h-40 object-cover mb-4 rounded" />
            <p>Population: {city.population}</p>
            <p>Country: {city.country}</p>
            <p>{city.description}</p>
        </div>
    );
}