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
    const [isOpen, setIsOpen] = useState(false);

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
        <div className="mx-auto flex flex-col  px-4 py-8 bg-black items-center text-center text-white ">
            <h1 className="text-4xl mb-6 text-center text-amber-600 shadow font-extrabold">{city.name}</h1>
            <img src={city.photo} alt={city.name} className="w-1/2 aspect-video h-1/2 items-center mx-auto object-cover mb-4 rounded bg-blue-700 dark:bg-transparent border-3 shadow-md dark:shadow-pink-400  border-emerald-200 text-neutral-100 " />
            <div className="leading-6 rounded-full w-1/2 flex flex-col items-center text-center text-sm bg-teal-200 dark:bg-transparent border-3 shadow-md dark:shadow-yellow-100 border-blue-700 text-neutral-100 px-3 p-4">

                <p>Country: {city.country}</p>
                <p>Population: {city.population}</p>
                <p>Language: {city.language}</p>

            </div>

            <div className="mt-6">

                {city.itinerary.length > 0 ? (
                    city.itinerary.map((itinerary) => (

                        <div className="grid justify-items-center gap-8 p-1">
                            <div className="relative overflow-hidden w-[min(100%,34rem)] border bg-slate-50 dark:bg-black dark:border dark:border-slate-700 rounded-lg shadow-xl">
                                <div className="flex absolute left-0 top-0 px-1 py-1 rounded-lg text-2xl  text-neutral-100  bg-neutral-600/50 m-4">
                                    <button className="drop-shadow-sm fa-heart active:animate-ping fa-solid" aria-hidden="true">
                                        <img src="https://cdn-icons-png.flaticon.com/128/1029/1029132.png" className="w-3 md:w-5 object-cover" alt="" />

                                    </button>

                                    <div className="leading-none text-center text-xs p-1">{itinerary.likes}</div>
                                </div>

                                <div className="flex p-4 pb-0 gap-4">
                                    <div className="flex flex-col items-center min-w-[5rem]">
                                        <img src={itinerary.photo} className="w-14 sm:w-20 rounded-full aspect-square object-cover  bg-blue-700 dark:bg-transparent border-1 shadow-md dark:shadow-blue-500 border-blue-700 text-neutral-100 " alt="" />
                                        <p className="text-xs font-light mt-1">Create by</p>
                                        <p className="leading-3 font-bold text-center">{itinerary.name}</p>
                                    </div>
                                    <div className="grid w-full ">
                                        <div className="flex flex-wrap  justify-between w-full text-sm font-medium">

                                            <p className=""><i className="fa-solid fa-money-bill-wave"></i>
                                                <img src="https://img.icons8.com/?size=80&id=67354&format=png" className="w-8 md:w-12 object-cover" alt="" />
                                                {itinerary.price}
                                            </p>
                                            <p><i className="fa-regular fa-clock"></i>
                                                <img src="https://img.icons8.com/?size=80&id=110190&format=png" alt="" className="w-8 md:w-12 object-cover" />
                                                {itinerary.duration}</p>

                                        </div>
                                        <div className="flex flex-wrap items-center text-center gap-2 mt-4">
                                            <p className="rounded-full text-center text-sm bg-blue-700 dark:bg-transparent border-1 shadow-md dark:shadow-blue-500 border-blue-700 text-neutral-100 px-3 leading-6">{itinerary.hashtags}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 max-h-full relative">

                                <button className="  flex flex-col text-neutral-500 drop-shadow-lg items-center text-center mx-auto " aria-hidden="true"
                                    onClick={() => setIsOpen(!isOpen)} >

                                    <h2 className="leading-3 font-bold text-center text-emerald-200  dark:shadow-pink-400 shadow-md border-1 animate-pulse hover:animate-none ">View More</h2>



                                </button>
                                {isOpen && (

                                    <div className=" text-white p-4 ml-12 mb-72 absolute mr-32 w-40 border-orange-400 border-3 shadow-md dark:bg-transparent dark:shadow-amber-300 rounded-md  z-20 text-sm md:text-base">
                                        <h2 className="text-center text-sm text-red-400 font-bold">UNDER CONSTRUCTION</h2>

                                    </div>)}

                            </div>
                        </div>

                    ))
                ) : (
                    <p className="text-6xl font-thin">No itineraries yet for this city </p>
                )}
            </div>
        </div>
    );
}
