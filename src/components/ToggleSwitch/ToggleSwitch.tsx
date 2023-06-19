// eslint-disable jsx-a11y/label-has-associated-control
import './ToggleSwitch.scss';
import { FC, SyntheticEvent } from 'react';

interface ToggleSwitchProps {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  optionLabels?: Array<string>;
}

const ToggleSwitch: FC<ToggleSwitchProps> = ({
  id, checked, onChange, optionLabels = ['ON', 'OFF'],
}) => { 
  const changeHandler = (e: SyntheticEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement
    onChange(target.checked)
}

  return (
    <div className="toggle-switch">
      <input
        type="checkbox"
        className="toggle-switch-checkbox"
        name={id}
        id={id}
        checked={checked}
        onChange={changeHandler}
      />
      {id ? (
        <label className="toggle-switch-label" htmlFor={id}>
          <span
            className="toggle-switch-inner"
            data-yes={optionLabels[0]}
            data-no={optionLabels[1]}
          />
          <span
            className="toggle-switch-switch"
          />
        </label>
      ) : null}

    </div>
  );
}

export default ToggleSwitch;