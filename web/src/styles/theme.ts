import { ColorMode, Theme } from 'theme-ui';

type Colors = ColorMode & {
  black: string;
  blue: string;
  darkGrey: string;
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
        text: '#ececec',
        background: '#17191c',
        primary: 'rgb(86, 134, 245)',
        accent: 'rgb(86, 134, 245)',
        tag: 'rgb(219, 232, 225, 0.7)',
        shadow: 'rgba(0, 0, 0, 0.7)',
        thumbnail: '#f2f2f205',
        navBarBg: '#17191c',
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
