// Local imports
// import { useCitiesContext } from '../../contexts/cities';
import { useUserContext } from '../../contexts/user';
import Button from '../buttons/secondaryButton';
import CITIES from '../../helpers/cities.json';
import Select from './select';

function CitiesSelector () {
  // Contexts
  const [user, setUser] = useUserContext();
  // const CITIES = useCitiesContext();

  const { location } = user;

  // Select's onItemSelect
  function onItemSelect (city) {
    setUser({
      ...user,
      location: city.name
    });
  }

  return (
    <Select
      activeItem={location}
      items={CITIES}
      leftIcon='locate'
      onItemSelect={onItemSelect}
    >
      <Button
        text={location}
        icon='locate'
      />
    </Select>
  )
}

export default CitiesSelector;