// BlueprintJS imports
import { NumericInput } from '@blueprintjs/core';

// Local component imports
import GBP from '../GBP/GBP';

function Numeric ({ defaultValue, fill, onValueChange, placeholder }) {
  return (
    <NumericInput
      defaultValue={defaultValue}
      fill={fill}
      leftIcon={<GBP />}
      majorStepSize='10000'
      min={0}
      onValueChange={onValueChange}
      placeholder={placeholder}
      stepSize='1000'
    />
  )
}

export default Numeric;