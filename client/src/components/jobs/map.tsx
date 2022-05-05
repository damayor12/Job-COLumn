import './map.scss';

const { REACT_APP_GOOGLE_MAPS_API_KEY } = process.env;

  interface Props {
  userLocation: string;
  jobLocation: string;
}

const Map: React.FC<Props> = ({ userLocation, jobLocation }) => {
  console.log('USER LOCATION: ', userLocation);
  console.log('JOB LOCATION: ', jobLocation);
  return (
    <iframe
      id="map"
      width="95%"
      height="400"
      src={`https://www.google.com/maps/embed/v1/directions?origin=${userLocation}&destination=${jobLocation}&key=${REACT_APP_GOOGLE_MAPS_API_KEY}`}
      title="map"
    />
  );
};

export default Map;
