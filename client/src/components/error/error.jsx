// Package imports

// Local imports
import BackButton from '../smol/buttons/backButton';
import './error.scss';

function Error () {
  return (
    <main>
      <div className='error'>
        Error 404: Page not found
        <BackButton />
      </div>
    </main>
  );
}

export default Error;
