// Package imports
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Colors, FormGroup, NumericInput } from '@blueprintjs/core';

// Local imports
import { UserContext, ThemeContext } from '../../App';
import Logo from '../logo/logo';
import GBP from '../smol/GBP';
import Button from '../smol/buttons/primaryButton'
import ToggleDarkMode from '../smol/buttons/toggleDarkMode';
import CitiesSelector from '../smol/select/cities';
import './welcome.scss';

function Welcome () {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useContext(UserContext);
  const [darkMode,] = useContext(ThemeContext);

  return (
    <div className='welcome'>
      <header>
        <Logo />
      </header>
      <main className='welcome-container'>
        <div className='welcome-text'>
          <p>Hello and welcome to <span
            className='bold'
            style={{
              color: `${darkMode ? Colors.ROSE5 : Colors.ROSE1}`
            }}
          >Job COLumn</span>!</p>
        </div>
        <div className='welcome-text'>
          <p><span
            className='bold'
            style={{
              color: `${darkMode ? Colors.ROSE5 : Colors.ROSE1}`
            }}
          >Job COLumn</span> is a job board that considers the cost of living.</p>
          <p>It compares the minimum salary in a listed job with your current salary! Magic!</p>
          <p>It doesn't display jobs that don't list a salary (because they'll probably try and scam you and I ain't about that life) nor any jobs outside of a set list of the larger cities in the UK.</p>
          <p>You may be asking yourself, "But, why?" Cause I said so. Deal with it or don't use my app. Bite me. JK ILY please stay &lt;3.</p>
          <p>Nah but for real, of all the jobs that do have salaries, it will show you which jobs will give you a better quality of life. Please note this is just about making more money for your time, if you're unhappy this site won't change that.</p>
        </div>
        <div className='welcome-text'>
          <p>You'll be able to filter by:</p>
          <ul>
            <li>keywords</li>
            <li>location</li>
            <li>minimum salary</li>
          </ul>
          <p>You can also sort by any of:</p>
          <ul>
            <li>location name</li>
            <li>salary</li>
            <li>expiration date</li>
            <li>job title</li>
          </ul>
        </div>
        <div className='welcome-text'>
          <p>Now obviously I'll need some information from you to make this app work.</p>
          <p>I'll need your current location to compare the consumer price index - CPI (look it up) with that of the one in each job's location. If you live in the middle of nowhere, pick your closest city.</p>
          <p>I'll also need your current salary for the same reason. Obviously these 2 details alone aren't enough to personally identify you if some hacker gets into this super insecure website, but if you think that specific combination will out you, just use a close enough value.</p>
          <p>Also, I'm a dark mode dude. If you're not, click the flashlight to burn your retinas.</p>
        </div>
        <FormGroup
          inline
        >
          <CitiesSelector />
          <NumericInput
            defaultValue={userDetails[1]}
            leftIcon={<GBP />}
            id='currentSalary'
            // TODO figure out how to add commas in display
            // locale='en-US'
            majorStepSize='10000'
            min={0}
            onValueChange={(value) => setUserDetails([
              userDetails[0],
              value
            ])}
            stepSize='1000'
          />
          <ToggleDarkMode />
          <Button
            onClick={() => navigate('/jobs')}
            text='Start'
            icon='key-enter'
          />
        </FormGroup>
      </main>
      <footer>
        Powered by <a href='https://www.reed.co.uk/'>
          Reed
        </a> and <a href='https://www.numbeo.com/'>
          Numbeo
        </a>.
      </footer>
    </div>
  );
}

export default Welcome;
