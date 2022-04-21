// Package imports
import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, FormGroup, Icon, IconSize, InputGroup, NumericInput } from '@blueprintjs/core';
import { Select } from '@blueprintjs/select';

// Local imports
import Logo from '../../logo';
import GBP from '../smol/GBP';
import { UserContext } from '../../App';
import PrimaryButton from '../smol/buttons/primaryButton'
import './welcome.scss';
import ToggleDarkMode from '../smol/buttons/toggleDarkMode';

function Welcome () {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useContext(UserContext);

  return (
    <div className='welcome'>
      <header>
        <Logo />
      </header>
      <main className='welcome-container'>
        <div className='welcome-text'>
          Welcome message.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid quibusdam voluptate quae voluptatum maiores. Commodi praesentium quam fugit, corrupti aspernatur dolore. Distinctio odio voluptatibus magnam qui provident cum dignissimos placeat.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid quibusdam voluptate quae voluptatum maiores. Commodi praesentium quam fugit, corrupti aspernatur dolore. Distinctio odio voluptatibus magnam qui provident cum dignissimos placeat.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid quibusdam voluptate quae voluptatum maiores. Commodi praesentium quam fugit, corrupti aspernatur dolore. Distinctio odio voluptatibus magnam qui provident cum dignissimos placeat.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid quibusdam voluptate quae voluptatum maiores. Commodi praesentium quam fugit, corrupti aspernatur dolore. Distinctio odio voluptatibus magnam qui provident cum dignissimos placeat.
        </div>
        <div className='welcome-text'>
          Describe the app.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus distinctio temporibus natus expedita voluptate consectetur porro quisquam nisi odio a voluptatem autem rerum atque aperiam, quod maxime nobis voluptatum dignissimos.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus distinctio temporibus natus expedita voluptate consectetur porro quisquam nisi odio a voluptatem autem rerum atque aperiam, quod maxime nobis voluptatum dignissimos.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus distinctio temporibus natus expedita voluptate consectetur porro quisquam nisi odio a voluptatem autem rerum atque aperiam, quod maxime nobis voluptatum dignissimos.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus distinctio temporibus natus expedita voluptate consectetur porro quisquam nisi odio a voluptatem autem rerum atque aperiam, quod maxime nobis voluptatum dignissimos.
        </div>
        <div className='welcome-text'>
          Explain why I need some details from the user.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore nostrum in sequi incidunt reiciendis iure eius laborum eos, ratione esse quaerat cumque modi consequatur, exercitationem perspiciatis omnis, ad hic necessitatibus.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore nostrum in sequi incidunt reiciendis iure eius laborum eos, ratione esse quaerat cumque modi consequatur, exercitationem perspiciatis omnis, ad hic necessitatibus.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore nostrum in sequi incidunt reiciendis iure eius laborum eos, ratione esse quaerat cumque modi consequatur, exercitationem perspiciatis omnis, ad hic necessitatibus.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore nostrum in sequi incidunt reiciendis iure eius laborum eos, ratione esse quaerat cumque modi consequatur, exercitationem perspiciatis omnis, ad hic necessitatibus.
        </div>
        <FormGroup
          inline
        >
          <InputGroup
            id='currentLocation'
            defaultValue={userDetails[0]}
            fill
            leftIcon='locate'
            onChange={(e) => setUserDetails([
              e.target.value,
              userDetails[1]
            ])}
            placeholder='Current Location'
          />
          {/* <Select
            fill
            items={cities.map(city => city.name)}
            placeholder='Current Location'
          >
            <Button
              leftIcon='locate'
              text={cities[0].name}
            />
          </Select> */}
          {/* <NumericInput
            leftIcon={<GBP />}
            placeholder="Placeholder text"
          /> */}
          <NumericInput
            fill
            defaultValue={userDetails[1]}
            leftIcon={<GBP />}
            majorStepSize='10000'
            min={0}
            onValueChange={(value) => setUserDetails([
              userDetails[0],
              value
            ])}
            placeholder='Current Salary'
            stepSize='1000'
          />
        </FormGroup>
        <div className='submitUserDetails'>
          <ToggleDarkMode />
          <PrimaryButton
            onClick={() => navigate('/jobs')}
            text='Start Search'
            icon='key-enter'
          />
        </div>
      </main>
    </div>
  );
}

export default Welcome;
