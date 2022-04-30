// Local imports
import { MaybeElement } from '@blueprintjs/core';
import { useUserContext } from '../../contexts/user';
import CITIES from '../../helpers/cities.json';
import Button from '../buttons/secondaryButton';
import GenericSelect from './select';

interface City {
  name: string;
  index: number;
  latitude: number;
  longitude: number;
}

const CitiesSelector: React.FC = () => {
  // Contexts
  const [user, setUser] = useUserContext();
  const { location } = user;

  // Select's onItemSelect
  function onItemSelect(city: City) {
    setUser({
      ...user,
      location: city.name,
    });
  }

  // activeItem={location}
    //leftIcon="locate"
  return (
    <GenericSelect activeItem={location} items={CITIES as unknown as City[]} onItemSelect={onItemSelect}/>
 
  );
};

//Removed activeItem={location} as the Select doesn't seem to be using it
export default CitiesSelector;
