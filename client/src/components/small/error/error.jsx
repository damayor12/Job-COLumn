// Package imports
import { Divider } from '@blueprintjs/core';

// Local imports
import Back from '../buttons/backButton';

// Styling
import './error.scss';

function Error () {
  return (
    <main>
      <div className='error'>
        Error 404: Page not found
        <Divider />
        <Back />
      </div>
    </main>
  );
}

export default Error;
