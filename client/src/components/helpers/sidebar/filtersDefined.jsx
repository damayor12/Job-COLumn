// Package imports
import { H5, Icon, InputGroup } from '@blueprintjs/core';

// Local imports
import { rose } from '../../helpers';
import MultiCity from '../../small/input/multipleCities';
import Numeric from '../../small/input/numeric';

export function filtersDefined (darkMode, {
  keywords,
  keywordsOnChange,
  numericOnChange
} ) {
  return (
    <div>
      <H5 className='bp4-heading' style={{
        color: rose(darkMode)
      }}>
        <Icon icon='filter'/> Filter
      </H5>
      {/* Keywords */}
      <div className='filter-details'>
        <div className='filter-label'>
          Keywords
        </div>
        <InputGroup
          className='filter-value'
          fill
          defaultValue={keywords}
          leftIcon='search'
          onChange={keywordsOnChange}
          placeholder='Keywords'
        />
      </div>
      {/* Locations */}
      <div className='filter-details'>
        <div className='filter-label'>
          Locations
        </div>
        <MultiCity className='filter-value' />
      </div>
      {/* Salary */}
      <div className='filter-details'>
        <div className='filter-label'>
          Salary
        </div>
        <Numeric
          className='filter-value'
          fill={true}
          onValueChange={numericOnChange}
          placeholder='Minimum Salary'
        />
      </div>
    </div>
  );
}