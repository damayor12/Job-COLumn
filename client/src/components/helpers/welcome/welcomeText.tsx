import React from 'react';

export const Introduction: React.FC = () => (
  <div className="welcome-text">
    <p>
      <span className="bold rose">Job COLumn</span> is a job board that considers the cost of
      living.
      <br />
      It compares the minimum salary in a listed job with your current salary! Magic!
      <br />
      It doesn't display jobs that don't list a salary (because they'll probably try and scam you
      and I ain't about that life) nor any jobs outside of a set list of the larger cities in the
      UK.
      <br />
      You may be asking yourself, "But, why?" Cause I said so. Deal with it or don't use my app.
      Bite me. JK ILY please stay &lt;3.
      <br />
      Nah but for real, of all the jobs that do have salaries, it will show you which jobs will give
      you a better quality of life. Please note this is just about making more money for your time,
      if you're unhappy this site won't change that.
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
  <div className="welcome-text">
    <div role="privacy">Testing a div</div>
    <p>
      Now obviously I'll need some information from you to make this app work.
      <br />
      I'll need your current location to compare the consumer price index - CPI (look it up) with
      that of the one in each job's location. If you live in the middle of nowhere, pick your
      closest city.
      <br />
      I'll also need your current salary for the same reason. Obviously these 2 details alone aren't
      enough to personally identify you if some hacker gets into this super insecure website, but if
      you think that specific combination will out you, just use a close enough value.
      <br />
      Also, I'm a dark mode dude. If you're not, click the flashlight to burn your retinas.
    </p>
  </div>
);
