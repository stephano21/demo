import React, { useState } from 'react';
import LandingPage from './LandingPage';
import LandingPage2 from './LandingPage2';
import LandingPage3 from './LandingPage3';
import Portfolio from './Portfolio';
import Navigation from './Navigation';

function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'landing2' | 'landing3' | 'portfolio'>('landing');

  return (
    <>
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      {currentPage === 'landing' && <LandingPage />}
      {currentPage === 'landing2' && <LandingPage2 />}
      {currentPage === 'landing3' && <LandingPage3 />}
      {currentPage === 'portfolio' && <Portfolio />}
    </>
  );
}

export default App;
