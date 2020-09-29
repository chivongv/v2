import { createContext, useContext, useState } from 'react';
import defaultTheme from '../styles/theme';

const ThemeContext = createContext(null);

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!!context) {
    return context;
  }

  throw new Error('Error! Trying to use useTheme outside its provider');
};

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme);

  const resetTheme = setTheme(defaultTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resetTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
