// Package imports
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Local imports
import { useGeneralContext } from '../contexts/contexts';
import { Footer, HeaderAndLogo } from '../helpers/index';
import {
  userForm,
  WelcomeMessage,
  Introduction,
  Functionality,
  PrivacyDisclosure,
} from '../helpers/welcome';
import ToggleDarkMode from '../../components/small/buttons/toggleDarkMode';


// Styling
import './welcome.scss';

const Welcome: React.FC = () => {
  const navigate = useNavigate();
  // Contexts
  const {
    user: [user, setUser],
  } = useGeneralContext();

  // User salary input's onValueChange
  function onValueChange(value: number) {
    setUser({
      ...user,
      salary: value,
    });
  }

  

  return (
    <>
    <div className="front-page-nav-container"><ToggleDarkMode/></div>
    <div className="welcome">
        <HeaderAndLogo />
        <main className="welcome-container">
          <>
            <section className="text-container">
            <WelcomeMessage />
            <Introduction />
            <Functionality />
            <PrivacyDisclosure />
            </section>
            <aside className="form-container">
            {userForm({
              defaultValue: user.salary,
              onValueChange: onValueChange,
              buttonOnClick: () => navigate('/jobs'),
            })}
            </aside>
          </>
        </main>
        <Footer />
    </div>
    </>
  );
};

export default Welcome;
