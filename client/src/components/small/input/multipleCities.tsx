import { MultiSelect } from '@blueprintjs/select';
import { useFilterContext } from '../../contexts/filter';
import { filterer, renderer } from '../../helpers/small';
import CITIES from '../../helpers/cities.json';
import { City } from '../../helpers/interfaces';

interface Props {
  className?: string;
}

const MultipleCitiesSelector: React.FC<Props> = () => {

 const MultiSelectNew = MultiSelect.ofType<any>();

  const [filters, setFilters] = useFilterContext();
  const { cities } = filters;

  function onItemSelect (city: City) {
    let newCities = [];

    if (cities.includes(city.name)) newCities = cities
      .filter(selectedCity => selectedCity !== city.name);
    else newCities = cities.concat(city.name).sort();

    setFilters({
      ...filters,
      cities: newCities
    })
  }

  function tagRenderer (city: string) {
    return <>{city}</>;
  }

  function onRemove (city: string) { 
    setFilters({
      ...filters,
      cities: cities.filter(selectedCity => selectedCity !== city)
    })
  }

  
  return (
    <MultiSelectNew
      activeItem={cities}
      data-testid='multiple-cities' 
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


// const filterItems: ItemPredicate<string> = (query, source) => {
//     return source.toLowerCase().indexOf(query.toLowerCase()) >= 0;
//   };

//   return (
//     <CustomSelect
//       items={items.length > 0 ? items : []}
//       tagRenderer={item => item}
//       tagInputProps={{
//         onRemove: onRemoveTag as (value: React.ReactNode, index: number) => void
//       }}
//       itemRenderer={renderString}
//       itemPredicate={filterItems}
//       onItemSelect={onItemSelect}
//       resetOnSelect={true}
//       selectedItems={selectedItems}
//       fill={true}
//       noResults={
//         <MenuItem disabled={true} text="No items for the selected source." />
//       }
//     />
//   );
