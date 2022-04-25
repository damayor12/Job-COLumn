// Styling
import './map.scss';

function Map ({ userLocation, jobLocation }) {

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
  );
}

export default Map;
