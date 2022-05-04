import { MaybeElement } from '@blueprintjs/core';
import Cities from '../../small/input/cities';
import Numeric from '../../small/input/numeric';
import Button from '../../small/buttons/primaryButton';
import {UserFormProps} from  '../interfaces';


export const userForm: React.FC<UserFormProps> = ({ defaultValue, onValueChange, buttonOnClick }) => {
  return (
    <div className="userForm-container">
      <p>Location:</p>
      <Cities />
      <p>Current salary:</p>
      <Numeric defaultValue={defaultValue} fill={false} onValueChange={onValueChange} />
      <Button onClick={buttonOnClick} text="Start" icon={"key-enter" as unknown as MaybeElement} />
    </div>
  );
};
