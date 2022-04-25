// React imports
// import { useContext } from 'react';

// Local component imports
// import { ThemeContext } from '../../App';

// Styling
import './map.scss';

function Map ({ userLocation, jobLocation }) {
  // Context
  // const [darkMode] = useContext(ThemeContext);

  // TODO start map in night mode if darkMode is on
  // https://developers.google.com/maps/documentation/javascript/examples/style-array#maps_style_array-javascript

  // function mapCreator () {
  //   const properties = {
  //     center: new google
  //       .maps
  //       .LatLng(userLocation.latitude, userLocation.longitude),
  //     zoom: 5
  //   };

  //   const map = new google
  //     .maps
  //     .Map(document.getElementById('map'), properties);
  // }

  return (
    <iframe
      id='map'
      width='95%'
      height='400'
      src={`https://www.google.com/maps/embed/v1/directions?origin=${
        userLocation
      }&destination=${
        jobLocation
      }&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`}
      title='map'
    />
    // <div
    //   id='map'
    //   style={{
    //     width: '100%',
    //     height: '400'
    //   }}
    // />
  );
}

export default Map;
