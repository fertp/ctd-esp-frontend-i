import React, { useContext, useState } from "react";
import { AdmissionContext } from "../../context/ContextoFormulario";

const Input = ({ name, label, type = "text", pokemon }) => {
  // Aqui deberíamos acceder al estado global para poder obtener los datos
  // del formulario y una manera de actualizar los mismos.
  const { dispatch } = useContext(AdmissionContext);

  // También, utilizaremos un estado local para manejar el estado del input.
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onBlur = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    // console.log({ name, value });

    const actionType = pokemon ? "ACTUALIZAR_POKEMON" : "ACTUALIZAR_ENTRENADOR";

    dispatch({ type: actionType, payload: { name, value } });
    // Aqui deberíamos actualizar el estado global con los datos de
    // cada input.
    // TIP: Podemos utilizar el nombre de cada input para guardar
    // los datos en el estado global usando una notación de { clave: valor }
  };

  return (
    <div className="input-contenedor">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        id={name}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;
