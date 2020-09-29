import { ColorMode, Theme } from 'theme-ui';

type Colors = ColorMode & {
  black: string;
  blue: string;
  darkGrey: string;
  hello: string;
  orange: string;
  shadow: string;
  tag: string;
  thumbnail: string;
  white: string;
  navBarBg: string;
};

export type ExtendedTheme = Theme & {
  colors: Colors;
};

const theme: ExtendedTheme = {
  initialColorModeName: 'light',
  useColorSchemeMediaQuery: true,
  useLocalStorage: true,
  colors: {
    text: '#444a51',
    background: 'rgb(250,250,250)',
    primary: 'rgba(54, 148, 255,0.9)',
    accent: '#3d92f3',
    hello: '#ff8f58',
    tag: 'rgba(0,0,0,0.6)',
    shadow: 'rgba(0,0,0,0.1)',
    thumbnail: '#f2f2f2',
    darkGrey: '#444a51',
    black: '#212131',
    blue: '#3694ff',
    orange: '#ff8f58',
    white: '#fff',
    navBarBg: 'rgba(250,250,250,0.9)',
    modes: {
      dark: {
        text: '#DBE8E1',
        background: 'rgb(21, 27, 37)',
        primary: '#034687',
        accent: '#E10032',
        hello: '#3694ff',
        tag: 'rgb(219, 232, 225, 0.7)',
        shadow: 'rgba(219, 232, 225,0.05)',
        thumbnail: '#f2f2f210',
        navBarBg: 'rgba(21, 27, 37,0.9)',
      },
    },
  },
  fonts: {
    body:
      'Roboto, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
    heading: 'inherit',
  },
};

export default theme;
