import { useState } from 'react';
import { useEffect } from 'react';





export default function CarouselP() {

    const cities = [

        { id: 1, title: 'Santorini', city: 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { id: 2, title: 'Roma', city: 'https://images.pexels.com/photos/27530585/pexels-photo-27530585/free-photo-of-vaticano.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { id: 3, title: 'Londres', city: 'https://media.istockphoto.com/id/1347665170/es/foto/londres-al-atardecer.jpg?b=1&s=612x612&w=0&k=20&c=rTIlXSqQhfBtftA5TYiTP3jwHSZ9lJqDyIuvG5_TNck=' },
        { id: 4, title: 'Beijing', city: 'https://images.pexels.com/photos/2412603/pexels-photo-2412603.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { id: 5, title: 'Praga', city: 'https://images.pexels.com/photos/15022214/pexels-photo-15022214/free-photo-of-ciudad-punto-de-referencia-noche-navidad.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { id: 6, title: 'Marrakech', city: 'https://media.istockphoto.com/id/1294321554/es/foto/mezquita-de-koutoubia-por-la-ma%C3%B1ana-marrakech-marruecos.jpg?b=1&s=612x612&w=0&k=20&c=Xy-_TNeS_habGmi42KNPq-kxt6giED0BTZo-9EfFjtA=' },
        { id: 7, title: 'Paris', city: 'https://images.pexels.com/photos/161853/eiffel-tower-paris-france-tower-161853.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { id: 8, title: 'Hanoi', city: 'https://images.pexels.com/photos/1004122/pexels-photo-1004122.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { id: 9, title: 'Cusco', city: 'https://media.istockphoto.com/id/479900992/es/foto/lama-y-machu-picchu.jpg?b=1&s=612x612&w=0&k=20&c=5NKnUl7P2e0ZMN60zXGIMAj8Q-VAV3wLKT8rhdUGMTE=' },
        { id: 10, title: 'Rio de Janeiro', city: 'https://images.pexels.com/photos/6580703/pexels-photo-6580703.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { id: 11, title: 'Tokyo', city: 'https://images.pexels.com/photos/315191/pexels-photo-315191.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { id: 12, title: 'Cartagena', city: 'https://images.pexels.com/photos/15847154/pexels-photo-15847154/free-photo-of-panorama-urbano-skyline-verano-rascacielos.jpeg?auto=compress&cs=tinysrgb&w=600' },

    ];

    const icon = [{ id: 14, title: 'Previous', icon: "https://cdn-icons-png.flaticon.com/128/271/271218.png" }, { id: 15, title: 'Next', icon: "https://cdn-icons-png.flaticon.com/128/271/271226.png" }]
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + 3) % 3);
    };

    const getSlides = () => {
        const slides = [];
        for (let i = 0; i < 3; i++) {
            slides.push(cities.slice(i * 4, i * 4 + 4));
        }
        return slides;
    };

    const slides = getSlides();
    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div>
                <h1 className="text-center text-3xl rounded-none font-bold">Popular Mytineraries</h1>
                {slides.map((city, i) => (
                    <div className="items-center justify-center w-full h-full" key={i}>
                        <div
                            className={`flex flex-row items-center justify-center transition-transform transform ${i === currentIndex ? 'visible' : 'hidden'}`}
                        >
                            {city.map((image) => (
                                <div key={image.id} className="flex flex-col items-center justify-center w-full">
                                    <img
                                        className="w-24 md:w-48 lg:w-72 xl:w-96     h-32 md:h-40 lg:h-48 xl:h-64 object-cover rounded-xl"
                                        src={image.city}
                                        alt={image.title}
                                    />
                                    <div>
                                        <h3 className="text-center mt-2 text-sm md:text-base lg:text-lg xl:text-xl font-bold rounded-lg shadow-lg">
                                            {image.title}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                            <button
                                className="absolute top-1/2 left-0 transform -translate-y-1/2 p-1 md:p-2 lg:p-3 bg-white rounded-full"
                                onClick={prevSlide}
                            >
                                <img className="w-3 h-4 md:w-4 md:h-5 lg:w-5 lg:h-6" src={icon[0].icon} alt={icon[0].title} />
                            </button>
                            <button
                                className="absolute top-1/2 right-0 transform -translate-y-1/2 p-1 md:p-2 lg:p-3 bg-white rounded-full"
                                onClick={nextSlide}
                            >
                                <img className="w-3 h-4 md:w-4 md:h-5 lg:w-5 lg:h-6" src={icon[1].icon} alt={icon[1].title} />
                            </button>
                        </div>
                    </div>
                ))}

            </div>
            <div className="flex justify-center mt-4">
                {slides.map((_, i) => (
                    <div
                        key={i}
                        className={` w-4 h-3 flex items-center justify-center mx-1 rounded-full ${i === currentIndex ? 'bg-lime-300' : 'bg-gray-300'}`}
                    />
                ))}
            </div>
        </>
    );
}