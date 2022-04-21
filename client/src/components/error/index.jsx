// Package imports

// Local imports
import Sidebar from '../sidebar';

function Error () {
  return (
    <main>
      <Sidebar />
      <div>
        Error 404: Page not found
      </div>
    </main>
  );
}

export default Error;
