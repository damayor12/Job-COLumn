// Package imports
import { useContext } from 'react';
import { Select } from '@blueprintjs/select';

// Local imports
import { SortContext } from '../../../App';
import Button from '../buttons/secondaryButton';
import { renderer } from './helpers';

function SortSelector () {
  // Contexts
  const [sort, setSort] = useContext(SortContext);

  const { category } = sort;
  const options = [
    'Location',
    'Salary',
    'Expiry Date',
    'Posted Date',
    'Job Title'
  ];

  // Select's onItemSelect
  function onItemSelect (option) {
    setSort({
      ...sort,
      category: option
    });
  }

  return (
    <Select
      activeItem={category}
      filterable={false}
      itemRenderer={renderer}
      items={options}
      leftIcon='select'
      onItemSelect={onItemSelect}
    >
      <Button
        text={category}
        icon='select'
      />
    </Select>
  )
}

export default SortSelector;
