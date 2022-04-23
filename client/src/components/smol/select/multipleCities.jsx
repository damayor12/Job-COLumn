// Contexts
import { useContext } from 'react';

// BlueprintJS imports
import { MenuItem } from '@blueprintjs/core';
import { MultiSelect } from '@blueprintjs/select';

// Local component imports
import { CitiesContext, FilterContext } from '../../../App';

// Styles
import './multipleCities.scss';

function MultipleCitiesSelector ({ defaultValue, onChange }) {
  // Contexts and state
  const CITIES = useContext(CitiesContext);
  const [filters, setFilters] = useContext(FilterContext);

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

  return (
    <MultiSelect
      activeItem={filters.cities}
      defaultValue={defaultValue}
      fill
      itemPredicate={filterCities}
      itemRenderer={citiesRenderer}
      items={CITIES}
      // minimal
      onItemSelect={city => {
        if (filters.cities.includes(city.name)) {
          setFilters({
            ...filters,
            cities: filters.cities.filter(selectedCity => {
              return selectedCity !== city.name
            })
          })
        } else setFilters({
          ...filters,
          cities: filters.cities.concat(city.name)
        });
      }}
      placeholder='Desired City/Cities'
      selectedItems={filters.cities}
      tagRenderer={city => <>{city}</>}
    />
  )
}

export default MultipleCitiesSelector;