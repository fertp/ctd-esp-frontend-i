import React, { useContext } from "react";
import { AdmissionContext } from "../../context/ContextoFormulario";

const Detalle = () => {
  // Aqui deberíamos obtener los datos del formulario para poder mostrarlo en
  // la vista previa.
  const { formData } = useContext(AdmissionContext);
  const { entrenador, pokemon } = formData;

  return (
    <div className="detalle-formulario">
      <div className="encabezado">
        <h3>Vista Previa de la Solicitud</h3>
      </div>
      <section className="datos-cliente">
        <h4>Datos del Entrenador</h4>
        <div className="fila">
          <p>Nombre: {entrenador.nombre}</p>
          <p>Apellido: {entrenador.apellido}</p>
          <p>Email: {entrenador.email}</p>
        </div>
      </section>
      <section className="datos-cliente">
        <h4>Datos del Pokémon</h4>
        <div className="fila">
          <p>Nombre: {pokemon.nombre}</p>
        </div>
        <div className="fila">
          <p>Tipo: {pokemon.tipo}</p>
        </div>
        <div className="fila">
          <p>Elemento: {pokemon.elemento}</p>
        </div>
        <div className="fila">
          <p>Altura: {pokemon.altura}</p>
        </div>
        <div className="fila">
          <p>Edad: {pokemon.edad}</p>
        </div>
      </section>
      <button
        className="boton-enviar"
        onClick={() => alert("Solicitud enviada :)")}
      >
        Enviar Solicitud
      </button>
    </div>
  );
};

export default Detalle;
