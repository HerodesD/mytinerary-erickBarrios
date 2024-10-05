import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import CallToAction from '../Components/CallToAction';

export default function StandardLayaout() {
    return (
        <>
            <header >
                <NavBar></NavBar>
            </header>
            <main>
                <Outlet></Outlet>
                <CallToAction></CallToAction>
            </main>
            <footer
                className='bg-black flex w-full h-20 justify-center'>
                <h2 className='text-3xl p-5 text-white text-center'>Footer</h2>
            </footer>
        </>
    );
}
