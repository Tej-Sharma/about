import React from 'react';
import Navbar from './components/navbar';
import Content from './components/content';

function App() {
  return (
    <div className="App">
        <Navbar />
        <div className="App-content ">
          <Content />
        </div>
    </div>
  );
}

export default App;
