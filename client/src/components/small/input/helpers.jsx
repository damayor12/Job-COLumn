// Package imports
import { MenuItem } from '@blueprintjs/core';

// To display only the queried items
export function filterer (query, item) {
  return item
    .name
    .toLowerCase()
    .indexOf(query.toLowerCase()) >= 0;
}

// To display each item in the list
export function renderer (item, /* iconCheck,  */{ handleClick, modifiers }) {
  if (!modifiers.matchesPredicate) return null;
  return (
    <MenuItem
      // TODO add tick icons to cities selector
      // https://github.com/palantir/blueprint/blob/develop/packages/docs-app/src/examples/select-examples/multiSelectExample.tsx
      // icon={iconCheck ? 'tick' : 'blank' }
      key={item?.name ? item.name : item}
      onClick={handleClick}
      selected={modifiers.active}
      text={item?.name ? item.name : item}
    />
  )
}
