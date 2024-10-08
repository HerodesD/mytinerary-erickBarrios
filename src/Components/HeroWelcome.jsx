import react from 'react';

export default function HeroWelcome() {
    const traveler = [
        {
            image: 'https://images.pexels.com/photos/2033343/pexels-photo-2033343.jpeg?auto=compress&cs=tinysrgb&w=600',
            titleApp: 'My Tinerary',
            slogan: 'Find your perfect trip, designed by insiders who know and love their cities!',
            id: '1'
        }
    ];

    return (
        <>
            {traveler.map((item) => (
                <div key={item.id} className='relative w-full h-full flex flex-col items-center justify-center bg-white p-4'>
                    <h1 className="text-2xl font-bold mb-2 md:text-4xl lg:text-7xl text-center">{item.titleApp}</h1>
                    <img src={item.image} alt="traveling the world" className=" h-5/6 w-11/12 overflow-hidden object-cover rounded-lg shadow-lg" />


                    <p className="absolute text-lg text-white font-bold md:text-xl lg:text-2xl text-center w-11/12">{item.slogan}</p>

                </div>
            ))}
        </>
    );
}