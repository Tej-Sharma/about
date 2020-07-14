import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';

function App() {
  return (
    <div className="App">
        <Navbar />
        <div className="App h-screen text-white">
          <Hero />
        </div>
    </div>
  );
}

export default App;
