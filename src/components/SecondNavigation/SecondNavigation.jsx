import React, { useEffect, useRef } from 'react';
import './SecondNavigation.css';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

const SecondNavigation = ({ secondNavItems }) => {

    console.log("secondNavItems", secondNavItems)

    return (
        <div data-scroll-container className='second-navigation-component'>
            {secondNavItems.map((item, index) => (
                <span key={index}>{item.name}</span>
            ))}
        </div>

    )
}

export default SecondNavigation