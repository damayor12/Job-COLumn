// Package imports
import { Select } from '@blueprintjs/select';

// Local imports
import { filterer, renderer } from '../../helpers/small';

function GenericSelect ({
  children,
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
      {children}
    </Select>
  )
}

export default GenericSelect;