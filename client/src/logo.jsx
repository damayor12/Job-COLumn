// Package imports
import { Colors, H1 } from '@blueprintjs/core';

// Local imports

// CSS
import '@blueprintjs/core/lib/css/blueprint.css';
import '../node_modules/normalize.css/normalize.css';

function Logo () {
  return (
    <H1
      style={{
        color: Colors.ROSE1
      }}
    >
      Job COLumn
    </H1>
  );
}

export default Logo;
