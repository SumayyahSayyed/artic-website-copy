import React, { useEffect, useState } from 'react';
import './TimeLapse.css';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';



import Image1 from "../../assets/images/time-lapse/1.jpg";
import Image2 from "../../assets/images/time-lapse/2.jpg";
import Image3 from "../../assets/images/time-lapse/3.jpg";
import Image4 from "../../assets/images/time-lapse/4.jpg";
import Image5 from "../../assets/images/time-lapse/5.jpg";
import Image6 from "../../assets/images/time-lapse/6.jpg";
import Image7 from "../../assets/images/time-lapse/7.jpg";
import Image8 from "../../assets/images/time-lapse/8.jpg";
import Image9 from "../../assets/images/time-lapse/9.jpg";
import Image10 from "../../assets/images/time-lapse/10.jpg";
import Image11 from "../../assets/images/time-lapse/11.jpg";
import Image12 from "../../assets/images/time-lapse/12.jpg";
import Image13 from "../../assets/images/time-lapse/13.jpg";
import Image14 from "../../assets/images/time-lapse/14.jpg";
import Image15 from "../../assets/images/time-lapse/15.jpg";
import Image16 from "../../assets/images/time-lapse/16.jpg";
import Image17 from "../../assets/images/time-lapse/17.jpg";
import Image18 from "../../assets/images/time-lapse/18.jpg";
import Image19 from "../../assets/images/time-lapse/19.jpg";
import Image20 from "../../assets/images/time-lapse/20.jpg";
import Image21 from "../../assets/images/time-lapse/21.jpg";
import Image22 from "../../assets/images/time-lapse/22.jpg";
import Image23 from "../../assets/images/time-lapse/23.jpg";
import Image24 from "../../assets/images/time-lapse/24.jpg";
import Image25 from "../../assets/images/time-lapse/25.jpg";

// Default Images
import Image26 from "../../assets/images/time-lapse/26.jpg";
import Image27 from "../../assets/images/time-lapse/27.jpg";
import Image28 from "../../assets/images/time-lapse/28.jpg";
import Image29 from "../../assets/images/time-lapse/29.jpg";
import Image30 from "../../assets/images/time-lapse/30.jpg";
import Image31 from "../../assets/images/time-lapse/31.jpg";
import Image32 from "../../assets/images/time-lapse/32.jpeg";
import Image33 from "../../assets/images/time-lapse/33.jpg";

