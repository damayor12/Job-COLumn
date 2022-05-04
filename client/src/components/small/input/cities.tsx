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
  const [user, setUser] = useUserContext();
  const { location } = user;

  function onItemSelect(city: City) {
    setUser({
      ...user,
      location: city.name,
    });
  }

  return (
    <GenericSelect activeItem={location} items={CITIES as City[]} onItemSelect={onItemSelect}>
        <Button text={location} icon={'locate' as unknown as MaybeElement} />
    </GenericSelect>
 
  );
};

export default CitiesSelector;
