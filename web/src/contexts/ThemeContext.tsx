import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext(null);

const defaultTheme = {
  text: '#9d9fa0',
  background: '#131419',
  primary: 'rgba(54, 148, 255,0.7)',
  accent: '#ff8f58',
  hello: '#3694ff',
  tag: 'rgba(157, 159, 160,0.9)',
  shadow: 'rgba(0,0,0,0.15)',
  thumbnail: '#f2f2f210',
  darkGrey: '#444a51',
  black: '#212131',
  blue: '#3694ff',
  orange: '#ff8f58',
  white: '#fff',
};

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
