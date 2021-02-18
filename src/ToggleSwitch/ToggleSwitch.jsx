// eslint-disable jsx-a11y/label-has-associated-control
import './ToggleSwitch.scss';
import React from 'react';
import PropTypes from 'prop-types';

export default function ToggleSwitch({
  id, checked, onChange, optionLabels,
}) {
  return (
    <div className="toggle-switch">
      <input
        type="checkbox"
        className="toggle-switch-checkbox"
        name={id}
        id={id}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
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

ToggleSwitch.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.instanceOf(Function).isRequired,
  optionLabels: PropTypes.instanceOf(Array),
};

ToggleSwitch.defaultProps = {
  optionLabels: ['ON', 'OFF'],
};
