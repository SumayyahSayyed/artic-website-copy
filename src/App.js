import './App.css';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

// COMPONENTS
import Navigation from './components/Navigation/Navigation';
import SecondNavigation from './components/SecondNavigation/SecondNavigation';
import HeroSection from './components/HeroSection/HeroSection';


import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import LocomotiveScroll from 'locomotive-scroll';
import GSAPHorizontalScroll from './components/GSAPHorizontalScroll/GSAPHorizontalScroll';


function App() {
  const ref = useRef(null);
  const locomotiveScrollRef = useRef(null);

  const options = {
    smooth: true,
  };

  const [pageContainer, setPageContainer] = useState();
  const [scroller, setScroller] = useState();


  useLayoutEffect(() => {
    const page = document.querySelector(".container");


    if (pageContainer) {
      setScroller(new LocomotiveScroll({
        el: pageContainer,
        smooth: true
      }))
    } else {
      setPageContainer(page);
    }
  }, [pageContainer])

  return (
    // <LocomotiveScrollProvider options={options} containerRef={ref} watch={[]}
    //   onUpdate={(scroll) => {
    //     locomotiveScrollRef.current = scroll;
    //   }}>
    <main data-scroll-container ref={ref} className='container'>
      <Navigation />

      <HeroSection />
      {/* <SecondNavigation pageContainer={pageContainer} scroller={scroller} /> */}
      <GSAPHorizontalScroll pageContainer={pageContainer} scroller={scroller} />
    </main>
    // </LocomotiveScrollProvider>
  );
}

export default App;
