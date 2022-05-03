// Package imports
import { Select } from '@blueprintjs/select';
import React from 'react';

// Local imports
import { filterer, renderer } from '../../helpers/small';

interface City {
  name: string;
  index: number;
  latitude: number;
  longitude: number;
}

interface Props {
  children?: any;
  filterable?: boolean;
  icon?: string;
  items: any[];
  onItemSelect: (option: any) => void;
  text?: City;
  activeItem?: string;

  leftIcon?: string;
}

const GenericSelect: React.FC<Props> = ({
  children,
  filterable,
  text,
  activeItem,
  icon,
  items,
  onItemSelect,
  //cant find reference anywhere
}) => {
  const CustomSelect = Select.ofType<any>();

  // console.log('text', text, 'filterable', filterable, 'filterer',filterer, 'renderer', renderer, 'onItemSelect', onItemSelect)

  console.log('renderer', renderer);

  return (
    <CustomSelect
      data-testid="numeric"
      fill
      activeItem={activeItem}
      filterable={filterable}
      itemPredicate={filterer}
      itemRenderer={renderer}
      items={items}
      onItemSelect={onItemSelect}
    />
    //   {children || <button>click</button>}
    // </CustomSelect>
  );
};

/**
     * 
     * <Select
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
     */

// children was not passed in - come back to this later
//leftIcon={icon} was removed from <Select > as it doesn't belong as a property in blueprint js Select
export default GenericSelect;
