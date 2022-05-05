import { Select } from '@blueprintjs/select';
import React from 'react';
import { filterer, renderer } from '../../helpers/small';
import { City } from '../../helpers/interfaces';


interface Props {
  children?: React.ReactNode;
  filterable?: boolean;
  icon?: string;
  items: any[];
  onItemSelect: (option: City) => void;
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
}) => {

  return (
    <div data-testid="select" style={{position: 'relative'}}>
      {/*@ts-ignore*/}
    <Select
      activeItem={text}
      filterable={filterable}
      itemPredicate={filterer}
      itemRenderer={renderer}
      items={items}
      fill={true}
      leftIcon={icon}
      initialContent={null}
      onItemSelect={onItemSelect}
    >
        {children}
      </Select>
      
    </div>
   
  );
};

export default GenericSelect;
