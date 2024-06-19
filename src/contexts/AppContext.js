// src/contexts/AppContext.js
import React, { createContext, useState } from 'react';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [value, setValue] = useState(0);
  const [randomNumbers, setRandomNumbers] = useState([0, 0, 0, 0]);
  const [theme, setTheme] = useState('light');

  const incrementValue = () => {
    setValue(prevValue => prevValue + 1);
  };

  const generateRandomNumbers = () => {
    const newRandomNumbers = [
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100)
    ];
    setRandomNumbers(newRandomNumbers);
  };

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <AppContext.Provider value={{ value, incrementValue, randomNumbers, generateRandomNumbers, theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
