import React from 'react';



function CallToAction() {


    const handleClick = () => {
        window.location.href = '/Cities';
    };

    return (
        <div className=" min-h-screen flex items-center justify-center p-4">
            <div className="bg-white bg-opacity-75 p-6 md:p-10 rounded-lg shadow-lg text-center max-w-lg w-full">
                <h1 className="text-2xl md:text-4xl font-bold mb-4">¡Explora el Mundo!</h1>
                <p className="text-base md:text-lg mb-6">Descubre destinos increíbles y vive aventuras inolvidables.</p>
                <button
                    onClick={handleClick}
                    className="bg-blue-500 px-4 py-2 md:px-2 md:py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                ><span><img className='w-20 h-20 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz9ojPZZFoj5UEAvEr9u12rPUCYGS6CFHOCA&s" alt="" /></span>

                </button>
            </div>
        </div>
    );
}


export default CallToAction;