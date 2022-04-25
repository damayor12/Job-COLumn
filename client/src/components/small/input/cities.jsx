// Package imports
import { useContext } from 'react';

// Local imports
import { CitiesContext, UserContext } from '../../../App';
import Button from '../buttons/secondaryButton';
import Select from './select';

function CitiesSelector () {
  // Contexts
  const [user, setUser] = useContext(UserContext);
  const CITIES = useContext(CitiesContext);

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