import react from 'react';

export default function HeroWelcome() {
    const traveler = [
        {
            image: 'https://images.pexels.com/photos/12496265/pexels-photo-12496265.jpeg?auto=compress&cs=tinysrgb&w=600',
            titleApp: 'My Tinerary',
            slogan: 'Find your perfect trip, designed by insiders who know and love their cities!',
            id: '1'
        }
    ];

    return (
        <>
            {traveler.map((item) => (
                <div key={item.id} className='relative w-full h-full   flex flex-col items-center justify-center  p-4'>
                    <h1 className="animate-pulse hover:animate-none  font-mono text-3xl font-bold mb-2 md:text-4xl lg:text-6xl text-center">{item.titleApp}</h1>
                    <img src={item.image} alt="traveling the world" className="	 h-3/6 md:w-11/12 overflow-hidden object-cover rounded-lg shadow-lg" />


                    <p className="text-white shadow-orange-400 absolute font-mono italic text-md font-bold md:text-xl lg:text-3xl text-center w-11/12">{item.slogan}</p>

                </div>

            ))}
        </>
    );
}