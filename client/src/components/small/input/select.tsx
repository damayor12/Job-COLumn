import { Select } from '@blueprintjs/select';
import React from 'react';
import { filterer, renderer } from '../../helpers/small';
import { City } from '../../helpers/interfaces';


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

  return (
    <div data-testid="select">
    <CustomSelect
      data-testid="select"
      fill
      activeItem={activeItem}
      filterable={filterable}
      itemPredicate={filterer}
      itemRenderer={renderer}
      items={items}
      onItemSelect={onItemSelect}
    />
    </div>
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
