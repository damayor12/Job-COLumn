// Package imports
import { Classes, Colors, Spinner } from '@blueprintjs/core';

// Local imports
import './index.css';
import './App.css';

// CSS
import '../node_modules/normalize.css/normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
// import '@blueprintjs/icons/lib/css/blueprint-icons.css';

function App() {
  return (
    <div>
    <h1
      class="bp4-heading"
      style={{
        color: Colors.ROSE1
      }}
    >
      Job COLumn
    </h1>
      <Spinner
        // intent='danger'
        className={Classes.SMALL}
      />
    </div>
  );
}

export default App;
