import React from "react";
import CallToAction from '../Components/CallToAction';
import HeroWelcome from "../Components/HeroWelcome";
import CarouselP from "../Components/Train";

export default function Home() {
    return (
        <>
            <div className="bg-white">
                <HeroWelcome></HeroWelcome>
                <CallToAction></CallToAction>

                <CarouselP ></CarouselP>
            </div>
        </>
    );
}