import React, { useState } from 'react';
import './Navigation.css';

import Logo from "../../assets/logo.png";

const Navigation = ({ getSecondNavItems }) => {
    const [active, setActive] = useState('media');
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
            dropDown: '',
            secondNavItems: [
                {
                    name: 'News',
                    route: '/media/news'
                },
                {
                    name: 'Press Release',
                    route: '/media/press-release'
                },
                {
                    name: 'Video Gallery',
                    route: '/media/video-gallery'
                }
            ]
        },
        {
            name: 'Contact',
            route: '/contact',
            dropDown: ''
        }
    ]


    const updateActiveNaveElement = (data) => {
        setActive(data)

        const selectedNavElement = navItems.find(nav => data === nav.name);
        if (selectedNavElement.secondNavItems) {
            getSecondNavItems(selectedNavElement.secondNavItems);
        } else {
            getSecondNavItems(null)
        }
    }
    return (
        <div className='navigation-component'>
            {/* LOGO */}
            <img className='website-logo' src={Logo} alt="website-logo" />

            <div className='navigation-right-section'>

                {/* NAVIGAION ITEMS */}
                <ul className='nav-section'>
                    {
                        navItems.map((navItem, index) => (
                            <a key={index} href="#" className={active === navItem.name && 'nav-section-active'} onClick={() => updateActiveNaveElement(navItem.name)}><li>{navItem.name}</li></a>
                        ))
                    }
                </ul>

                {/* SEARCH SECTION */}
                <div>
                    Search Button
                </div>
            </div>

        </div>
    )
}

export default Navigation;