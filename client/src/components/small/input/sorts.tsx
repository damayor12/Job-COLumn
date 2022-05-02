// Local imports
import { useSortContext } from '../../contexts/sort';
import Button from '../buttons/secondaryButton';
import GenericSelect from './select';
import { MaybeElement } from '@blueprintjs/core';

const SortSelector: React.FC = () => {
  // Contexts
  const [sort, setSort] = useSortContext();
  const { category } = sort;

  const options = ['Location', 'Salary', 'Expiry Date', 'Posted Date', 'Job Title'];

  // const CustomSelect = Select.ofType<any>();

  // Select's onItemSelect
  function onItemSelect(option: any): void {
    setSort({
      ...sort,
      category: option,
    });
  }

  return (
    <GenericSelect
      activeItem={category}
      filterable={false}
      items={options}
      leftIcon="select"
      onItemSelect={onItemSelect}
    />
  );
};

export default SortSelector;

{
  /* <Button text={category} icon={"select" as unknown as MaybeElement} /> */
}
{
  /* </GenericSelect> */
}
