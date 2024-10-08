import React from 'react';



export default function CallToAction() {


    const handleClick = () => {
        window.location.href = '/Cities';
    };

    return (

        <div className="   flex flex-col justify-center items-center text-center  bg-yellow-500  hover:bg-red-800 transition duration-300  bg-opacity-75 p-4  rounded-lg shadow-lg  ">
            <h1 className="text-2xl md:text-4xl font-bold ">
                Explore the World!</h1>
            <p className="text-base md:text-lg mb-6">Discover incredible destinations and live unforgettable adventures.</p>
            <button
                onClick={handleClick}
                className=" bg-red-600 text-white font-bold  rounded-lg hover:bg-green-300 transition duration-300"
            ><span><img className='w-20 h-20 rounded-full' src="https://cdn-icons-png.flaticon.com/128/826/826070.png" alt="" /></span>

            </button>
        </div>

    );
}


