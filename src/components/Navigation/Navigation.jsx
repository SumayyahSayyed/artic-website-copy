import React from 'react';
import './Navigation.css';

import Logo from "../../assets/logo.png";

const Navigation = () => {
    const navItems = [
        {
            name: 'About',
            route: '/about',
            dropDown: ''
        },
        {
            name: 'Portfolio',
            route: '/portfolio',
            dropDown: ''
        },
        {
            name: 'Sustainability',
            route: '/sustainability',
            dropDown: ''
        },
        {
            name: 'Media',
            route: '/media',
            dropDown: ''
        },
        {
            name: 'Contact',
            route: '/contact',
            dropDown: ''
        }
    ]
    return (
        // <div data-scroll-section>
        <div className='navigation-component'>
            {/* LOGO */}
            <img className='website-logo' src={Logo} alt="website-logo" />

            <div className='navigation-right-section'>

                {/* NAVIGAION ITEMS */}
                <ul className='nav-section'>
                    {
                        navItems.map((navItem, index) => (
                            <a href="#"><li key={index}>{navItem.name}</li></a>
                        ))
                    }
                </ul>

                {/* SEARCH SECTION */}
                <div>
                    Search Button
                </div>
            </div>

        </div>
        // </div>
    )
}

export default Navigation;