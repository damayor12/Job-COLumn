import { useGeneralContext } from '../../contexts/contexts';
import GenericSelect from './select';

const SortSelector: React.FC = () => {

  const {
    sort: [sort, setSort],
  } = useGeneralContext();
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

