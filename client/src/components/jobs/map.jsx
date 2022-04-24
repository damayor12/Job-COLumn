// React imports
// import { useContext } from 'react';

// Local component imports
// import { ThemeContext } from '../../App';

function Map ({ userLocation, jobLocation }) {
  // Context
  // const [darkMode] = useContext(ThemeContext);

  // TODO start map in night mode if darkMode is on

  return (
    <iframe
      width='480'
      height='480'
      src={`https://www.google.com/maps/embed/v1/directions?origin=${
        userLocation
      }&destination=${
        jobLocation
      }&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`}
      title='map'
    />
  );
}

export default Map;
