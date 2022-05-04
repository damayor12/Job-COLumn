
import { useGeneralContext } from '../../contexts/contexts';

import Button from './secondaryButton';
import { MaybeElement } from '@blueprintjs/core';

interface Props {
  text?: string;
}

export const ToggleDarkMode: React.FC<Props> = ({ text }) => {
  
  // const [darkMode, toggleTheme] = useThemeContext();
  const {
    theme: [darkMode, toggleTheme],
  } = useGeneralContext();


  

  return (
    <Button
      data-testid='dark-mode' 
      ariaLabel={`Toggle ${darkMode ? 'Light' : 'Dark'} Mode`}
      icon={(darkMode ? 'flash' : 'moon') as unknown as MaybeElement}
      onClick={toggleTheme as () => void}
      text={text ? text : ''}
    />
  );
};

export default ToggleDarkMode;
