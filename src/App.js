import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar'; // Import Navbar component
import { createContext, useContext } from 'react';


const App = () => {
  return (
    <div>
      <nav>
        <Navbar /> {/* Use Navbar component here */}
      </nav>
      <main className="p-4">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
