import { H5, Icon, MaybeElement } from '@blueprintjs/core';
import Sorts from '../../small/input/sorts';
import PrimaryButton from '../../small/buttons/primaryButton';
import SecondaryButton from '../../small/buttons/secondaryButton';
import css from '../../contexts/themes.scss';
import { SortDefinedProps } from '../interfaces';

export const sortDefined: React.FC<SortDefinedProps> = ({
  filterAndSort,
  sortOrder,
  sortOnClick,
}) => {
  return (
    <div className="filter-details">
      <H5 data-testid={'h5-label'}>Sort by</H5>
      <Sorts />
      <SecondaryButton
        icon={<Icon color={css.rose} icon={`sort-${sortOrder}` as unknown as MaybeElement} />}
        onClick={sortOnClick}
      />
      <PrimaryButton
        icon={'filter' as unknown as MaybeElement}
        onClick={filterAndSort}
        text="Lesgo"
      />
    </div>
  );
};
