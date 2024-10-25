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

  const [secondNavItems, setSecondNavItems] = useState()


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

  const getSecondNavItems = (items) => {
    setSecondNavItems(items)
  }

  return (
    // <LocomotiveScrollProvider options={options} containerRef={ref} watch={[]}
    //   onUpdate={(scroll) => {
    //     locomotiveScrollRef.current = scroll;
    //   }}>
    <main data-scroll-container ref={ref} className='container'>
      <Navigation getSecondNavItems={getSecondNavItems} />
      {
        secondNavItems &&
        <SecondNavigation secondNavItems={secondNavItems} />
      }

      <HeroSection />
      <GSAPHorizontalScroll pageContainer={pageContainer} scroller={scroller} />
    </main>
    // </LocomotiveScrollProvider>
  );
}

export default App;
