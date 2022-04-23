// Package imports
import { useContext } from 'react';
import { MenuItem } from '@blueprintjs/core';
import { Select } from '@blueprintjs/select';

// Local imports
import { CitiesContext, UserContext } from '../../../App';
import Button from '../buttons/secondaryButton';

function CitiesSelector () {
  const [user, setUser] = useContext(UserContext);
  const CITIES = useContext(CitiesContext);

  // To display only the queried items
  function filterCities (query, city) {
    return city
      .name
      .toLowerCase()
      .indexOf(query.toLowerCase()) >= 0;
  }

  // To display each item in the list
  function citiesRenderer (city, { handleClick, modifiers }) {
    if (!modifiers.matchesPredicate) return null;
    return (
      <MenuItem
        selected={modifiers.active}
        key={city.name}
        onClick={handleClick}
        text={city.name}
      />
    )
  }

  return (
    <Select
      activeItem={user.location}
      itemPredicate={filterCities}
      itemRenderer={citiesRenderer}
      items={CITIES}
      leftIcon='locate'
      onItemSelect={city => setUser({
        ...user,
        location: city.name
      })}
    >
      <Button
        text={user.location}
        icon='locate'
      />
    </Select>
  )
}

export default CitiesSelector;