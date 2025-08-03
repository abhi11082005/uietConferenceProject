import {Link,NavLink} from 'react-router-dom'
import React from 'react';
import HeroSection from "../tools/HeroSection";
import Organizers from "../tools/Organizers";
// import Committee from "./tools/Committee";
import AboutConference from "../tools/AboutConference";

export default function Home() {
    return (<>
        <div className="mx-auto w-full max-w-7xl">
            <HeroSection />
            <Organizers />
            <AboutConference />
        </div>
        </>
    );
}