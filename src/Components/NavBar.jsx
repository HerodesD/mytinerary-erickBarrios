import React from "react";
import { NavLink } from "react-router-dom";
import LoginButton from "./LoginButton";
import { useState } from "react";


const routes = [
    { to: "/", text: "Home" },
    { to: "/Cities", text: "Cities" }];

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="container flex bg-black w-full  h-20   justify-center items-center ">


            <ul className="container mx-auto flex justify-around items-center flex-row-reverse">
                <li>
                    <LoginButton></LoginButton>
                </li>
                <li className="flex gap-5 md:gap-40 text-sm md:text-base">
                    {routes.map((route, index) => (
                        <div key={index}>

                            <NavLink to={route.to} className="text-orange-400">{route.text}</NavLink>

                        </div>
                    ))}
                </li>
                <li>
                    <div className="relative">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white focus:outline-none"
                        >
                            <img className="w-8 h-8" src="https://cdn-icons-png.flaticon.com/128/4856/4856386.png" alt="icon" />
                        </button>
                        {isOpen && (
                            <div className="absolute  mt-6 w-40 border-orange-400 bg-black rounded-md shadow-lg z-20 text-sm md:text-base">
                                <a href="#" className="block px-4 py-2 text-orange-400  hover:bg-gray-200">Option 1</a>
                                <a href="#" className="block px-4 py-2 text-orange-400  hover:bg-gray-200">Option 2</a>
                                <a href="#" className="block px-4 py-2 text-orange-400  hover:bg-gray-200">Option 3</a>
                            </div>
                        )}
                    </div>
                </li>

            </ul>
        </nav>
    );
}

/* <div className="flex items-center md:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-white focus:outline-none"
                >
                </button>
            </div>*/ 