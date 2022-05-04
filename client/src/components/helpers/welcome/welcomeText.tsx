import React from 'react';

export const Introduction: React.FC = () => (
  <div className="welcome-text">
    <p>
      <span className="bold rose">Job COLumn</span> is a job board that considers the cost of
      living.
      <br />
      It compares the minimum salary in a listed job with your current salary! Magic!
      <br />      
    </p>
  </div>
);

export const Functionality: React.FC = () => (
  <div className="welcome-text">
    <p>You'll be able to filter by:</p>
    <ul>
      {['keywords', 'location', 'minimum salary'].map((element, index) => (
        <li>{element}</li>
      ))}
    </ul>
    <p>You can also sort by any of:</p>
    <ul>
      {['location name', 'salary', 'expiration date', 'job title'].map((element, index) => (
        <li>{element}</li>
      ))}
    </ul>
  </div>
);

export const PrivacyDisclosure: React.FC = () => (
  <div className="welcome-text" role="privacy">
    <p>
      Select your <span className="bold rose">current location</span> to compare the consumer price index - CPI 
      with
      that of the one in each job's location. Also select your <span className="bold rose">current salary</span> for the same reason.
      <br />
    </p>
  </div>
);
