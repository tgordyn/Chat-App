import React, {createContext, useState, useContext, useEffect} from 'react';
import {lightColors, darkColors} from './Colors';
import {getTheme} from '../utils/AsyncStorage.js';

export const ThemeContext = createContext({
  isDark: false,
  colors: lightColors,
  setScheme: () => {},
});

export const ThemeProvider = (props) => {
  const [isDark, setIsDark] = useState(false);
  const [theme, setLocalTheme] = useState('aaa');
  getTheme(setLocalTheme);
  useEffect(() => {}, []);
  const defaultTheme = {
    isDark,
    colors: theme == 'dark' ? darkColors : lightColors,
    setScheme: (scheme) => setIsDark(scheme === 'dark'),
  };

  return (
    <ThemeContext.Provider value={defaultTheme}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
