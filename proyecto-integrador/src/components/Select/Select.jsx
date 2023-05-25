import { useQuery } from "@tanstack/react-query";
import PropTypes from "prop-types";
import { getPokemonTypes } from "../../services/api";

const Select = ({ name, label, onBlur }) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["pokemon-types"],
    queryFn: getPokemonTypes,
  });

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
        disabled={isError || isLoading}
      >
        {data?.results?.map((type) => (
          <option key={type.name} value={type.name}>
            {type.name}
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
  onBlur: PropTypes.func,
};
