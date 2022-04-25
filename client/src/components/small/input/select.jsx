// Package imports
import { Select } from '@blueprintjs/select';

// Local imports
import { renderer, filterer } from './helpers';

function GenericSelect ({
  contents,
  filterable,
  icon,
  items,
  onItemSelect,
  text
}) {
  return (
    <Select
      activeItem={text}
      filterable={filterable}
      itemPredicate={filterer}
      itemRenderer={renderer}
      items={items}
      leftIcon={icon}
      onItemSelect={onItemSelect}
    >
      {contents}
    </Select>
  )
}

export default GenericSelect;