// Package imports
import { H5, Icon, InputGroup } from '@blueprintjs/core';

// Local imports
import MultiCity from '../../small/input/multipleCities';
import Numeric from '../../small/input/numeric';

interface Props {
  keywords: string;
  keywordsOnChange: React.ChangeEventHandler<HTMLInputElement>;
  numericOnChange: (value: number) => void;
}

export const filtersDefined: React.FC<Props> = ({
  keywords,
  keywordsOnChange,
  numericOnChange,
}) => {
  return (
    <div>
      <H5>
        <Icon icon="filter" /> Filter
      </H5>
      {/* Keywords */}
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
      {/* Locations */}
      <div className="filter-details">
        <div className="filter-label">Locations</div>
        <MultiCity className="filter-value" />
      </div>
      {/* Salary */}
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
