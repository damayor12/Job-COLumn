// Package imports
import { Colors } from '@blueprintjs/core';

// Local imports

// CSS
import '@blueprintjs/core/lib/css/blueprint.css';
import '../node_modules/normalize.css/normalize.css';

function Logo () {
  return (
    <h1
      class="bp4-heading"
      style={{
        color: Colors.ROSE1
      }}
    >
      Job COLumn
    </h1>
  );
}

export default Logo;
