import PropTypes from "prop-types";

const Select = ({ name, label, disabled, options, onBlur }) => {
  // const { data, isLoading, isError } = useQuery({
  //   queryKey: ["pokemon-types"],
  //   queryFn: getPokemonTypes,
  // });

  const handleInputChange = (e) => {
    onBlur(e);
  };

  return (
    <div className="input-contenedor">
      <label htmlFor={name}>{label}</label>

      <select
        name={name}
        id={name}
        onChange={handleInputChange}
        // onBlur={onBlur}
        disabled={disabled}
      >
        {options?.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;

Select.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.string),
  onBlur: PropTypes.func,
};
