import { H5, Icon, InputGroup } from '@blueprintjs/core';
import MultiCity from '../../small/input/multipleCities';
import Numeric from '../../small/input/numeric';
import { FilterProps } from '../interfaces';

export const filtersDefined: React.FC<FilterProps> = ({
  keywords,
  keywordsOnChange,
  numericOnChange,
}) => {
  return (
    <div>
      <H5>
        <Icon icon="filter" /> Filter
      </H5>
      <div className="filter-details">
        <div className="filter-label">Keywords</div>
        <InputGroup
          className="filter-value"
          fill
          defaultValue={keywords}
          leftIcon="search"
          onChange={keywordsOnChange}
          placeholder="Keywords"
        />
      </div>
      <div className="filter-details">
        <div className="filter-label">Locations</div>
        <MultiCity className="filter-value" />
      </div>
      <div className="filter-details">
        <div className="filter-label">Salary</div>
        <Numeric
          className="filter-value"
          fill={true}
          onValueChange={numericOnChange}
          placeholder="Minimum Salary"
        />
      </div>
    </div>
  );
};
