// Package imports
import { useContext } from 'react';
import { MultiSelect } from '@blueprintjs/select';

// Local imports
import { CitiesContext, FilterContext } from '../../../App';
import { filterer, renderer } from '../../helpers/small';

function MultipleCitiesSelector ({ defaultValue }) {
  // Contexts
  const CITIES = useContext(CitiesContext);
  const [filters, setFilters] = useContext(FilterContext);

  const { cities } = filters;

  // Multi-select's onItemSelect
  function onItemSelect (city) {
    let newCities = [];

    if (cities.includes(city.name)) newCities = cities
      .filter(selectedCity => selectedCity !== city.name);
    else newCities = cities.concat(city.name).sort();

    setFilters({
      ...filters,
      cities: newCities
    })
  }

  // Multi-select's tagRenderer
  function tagRenderer (city) {
    return <>{city}</>;
  }

  // Multi-select's onRemove
  function onRemove (city) {
    setFilters({
      ...filters,
      cities: cities.filter(selectedCity => selectedCity !== city)
    })
  }

  return (
    <MultiSelect
      activeItem={cities}
      defaultValue={defaultValue}
      fill
      itemPredicate={filterer}
      itemRenderer={renderer}
      items={CITIES}
      onItemSelect={onItemSelect}
      onRemove={onRemove}
      placeholder='Desired City/Cities'
      resetOnSelect
      selectedItems={cities}
      tagRenderer={tagRenderer}
    />
  )
}

export default MultipleCitiesSelector;
