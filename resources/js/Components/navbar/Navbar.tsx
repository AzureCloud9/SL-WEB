import React, { useState, useEffect } from "react";
import Mobile from "./Mobile";
import Default from "./Default";

export default function Navbar() {
    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
        const path = window.location.pathname;
        if (path === '/') {
            setActiveLink('home');
        } else if (path === '/brief-sturen') {
            setActiveLink('send');
        } else if (path === '/over-ons') {
            setActiveLink('about');
        } else if (path === '/contact') {
            setActiveLink('contact');
        }
    }, []);

    const homeClick = () => setActiveLink('home');
    const sendClick = () => setActiveLink('send');
    const aboutClick = () => setActiveLink('about');
    const contactClick = () => setActiveLink('contact');

    return (
        <div>
            <Mobile
                homeClick={homeClick}
                sendClick={sendClick}
                aboutClick={aboutClick}
                contactClick={contactClick}
                activeLink={activeLink}
            />
            <Default
                activeLink={activeLink}
                homeClick={homeClick}
                sendClick={sendClick}
                aboutClick={aboutClick}
                contactClick={contactClick}
            />
        </div>
    );
}
