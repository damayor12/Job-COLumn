// Package imports
import { H5, Icon, MaybeElement } from '@blueprintjs/core';

// Local imports
import Sorts from '../../small/input/sorts';
import PrimaryButton from '../../small/buttons/primaryButton';
import SecondaryButton from '../../small/buttons/secondaryButton';

// Styling
import css from '../../contexts/themes.scss';

interface Props {
  filterAndSort: (event: React.MouseEvent<HTMLElement>) => void;
  sortOrder: string;
  sortOnClick: (event: React.MouseEvent<HTMLElement>) => void;
}

export const sortDefined : React.FC<Props> = ({
  filterAndSort,
  sortOrder,
  sortOnClick
}) => {
  return (
    <div className='filter-details'>
        <H5>Sort by</H5>
        <Sorts />
        <SecondaryButton
          icon={<Icon
            color={css.rose}
            icon={`sort-${sortOrder}` as unknown as MaybeElement}
          />}
          onClick={sortOnClick}
        />
        <PrimaryButton
          icon={'filter' as unknown as MaybeElement}
          onClick={filterAndSort}
          text='Lesgo'
        />
      </div>
  );
}