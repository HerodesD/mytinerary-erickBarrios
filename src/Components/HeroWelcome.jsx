import react from 'react';

export default function HeroWelcome() {
    const traveler = [
        {
            image: 'https://media.istockphoto.com/id/1392494719/es/foto/mujer-con-maleta-rosa-y-pasaporte-con-tarjeta-de-embarque-de-pie-en-la-escalera-de-pasajeros.jpg?b=1&s=612x612&w=0&k=20&c=ce-Sfzt8KlPu7VvidzUlnG67NFqZdmj_sQTOA82Xjno=',
            titleApp: 'My Tinerary',
            slogan: 'Find your perfect trip, designed by insiders who know and love their cities!',
            id: '1'
        }
    ];

    return (
        <>
            {traveler.map((item) => (

                <div key={item.id} className='relative mx-auto overflow-hidden container  w-full h-full flex flex-col items-center justify-center  p-4'>
                    <img src={item.image} alt="traveling the world" className="	object-cover  hover:animate-none  w-full h-full   shadow-lg" />
                    <div className='absolute flex flex-col items-center shadow-zinc-500'>
                        <h1 className=" animate-pulse  text-white  font-mono text-2xl shadow-md dark:shadow-pink-400 bg-transparent font-bold mb-2 md:text-4xl lg:text-6xl text-center">{item.titleApp}</h1>
                        <p className="text-white shadow-orange-400 sm:p-8 p-0 md:p-32  font-mono italic font-bold text-sm sm:text-xl md:text-4xl text-center w-11/12">{item.slogan}</p>

                    </div>

                </div>


            ))}
        </>
    );
}