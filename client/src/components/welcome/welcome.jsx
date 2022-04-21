// Package imports
import { FormGroup, InputGroup, Label, NumericInput } from '@blueprintjs/core';
import { useNavigate } from 'react-router-dom';

// Local imports
import Logo from '../../logo';
import Button from '../smol/buttons/primaryButton'
import './welcome.scss';

function Welcome () {
  const navigate = useNavigate();

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
            fill
            placeholder='Current Location'
          />
          <NumericInput
            // allowNumericCharactersOnly,
            id='currentSalary'
            fill
            min={0}
            placeholder='Current Salary'
          />
        </FormGroup>
        <div className='submitUserDetails'>
          <Button
            onClick={() => navigate('/jobs')}
            text='Submit'
            icon='key-enter'
          />
        </div>
      </main>
    </div>
  );
}

export default Welcome;
