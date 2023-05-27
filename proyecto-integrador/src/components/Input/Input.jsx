import PropTypes from "prop-types";
import { useState } from "react";

const Input = ({ name, label, type = "text", onBlur }) => {
  const [value, setValue] = useState("");

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="input-contenedor">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        id={name}
        onChange={handleInputChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;

Input.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  onBlur: PropTypes.func,
};
