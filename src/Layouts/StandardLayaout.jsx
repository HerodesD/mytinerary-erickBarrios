import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import Footer from '../Components/footer';
export default function StandardLayout() {
    return (
        <>
            <div className='flex flex-col md:overflow-auto'>
                <header>
                    <NavBar> </NavBar>
                </header>
                <main>
                    <Outlet></Outlet>
                </main>
                <footer>
                    <Footer></Footer>
                </footer>
            </div>
        </>
    );
}