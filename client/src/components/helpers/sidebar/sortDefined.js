// Package imports
import { H5, Icon } from '@blueprintjs/core';

// Local imports
import Sorts from '../../small/input/sorts';
import PrimaryButton from '../../small/buttons/primaryButton';
import SecondaryButton from '../../small/buttons/secondaryButton';

// Styling
import css from '../../contexts/themes.scss';

export function sortDefined (darkMode, {
  filterAndSort,
  sortOrder,
  sortOnClick
}) {
  return (
    <div className='filter-details'>
        <H5>Sort by</H5>
        <Sorts />
        <SecondaryButton
          icon={<Icon
            color={css.rose}
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