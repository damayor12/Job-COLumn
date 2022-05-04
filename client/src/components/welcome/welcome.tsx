// Package imports
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
    <div className="welcome">
      <>
        <HeaderAndLogo />

        <main className="welcome-container">
          <>
            <WelcomeMessage />
            <Introduction />
            <Functionality />
            <PrivacyDisclosure />
            {userForm({
              defaultValue: user.salary,
              onValueChange: onValueChange,
              buttonOnClick: () => navigate('/jobs'),
            })}
          </>
        </main>

        <Footer />
      </>
    </div>
  );
};

export default Welcome;
