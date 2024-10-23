import React from 'react';
import { useNavigate } from 'react-router-dom';
import CitiesCard from '../Components/CitiesCard';
import Footer from '../Components/footer';





export default function Cities() {

    const navigate = useNavigate();
    return (
        <>
            <div className='bg-black '>
                <button className='text-yellow-900 flex items-center p-5' onClick={() => navigate('/')}>
                    <img src='https://cdn.icon-icons.com/icons2/116/PNG/96/back_previous_arrow_left_19318.png' alt='Back' className='w-8 h-8 mr-2' />
                    Home
                </button>
                <CitiesCard></CitiesCard>

                <Footer></Footer>

            </div>


        </>
    )
};

