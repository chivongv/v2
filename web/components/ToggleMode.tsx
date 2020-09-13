import styled from '@emotion/styled';
import { useColorMode } from 'theme-ui';

const Button = styled('button')({
  background: 'none',
  border: 'none',
  display: 'flex',
  borderRadius: 5,
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  opacity: 0.65,
  transition: 'opacity 0.3s ease',
});

const Sun = styled('div')({
  height: 24,
  width: 24,
  borderRadius: '50%',
  background: '#b7b5bd',
  transition: 'background 1s ease',
  ':hover': {
    background: '#ffed00',
    boxShadow: `0 0 5px 5px rgba(255, 237, 0, 0.7),
      0 0 10px 10px rgba(255, 237, 0, 0.4),
        0 0 15px 15px rgba(255, 237, 0, 0.2),
        0 0 20px 20px rgba(255, 237, 0, 0.1),
        0 0 20px 25px rgba(255, 237, 0, 0.05),
        0 0 20px 30px rgba(255, 237, 0, 0.3)`,
    transition: 'box-shadow 0.5s ease',
  },
});

const Moon = styled('div')({
  height: 24,
  width: 24,
  borderRadius: '50%',
  boxShadow: 'inset 8px -8px 0 #b7b5bd',
  ':hover': {
    boxShadow: 'inset 8px -8px 0 #131419',
  },
});

const getModeIcon = (mode: string) => {
  switch (mode) {
    case 'light':
      return <Moon />;
    case 'dark':
      return <Sun />;
    default:
      return null;
  }
};

type Props = {
  onClick?: () => any;
};

const ToggleMode = ({ onClick }: Props) => {
  const [colorMode] = useColorMode();
  const displayText =
    colorMode === 'dark' ? 'Activate light mode' : 'Activate dark mode';

  return (
    <Button
      type="button"
      title={displayText}
      aria-label={displayText}
      onClick={onClick}
    >
      {getModeIcon(colorMode)}
    </Button>
  );
};

export default ToggleMode;