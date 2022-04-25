// Package imports
import { MenuItem } from '@blueprintjs/core';

// To display only the queried items
export function filterer (query, item) {
  if (item?.name) item = item.name;
  return item
    .toLowerCase()
    .indexOf(query.toLowerCase()) >= 0;
}

// To display each item in the list
export function renderer (item, /* iconCheck,  */{ handleClick, modifiers }) {
  if (!modifiers.matchesPredicate) return null;
  return (
    <MenuItem
      key={item?.name ? item.name : item}
      onClick={handleClick}
      selected={modifiers.active}
      text={item?.name ? item.name : item}
    />
  )
}
