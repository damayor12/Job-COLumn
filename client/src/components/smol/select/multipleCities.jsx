// Package imports
import { useContext, useState } from 'react';
import { Button, MenuItem, Tag } from '@blueprintjs/core';
import { MultiSelect } from '@blueprintjs/select';

// Local imports
import { CitiesContext } from '../../../App';
import SecondaryButton from '../buttons/secondaryButton';

function MultipleCitiesSelector () {
  const CITIES = useContext(CitiesContext);
  const [selectedCities, setSelectedCities] = useState([]);

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
        key={city.name}
        onClick={handleClick}
        selected={modifiers.active}
        text={city.name}
      />
    )
  }

  // To display selected items
  function tagRenderer (city) {
    return (
      <Tag
        interactive
        leftIcon='map-marker'
        minimal
        onRemove={() => {
          if (selectedCities.includes(city)) {
            setSelectedCities(selectedCities.filter(selectedCity => {
              return selectedCity !== city
            }))
          }
        }}
        // TODO add dark mode style
        // TODO add light mode text color
        // Or refactor this to be a component
        // TODO removing a city shouldn't pop up the popover
      >
        {city}
      </Tag>
    );
  }

  return (
    <MultiSelect
      activeItem={CITIES[0]}
      fill
      itemPredicate={filterCities}
      itemRenderer={citiesRenderer}
      items={CITIES}
      // TODO figure out left icon work-around
      // leftIcon='map-marker'
      onItemSelect={city => {
        if (selectedCities.includes(city.name)) {
          setSelectedCities(selectedCities.filter(selectedCity => {
            return selectedCity !== city.name
          }))
        } else setSelectedCities([...selectedCities, city.name]);
      }}
      placeholder='Desired City/Cities'
      selectedItems={selectedCities}
      tagRenderer={tagRenderer}
    />
  )
}

export default MultipleCitiesSelector;