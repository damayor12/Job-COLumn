// Package imports
import { useContext } from 'react';
import { MenuItem } from '@blueprintjs/core';
import { Select } from '@blueprintjs/select';

// Local imports
import { SortContext } from '../../../App';
import Button from '../buttons/secondaryButton';

function SortSelector () {
  const options = [
    'Location',
    'Salary',
    'Expiry Date',
    'Title'
  ];
  const [sort, setSort] = useContext(SortContext);

  // To display each item in the list
  function renderer (option, { handleClick, modifiers }) {
    if (!modifiers.matchesPredicate) return null;
    return (
      <MenuItem
        selected={modifiers.active}
        key={option}
        onClick={handleClick}
        text={option}
      />
    )
  }

  return (
    <Select
      activeItem={sort[0]}
      filterable='false'
      itemRenderer={renderer}
      items={options}
      leftIcon='select'
      onItemSelect={option => {
        setSort([
          option,
          sort[1]
        ])
      }}
    >
      <Button
        text={sort[0]}
        icon='select'
      />
    </Select>
  )
}

export default SortSelector;