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
  children: React.ReactNode;
  filterable?: boolean;
  icon?: string;
  items: City[];
  onItemSelect: (city: City) => void;
  text?: City;
}

const GenericSelect: React.FC<Props> = ({
  children,
  filterable,
  icon,
  items,
  onItemSelect,
  text,
}) => {
  return (
    <Select
      activeItem={text}
      filterable={filterable}
      itemPredicate={filterer}
      itemRenderer={renderer}
      items={items}
      onItemSelect={onItemSelect}
    >
      {children}
    </Select>
  );
};

//leftIcon={icon} was removed from <Select > as it doesn't belong as a property in blueprint js Select
export default GenericSelect;
