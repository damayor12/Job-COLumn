// Package imports
import { useContext } from 'react';
import { MenuItem } from '@blueprintjs/core';
import { Select } from '@blueprintjs/select';

// Local imports
import { CitiesContext, UserContext } from '../../../App';
import Button from '../buttons/secondaryButton';

function CitiesSelector () {
  const [userDetails, setUserDetails] = useContext(UserContext);
  const CITIES = useContext(CitiesContext);

  // To display only the queried items
  function filterCities (query, city) {
    return city.name.toLowerCase().indexOf(query.toLowerCase()) >= 0;
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
      activeItem={userDetails[0]}
      itemPredicate={filterCities}
      itemRenderer={citiesRenderer}
      items={CITIES}
      leftIcon='locate'
      onItemSelect={(city) => {
        setUserDetails([
          city.name,
          userDetails[1]
        ])
      }}
    >
      <Button
        text={userDetails[0]}
        icon='locate'
      />
    </Select>
  )
}

export default CitiesSelector;