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
    navBarBg: 'rgba(0,0,0,0.1)',
    modes: {
      dark: {
        text: '#9d9fa0',
        background: '#131419',
        primary: 'rgba(54, 148, 255,0.7)',
        accent: '#3694ff',
        hello: '#3694ff',
        tag: 'rgba(157, 159, 160,0.9)',
        shadow: 'rgba(0,0,0,0.15)',
        thumbnail: '#f2f2f210',
        navBarBg: 'rgba(255,255,255,0.1)',
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
