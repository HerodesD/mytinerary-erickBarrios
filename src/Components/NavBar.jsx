import React from "react";
import { NavLink } from "react-router-dom";
import LoginButton from "./LoginButton";
import { useState } from "react";


const routes = [
    //{ to: "/", text: "Home" },
    { to: "/Cities", text: "Cities" }];

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-black w-full h-20 text-balanced flex  justify-center items-center">

            <div className="md:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-white focus:outline-none"
                >

                </button>
            </div>
            <ul className={`flex    flex-row gap-10 md:gap-80 text-start p-2 justify-start items-center `}>
                <LoginButton></LoginButton>
                {routes.map((route, index) => (
                    <li key={index}>
                        <NavLink to={route.to} className={({ isActive }) =>
                            isActive ? "text-blue-500" : "text-white"}>{route.text}</NavLink>
                    </li>
                ))}
                <li>
                    <div className="relative">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white focus:outline-none"
                        >
                            <img className="w-8 h-8" src="https://cdn-icons-png.flaticon.com/128/4856/4856386.png" alt="icon" />
                        </button>
                        {isOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
                                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Option 1</a>
                                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Option 2</a>
                                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Option 3</a>
                            </div>
                        )}
                    </div>
                </li>

            </ul>
        </nav>
    );
}


