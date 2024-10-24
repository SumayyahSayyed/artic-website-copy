import React, { useState } from 'react';
import './HeroSection.css';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import HeroSectionImage from "../../assets/images/hero-section-image.jpg";
import { BounceLoader } from 'react-spinners';

const HeroSection = () => {

    const [isImageLoaded, setIsImageLoaded] = useState(false);

    useGSAP(() => {
        if (isImageLoaded) {
            gsap.to(".reveal-section", {
                y: 320, duration: 1.5, ease: 'power1.inOut', height: 0, onComplete: () => {
                    gsap.to(".reveal-section", { display: "none" });
                }
            })
        } else {
            gsap.from(".hero-section-one", { scale: 1.2, duration: 2, ease: 'power1.inOut' });
            gsap.from(".hero-details-section", { y: 100, duration: 1, ease: 'power1.inOut' })
        }

    }, [isImageLoaded]);

    const handleImageLoad = () => {
        setIsImageLoaded(true)
    };


    return (
        // <div data-scroll-section>
        <div className='herosection-component'>

            <div>
                <h1 className='hero-section-main-heading'>NEWS</h1>
                <p className='hero-section-main-para'>Keep up to date with all the latest news, press release and media content from the Artic.</p>
            </div>

            <div className='hero-sections'>
                <div style={{ overflow: "hidden" }}>
                    <div className='hero-section-one'>
                        <div className='forbes-heading'>
                            <p>Middle Easts</p>
                            <h1>Forbes</h1>
                        </div>
                        <div className='hero-section-one-heading'>
                            <h1>Top CEOs 2024</h1>
                        </div>
                    </div>
                </div>

                <div className='hero-section-two'>
                    <div className='reveal-section'>
                        {!isImageLoaded &&
                            <BounceLoader />
                        }
                    </div>
                    <img
                        className='hero-section-image'
                        src={HeroSectionImage}
                        onLoad={() => handleImageLoad()}
                        hidden={!isImageLoaded} />

                    <div className='hero-details-section'>
                        <div className='hero-image-detail'>
                            <h6>Jun 26, 2024</h6>
                            <span className='share-icon'>
                                <svg data-v-0094b522="" width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-v-0094b522="" d="M7.74745 10.3487L4.94812 8.82199C4.58265 9.2127 4.10811 9.48445 3.58617 9.60192C3.06423 9.71939 2.51902 9.67715 2.0214 9.48069C1.52378 9.28423 1.09676 8.94263 0.795833 8.50029C0.494905 8.05795 0.333984 7.53533 0.333984 7.00033C0.333984 6.46533 0.494905 5.9427 0.795833 5.50037C1.09676 5.05803 1.52378 4.71643 2.0214 4.51997C2.51902 4.32351 3.06423 4.28127 3.58617 4.39874C4.10811 4.51621 4.58265 4.78795 4.94812 5.17866L7.74812 3.652C7.58939 3.02264 7.66565 2.35699 7.9626 1.77984C8.25955 1.20269 8.75681 0.753652 9.36116 0.516907C9.96551 0.280162 10.6355 0.271962 11.2454 0.493845C11.8554 0.715728 12.3635 1.15246 12.6745 1.72217C12.9855 2.29188 13.078 2.95546 12.9347 3.58852C12.7914 4.22157 12.4222 4.78063 11.8962 5.16091C11.3702 5.54119 10.7235 5.71657 10.0775 5.65417C9.43142 5.59178 8.8303 5.2959 8.38679 4.82199L5.58679 6.34866C5.69426 6.77623 5.69426 7.22376 5.58679 7.65133L8.38679 9.178C8.83052 8.70432 9.43178 8.40874 10.0779 8.34667C10.7239 8.28459 11.3705 8.46027 11.8963 8.84079C12.4221 9.2213 12.7911 9.78053 12.9341 10.4136C13.077 11.0467 12.9842 11.7103 12.673 12.2798C12.3618 12.8494 11.8535 13.2859 11.2434 13.5075C10.6334 13.7291 9.96347 13.7206 9.35923 13.4837C8.75499 13.2467 8.25793 12.7975 7.96121 12.2202C7.66449 11.6429 7.58849 10.9773 7.74745 10.348M3.00079 8.33333C3.35441 8.33333 3.69355 8.19285 3.9436 7.9428C4.19365 7.69276 4.33412 7.35362 4.33412 7C4.33412 6.64637 4.19365 6.30723 3.9436 6.05719C3.69355 5.80714 3.35441 5.66666 3.00079 5.66666C2.64717 5.66666 2.30803 5.80714 2.05798 6.05719C1.80793 6.30723 1.66745 6.64637 1.66745 7C1.66745 7.35362 1.80793 7.69276 2.05798 7.9428C2.30803 8.19285 2.64717 8.33333 3.00079 8.33333ZM10.3341 4.33333C10.6877 4.33333 11.0269 4.19285 11.2769 3.9428C11.527 3.69276 11.6675 3.35362 11.6675 2.99999C11.6675 2.64637 11.527 2.30723 11.2769 2.05719C11.0269 1.80714 10.6877 1.66666 10.3341 1.66666C9.9805 1.66666 9.64136 1.80714 9.39131 2.05719C9.14126 2.30723 9.00079 2.64637 9.00079 2.99999C9.00079 3.35362 9.14126 3.69276 9.39131 3.9428C9.64136 4.19285 9.9805 4.33333 10.3341 4.33333ZM10.3341 12.3333C10.6877 12.3333 11.0269 12.1929 11.2769 11.9428C11.527 11.6928 11.6675 11.3536 11.6675 11C11.6675 10.6464 11.527 10.3072 11.2769 10.0572C11.0269 9.80714 10.6877 9.66666 10.3341 9.66666C9.9805 9.66666 9.64136 9.80714 9.39131 10.0572C9.14126 10.3072 9.00079 10.6464 9.00079 11C9.00079 11.3536 9.14126 11.6928 9.39131 11.9428C9.64136 12.1929 9.9805 12.3333 10.3341 12.3333Z" fill="#292929"></path></svg>
                            </span>
                        </div>
                        <div>
                            <h2>
                                Alpen Capital GCC Hospitality Report 2024
                            </h2>
                            <p>CEO & MD Mr. Tarek M El Sayed is featured in the GCC Hospitality Report 2024 by Alpen Capital."</p>
                        </div>
                    </div>

                </div>
            </div>
            {/* <button onClick={playAnimation}>PLAY</button> */}
        </div>
        // </div>
    )
}

export default HeroSection