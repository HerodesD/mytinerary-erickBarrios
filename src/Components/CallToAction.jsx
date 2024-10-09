import React from 'react';



export default function CallToAction() {


    const handleClick = () => {
        window.location.href = '/Cities';
    };

    return (

        <div className="flex flex-col mt-4 animate-bounce hover:animate-none my-4 justify-center items-center text-center  rounded-full overflow-hidden bg-gradient-to-r hover:from-blue-300 hover:to-green-200 transition duration-300 font-semibold text-black  hover:shadow-2xl text-blackshadow-lg  hover:text-white ">
            <h1 className="text-2xl md:text-4xl font-bold ">
                Explore the World!</h1>
            <p className="text-base font-mono md:text-lg mb-6 ">Discover incredible destinations and live unforgettable adventures.</p>
            <button
                onClick={handleClick}
                className=" bg-black  text-white font-bold  rounded-full py-1 px-1 hover:bg-yellow-300 hover:-scale-x-125 transition duration-300"
            ><span><img className='w-20 h-20  animate-spin hover:animate-none  rounded-full ' src="https://cdn-icons-png.flaticon.com/128/826/826070.png" alt="" /></span>

            </button>
        </div>

    );
}


