// src/contexts/AppContext.js
import React, { createContext, useState } from 'react';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [value, setValue] = useState(0);

  const incrementValue = () => {
    setValue(prevValue => prevValue + 1);
  };

  return (
    <AppContext.Provider value={{ value, incrementValue }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
