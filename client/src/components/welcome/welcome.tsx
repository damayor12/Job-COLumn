// Package imports
import { useNavigate } from 'react-router-dom';

// Local imports
import { useUserContext } from '../contexts/user';
import { Footer, HeaderAndLogo } from '../helpers/index';
import {
  userForm,
  WelcomeMessage,
  introduction,
  functionality,
  privacyDisclosure,
} from '../helpers/welcome';

// Styling
import './welcome.scss';

const Welcome: React.FC = () => {
  const navigate = useNavigate();
  // Contexts
  const [user, setUser] = useUserContext();

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
            {/* Describing the app */}
            {introduction}
            {functionality}
            {privacyDisclosure}
            {/* User details and theme preference */}
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
