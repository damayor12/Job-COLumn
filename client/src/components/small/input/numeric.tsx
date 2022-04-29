// Package imports
import { NumericInput } from '@blueprintjs/core';

// Local imports
import GBP from '../GBP/GBP';

interface Props {
  defaultValue: number;
  fill: boolean;
  onValueChange: (value: number)=> void;
  placeholder?: string;
}

const Numeric: React.FC<Props> = ({ defaultValue, fill, onValueChange, placeholder }) => (
  <NumericInput
    defaultValue={defaultValue}
    fill={fill}
    leftIcon={<GBP />}
    majorStepSize={10000}
    min={0}
    onValueChange={onValueChange}
    placeholder={placeholder}
    stepSize={1000}
  />
);

export default Numeric;
