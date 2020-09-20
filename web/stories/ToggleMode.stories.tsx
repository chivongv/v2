import { useColorMode } from 'theme-ui';
import ToggleMode from '../components/ToggleMode';

export default {
  title: 'Button',
};

export const toggleMode = () => {
  const [colorMode, setColorMode] = useColorMode();

  const toggleMode = () => {
    setColorMode(colorMode === 'dark' ? 'light' : 'dark');
  };

  return <ToggleMode onClick={() => toggleMode()} />;
};
