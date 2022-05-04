import { useSortContext } from '../../contexts/sort';
import GenericSelect from './select';

const SortSelector: React.FC = () => {

  const [sort, setSort] = useSortContext();
  const { category } = sort;

  const options = ['Location', 'Salary', 'Expiry Date', 'Posted Date', 'Job Title'];

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