import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const TimeLapse = () => {

    const years = [
        { year: 2000, images: [Image1, Image26, Image27] },
        { year: 2001, images: [Image2, Image28, Image29] },
        { year: 2002, images: [Image3, Image30, Image31] },
        { year: 2003, images: [Image4, Image26, Image27] },
        { year: 2004, images: [Image5, Image32, Image33] },
        { year: 2005, images: [Image6, Image28, Image29] },
        { year: 2006, images: [Image7, Image32, Image33] },
        { year: 2007, images: [Image8, Image30, Image31] },
        { year: 2008, images: [Image9, Image26, Image27] },
        { year: 2009, images: [Image10, Image32, Image33] },
        { year: 2010, images: [Image11, Image30, Image31] },
        { year: 2011, images: [Image12, Image28, Image29] },
        { year: 2012, images: [Image13, Image32, Image33] },
        { year: 2013, images: [Image14, Image26, Image27] },
        { year: 2014, images: [Image15, Image32, Image33] },
        { year: 2015, images: [Image16, Image28, Image29] },
        { year: 2016, images: [Image17, Image32, Image33] },
        { year: 2017, images: [Image18, Image30, Image31] },
        { year: 2018, images: [Image19, Image26, Image27] },
        { year: 2019, images: [Image20, Image28, Image29] },
        { year: 2020, images: [Image21, Image32, Image33] },
        { year: 2021, images: [Image22, Image30, Image31] },
        { year: 2022, images: [Image23, Image32, Image33] },
        { year: 2023, images: [Image24, Image26, Image27] },
        { year: 2024, images: [Image25, Image28, Image29] },
    ];
    const currentYear = new Date().getFullYear();
    const [year, setYear] = useState(currentYear);
    const [newYearValue, setNewYearValue] = useState()


    useEffect(() => {
        if (year === newYearValue) return;

        if (newYearValue) {
            const increment = newYearValue > year ? 1 : -1;

            const timer = setTimeout(() => {
                setYear(prevYear => prevYear + increment);
            }, 50);
            return () => clearTimeout(timer);
        }
    }, [year, newYearValue]);

    const changeYear = (newYear) => {
        setNewYearValue(newYear)
    }

    useGSAP(() => {
        const container = document.querySelector(".time-lapse-section")
        const yearsList = document.querySelector(".years-list");
        const yearDashes = document.querySelectorAll(".year-dash")
        const yearIndicatorArrow = document.querySelector(".year-indicator-arrow");


        gsap
            .to('.year-indicator-arrow', {
                y: -(yearsList.offsetHeight),
                ease: 'none',
                scrollTrigger: {
                    trigger: container,
                    pin: true,
                    scrub: 2,
                    start: 'bottom 90%',
                    end: 'bottom 69.5%',
                    markers: true,
                    onUpdate: (self) => {

                        if (self.direction >= 1) {
                            gsap.to(".time-lapse-image", {
                                // scale: 2,
                                z: 200,
                                x: -10,
                                duration: 2,
                                ease: "power1"
                            })
                        } else {
                            gsap.fromTo(".time-lapse-image", {
                                z: 200,
                                x: -10,
                            }, {
                                z: -200,
                                x: 10,
                                duration: 2,
                                ease: "power1"
                            })
                        }

                        const indicatorRect = yearIndicatorArrow.getBoundingClientRect();

                        // console.log('indicatorRect', indicatorRect)

                        yearDashes.forEach((dash, index) => {
                            const dashRect = dash.getBoundingClientRect();

                            if (Math.abs(indicatorRect.top - dashRect.top) < 1.8) {
                                console.log(`Year-Dash ${index + 1} value:`, dash.getAttribute('data-key'));

                                if (Number(dash.getAttribute('data-key')) !== year)
                                    setNewYearValue(Number(dash.getAttribute('data-key')))
                            }
                        });
                    },
                },
            });

    }, [])

    return (
        <div className='time-lapse-section' data-scroll-section>
            {
                years.map((yearObj, index) => (
                    yearObj.year === year && (
                        <div key={index} className='time-lapse-images-section'>
                            <div className='time-lapse-image'>
                                <img src={yearObj.images[0]} alt="" className='images-as-bubbles' />
                            </div>
                            <div className='time-lapse-image'>
                                <img src={yearObj.images[1]} alt="" className='images-as-bubbles' />
                            </div>
                            <div className='time-lapse-image'>
                                <img src={yearObj.images[2]} alt="" className='images-as-bubbles' />
                            </div>

                            <h1 className='selected-year'>{year}</h1>
                        </div>
                    )
                ))
            }

            <div className='year-indication-plus-list'>
                <div className='year-indicator-arrow'>
                    <svg
                        fill="#000000"
                        height="15px"
                        width="15px"
                        viewBox="0 0 330.002 330.002"
                        xmlns="http://www.w3.org/2000/svg"
                        transform="rotate(180)"
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                        <g id="SVGRepo_iconCarrier">
                            <path
                                id="XMLID_24_"
                                d="M229.966,0.847c-6.011-2.109-12.698-0.19-16.678,4.784L93.288,155.635 
                c-4.382,5.478-4.382,13.263,0.001,18.741l120,149.996c2.902,3.628,7.245,5.63,11.716,5.63c1.658,0,3.336-0.276,4.962-0.847 
                c6.012-2.108,10.035-7.784,10.035-14.154v-300C240.001,8.63,235.978,2.955,229.966,0.847z M210.001,272.24l-85.79-107.235 
                l85.79-107.241V272.24z"
                            />
                        </g>
                    </svg>
                </div>
                <div className='years-list'>
                    {
                        years.map((yearObj, index) => (
                            <span key={yearObj.year} data-key={yearObj.year} className={yearObj.year === year ? 'year-dash selected' : 'year-dash'} onClick={() => { changeYear(yearObj.year) }}>
                            </span>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default TimeLapse