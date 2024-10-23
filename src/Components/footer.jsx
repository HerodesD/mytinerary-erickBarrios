import React from 'react';
import { useState } from 'react';




export default function Footer() {
    const iconDos = [
        { id: 16, title: 'Whatsapp', icon: "https://cdn-icons-png.flaticon.com/128/3670/3670051.png" },
        { id: 17, title: 'X', icon: "https://cdn-icons-png.flaticon.com/128/733/733579.png" },
        { id: 18, title: 'Facebook', icon: "https://cdn-icons-png.flaticon.com/128/4494/4494475.png" },
        { id: 19, title: 'Instagram', icon: "https://cdn-icons-png.flaticon.com/128/2111/2111463.png" },
    ];

    const [isOpen, setIsOpen] = useState(false);

    return (
        <footer className="bg-black text-orange-300  text-center border border-yellow-900 relative">
            <div className="mx-auto flex justify-center flex-row gap-56 p-3 items-center">

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="hover:opacity-75 focus:outline-none "
                >
                    <img src="https://cdn-icons-png.flaticon.com/128/3545/3545581.png" alt="Menu" className="w-8 h-8 hover:scale-150 " />
                </button>
                {isOpen && (
                    <div className="text-center absolute bottom-16 bg-slate-900 my-4 text-white p-2  shadow-lg flex flex-col space-y-2">
                        {iconDos.map(icon => (
                            <a key={icon.id} href="#" title={icon.title} className="hover:opacity-75 flex items-center space-x-2">
                                <img src={icon.icon} alt={icon.title} className="w-6 h-6 " />
                                <span>{icon.title}</span>
                            </a>
                        ))}
                    </div>
                )}

            </div>
            <div>  <h3 className='text-center font-mono'>© 2024 My Tinerary </h3></div>

        </footer>
    );
}

