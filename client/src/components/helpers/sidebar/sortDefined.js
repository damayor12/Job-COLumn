// Package imports
import { H5, Icon } from '@blueprintjs/core';

// Local imports
import { rose } from '../index';
import Sorts from '../../small/input/sorts';
import PrimaryButton from '../../small/buttons/primaryButton';
import SecondaryButton from '../../small/buttons/secondaryButton';

export function sortDefined (darkMode, {
  filterAndSort,
  sortOrder,
  sortOnClick
}) {
  return (
    <div className='filter-details'>
        <H5
          className='bp4-heading'
          style={{ color: rose(darkMode) }}>
          Sort by
        </H5>
        <Sorts />
        <SecondaryButton
          icon={<Icon
            color={rose(darkMode)}
            icon={`sort-${sortOrder}`}
          />}
          onClick={sortOnClick}
        />
        <PrimaryButton
          icon='filter'
          onClick={filterAndSort}
          text='Lesgo'
        />
      </div>
  );
}