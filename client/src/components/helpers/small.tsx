// Package imports
import { MenuItem } from '@blueprintjs/core';
import { ItemRenderer } from '@blueprintjs/select/lib/esm/common/itemRenderer';
import React from 'react';

interface Item {
  name: string;
  index: number;
  latitude: number;
  longitude: number;
}

// To display only the queried items
export function filterer(query: string, item: Item): boolean {
  // if (item?.name) item = item.name;
  return item.name.toLowerCase().indexOf(query.toLowerCase()) >= 0;
}

// To display each item in the list
export const renderer: ItemRenderer<Item> = (
  item,
  /* iconCheck,  */ { handleClick, modifiers },
) => {
  if (!modifiers.matchesPredicate) return null;
  return (
    <MenuItem
      key={(item?.name ? item.name : item) as React.Key}
      onClick={handleClick}
      selected={modifiers.active}
      text={(item?.name ? item.name : item) as React.ReactNode}
    />
  );
};

// interface DateItem {
//   key: number;
//   label: string;
//   date: Date;
// }

// import { ItemRenderer } from '@blueprintjs/select/lib/esm/common/itemRenderer';

// export const renderItem: ItemRenderer<DateItem> = (item, { handleClick, modifiers, query }) => {
//   if (!modifiers.matchesPredicate) {
//     return null;
//   }
//   return (
//     <MenuItem
//       active={modifiers.active}
//       disabled={modifiers.disabled}
//       key={item.key}
//       onClick={handleClick}
//       text={<Text ellipsize>{highlightText(item.label, query)}</Text>}
//     />
//   );
// };
