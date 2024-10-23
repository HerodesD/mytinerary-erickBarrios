import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/footer';
import NavBarDetails from '../Components/NavBarDetails';
export default function DetailsLayout() {
    return (
        <>

            <header>
                <NavBarDetails></NavBarDetails>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>



        </>
    );
}