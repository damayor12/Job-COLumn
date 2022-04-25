// Package imports
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// Local imports
import { UserContext, ThemeContext } from '../../App';
import {
  headerAndLogo,
  welcomeMessage,
  welcomeText1,
  welcomeText2,
  welcomeText3,
  footer,
  userForm
} from '../../jsxElements';

// Styling
import './welcome.scss';

function Welcome () {
  const navigate = useNavigate();
  // Contexts
  const [user, setUser] = useContext(UserContext);
  const [darkMode] = useContext(ThemeContext);

  // User salary input's onValueChange
  function onValueChange (value) {
    setUser({
      ...user,
      salary: value
    });
  }

  return (
    <div className='welcome'>
      {/* Header and logo */}
      {headerAndLogo}
      <main className='welcome-container'>
        {/* Welcome message */}
        {welcomeMessage(darkMode)}
        {/* Describing the app */}
        {welcomeText1(darkMode)}
        {welcomeText2}
        {/* Explain why I need some details from the user */}
        {welcomeText3}
        {/* User details and theme preference */}
        {userForm({
          defaultValue: user.salary,
          onValueChange: onValueChange,
          buttonOnClick: () => navigate('/jobs')
        })}
      </main>
      {/* APIs used */}
      {footer}
    </div>
  );
}

export default Welcome;
