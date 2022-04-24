// Package imports
import { useContext } from 'react';
import { Select } from '@blueprintjs/select';

// Local imports
import { CitiesContext, UserContext } from '../../../App';
import Button from '../buttons/secondaryButton';
import { renderer, filterer } from './helpers';

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

  // TODO extract this to a GenericSelect component
  // Cause it's almost the same in sorts.jsx
  return (
    <Select
      activeItem={location}
      itemPredicate={filterer}
      itemRenderer={renderer}
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