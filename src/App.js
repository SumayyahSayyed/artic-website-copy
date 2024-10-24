import './App.css';

// COMPONENTS
import Navigation from './components/Navigation/Navigation';
import SecondNavigation from './components/SecondNavigation/SecondNavigation';
import HeroSection from './components/HeroSection/HeroSection';


// import { LocomotiveScrollProvider } from 'react-locomotive-scroll'


function App() {

  return (
    // <LocomotiveScrollProvider
    //   options={{ smooth: true, }}
    //   watch={[]}
    //   containerRef={containerRef}
    // >
    //   <main data-scroll-container ref={containerRef}>
    <div className="App">
      <div id="scroll-container" className='scroll-containers'>
        <Navigation />

        <HeroSection />
        <SecondNavigation />
      </div>
    </div>
    // </main>
    // </LocomotiveScrollProvider>
  );
}

export default App;
