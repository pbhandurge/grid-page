import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Overview from './components/Overview';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar />
      <div>
        <Header />
        <Overview />
      </div>
    </div>
  );
}

export default App;
