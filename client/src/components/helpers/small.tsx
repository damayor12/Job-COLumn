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
// export function filtererString(query: string, item: string): boolean {
//   // if (item?.name) item = item.name;
//   return item.toLowerCase().indexOf(query.toLowerCase()) >= 0;
// }

// To display only the queried items
// export const filtererItem: ItemPredicate<Item> = (query: string, item: Item) => {
//   // if (item?.name) item = item.name;
//   return item.name.toLowerCase().indexOf(query.toLowerCase()) >= 0;
// };

// export const filtererString: ItemPredicate<string> = (query, item) => {
//   // if (item?.name) item = item.name;
//   return item.toLowerCase().indexOf(query.toLowerCase()) >= 0;
// };

// To display each item in the list
// export const rendererItem = (item: Item, /* iconCheck,  */ { handleClick, modifiers }: any) => {
//   if (!modifiers.matchesPredicate) return null;
//   return (
//     <MenuItem
//       key={(item?.name ? item.name : item) as React.Key}
//       onClick={handleClick}
//       selected={modifiers.active}
//       text={(item?.name ? item.name : item) as React.ReactNode}
//     />
//   );
// };

// export const rendererString = (item: string, /* iconCheck,  */ { handleClick, modifiers }: any) => {
//   if (!modifiers.matchesPredicate) return null;
//   return (
//     <MenuItem
//       key={item as React.Key}
//       onClick={handleClick}
//       selected={modifiers.active}
//       text={item as React.ReactNode}
//     />
//   );
// };

export function filterer(query: string, item: any) {
  if (item?.name) item = item.name;
  return item.toLowerCase().indexOf(query.toLowerCase()) >= 0;
}

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

//  const renderString = (item: string, { handleClick }: any) => (
//     <MenuItem
//       key={item}
//       text={item}
//       icon={isItemSelected(selectedItems, item) ? 'tick' : 'blank'}
//       onClick={handleClick}
//       shouldDismissPopover={false}
//     />
//   );

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
