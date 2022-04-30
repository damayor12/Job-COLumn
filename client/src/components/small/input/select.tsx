// Package imports
import { Select, SelectProps } from '@blueprintjs/select';
import React from 'react';
import Button from '../buttons/secondaryButton';

// Local imports
import { filterer, renderer } from '../../helpers/small';

interface City {
  name: string;
  index: number;
  latitude: number;
  longitude: number;
}

interface Props {
  children?: React.ReactNode;
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
  const CustomSelect = Select.ofType<any>();
  return (
    <Select
      activeItem={text}
      filterable={filterable}
      itemPredicate={filterer}
      itemRenderer={renderer}
      items={items}
      onItemSelect={onItemSelect}
    />
  );
};

// children was not passed in - come back to this later
//leftIcon={icon} was removed from <Select > as it doesn't belong as a property in blueprint js Select
export default GenericSelect;
