// Package imports
import { FormGroup, MaybeElement, FormGroupProps } from '@blueprintjs/core';

// Local imports
import Cities from '../../small/input/cities';
import Numeric from '../../small/input/numeric';
import Button from '../../small/buttons/primaryButton';
import ToggleDarkMode from '../../small/buttons/toggleDarkMode';

interface Props extends FormGroupProps {
  defaultValue: number;
  onValueChange: (value: number) => void;
  buttonOnClick: () => void;

}

export const userForm: React.FC<Props> = ({ defaultValue, onValueChange, buttonOnClick }) => {
  return (
    <>
    
      <Cities />
       <div id="user-salary">
        <Numeric defaultValue={defaultValue} fill={false} onValueChange={onValueChange} />
      </div>
      <ToggleDarkMode />
      <Button onClick={buttonOnClick} text="Start" icon={"key-enter" as unknown as MaybeElement} />
    </>
  );
};

// FormGroup taken out but will implement later - it is just inline style
