// Package imports
import { Divider } from '@blueprintjs/core';
import React from 'react';

// Local imports
import Back from '../buttons/backButton';

// Styling
import './error.scss';

const Error: React.FC = () => {
  return (
    <main>
      <div data-testid="error-div" className="error">
        Error 404: Page not found
        <Divider />
        <Back />
      </div>
    </main>
  );
};

export default Error;
