import { MenuItem } from '@blueprintjs/core';
import { ItemRenderer } from '@blueprintjs/select/lib/esm/common/itemRenderer';
import React from 'react';

interface Item {
  name: string;
  index: number;
  latitude: number;
  longitude: number;
}

export function filterer(query: string, item: any) {
  if (item?.name) item = item.name;
  return item.toLowerCase().indexOf(query.toLowerCase()) >= 0;
}

export const renderer: ItemRenderer<Item| any> = (
  item,
  /* iconCheck,  */ { handleClick, modifiers },
) => {
  if (!modifiers.matchesPredicate) return null;
  return (
    <MenuItem
      data-testid={'small-test'}
      key={(item?.name ? item.name : item) as React.Key}
      onClick={handleClick}
      selected={modifiers.active}
      text={(item?.name ? item.name : item) as React.ReactNode}
    />
  );
};

