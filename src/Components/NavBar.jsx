import React from "react";
import { NavLink } from "react-router-dom";
import LoginButton from "./LoginButton";


const routes = [
    { to: "/", text: "Home" },
    { to: "/Cities", text: "Cities" }];

export default function NavBar() {
    return (
        <nav className="bg-black w-full  justify-center">
            <ul className="flex gap-5">
                {routes.map((route, index) => (
                    <li
                        key={index}>
                        <NavLink to={route.to} className={({ isActive }) =>
                            isActive ? "text-blue-500" : "text-white"}>{route.text}</NavLink>
                    </li>

                ))}
                <LoginButton></LoginButton>
            </ul>

        </nav >


    );
};


