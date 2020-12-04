import React, {createContext, useState, useContext, useEffect} from 'react';
import {lightColors, darkColors} from './Colors';

export const ThemeContext = createContext({
  isDark: false,
  colors: lightColors,
  setScheme: () => {},
});

export const ThemeProvider = (props) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {}, [isDark]);

  const defaultTheme = {
    isDark,
    colors: isDark ? darkColors : lightColors,
    setScheme: (scheme) => setIsDark(scheme === 'dark'),
  };

  return (
    <ThemeContext.Provider value={defaultTheme}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
