// Package imports

// Local imports
import Logo from '../../logo';

function Welcome () {
  return (
    <div>
      <Logo />
      <div>
        Welcome message.
      </div>
      <div>
        Describe the app.
      </div>
      <div>
        Explain why I need some details from the user.
      </div>
      <div>
        Form.
        <form>
          <input
            type='text'
            placeholder='Current location'
          />
          <input
            type='number'
            placeholder='Current salary'
          />
        </form>
      </div>
    </div>
  );
}

export default Welcome;
