import React from "react";

import CrossIcon from "../../icons/cross";
import ToolTip from "../tooltip/Tooltip";
import StyledRadioButtons from "./RadioButtons.style";

const RadioButtons = ({
  options,
  value,
  disabled,
  name,
  onChange,
  className
}) => (
  <StyledRadioButtons role="group" className={className}>
    {options.map(option => {
      const id = option.id || option.name;

      return (
        <div className="radioButtons__option" key={id}>
          <label htmlFor={id} key={id}>
            <input
              type="radio"
              id={id}
              name={name}
              value={id}
              defaultChecked={id === value}
              disabled={option.disabled || disabled}
              onChange={e => onChange(e.target.value)}
            />
            <h4>
              <CrossIcon />

              <span>{option.name}</span>

              {option.description && (
                <ToolTip description={option.description} disabled={disabled} />
              )}
            </h4>
          </label>
        </div>
      );
    })}
  </StyledRadioButtons>
);

export default RadioButtons;
