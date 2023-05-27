import { useMutation } from "@tanstack/react-query";
import { useAdmissionContext } from "../../context";
import { savePokemonAdmission } from "../../services/api";

const Detalle = () => {
  const {
    state: { master, pokemon },
  } = useAdmissionContext();

  const { mutate, isLoading, isError } = useMutation({
    mutationFn: (data) => savePokemonAdmission(data),
    onMutate: (data) => {
      alert("Formulario enviado");
      console.log(data);
    },
  });

  return (
    <div className="detalle-formulario">
      <div className="encabezado">
        <h3>Vista Previa de la Solicitud</h3>
      </div>
      <section className="datos-cliente">
        <h4>Datos del Entrenador</h4>
        <div className="fila">
          <p>Nombre: {master.firstname}</p>
          <p>Apellido: {master.lastname}</p>
          <p>Email: {master.email}</p>
        </div>
      </section>
      <section className="datos-cliente">
        <h4>Datos del Pokémon</h4>
        <div className="fila">
          <p>Nombre: {pokemon.name}</p>
          <p>Tipo: {pokemon.type}</p>
          <p>Elemento: {pokemon.element}</p>
          <p>Altura: {pokemon.height}</p>
          <p>Edad: {pokemon.age}</p>
        </div>
      </section>

      <div>
        {isError && (
          <p>
            No hemos podido enviar el formulario, por favor intente nuevamente
          </p>
        )}
        {isLoading && <p>Enviando formulario</p>}
      </div>

      <button
        className="boton-enviar"
        onClick={() => mutate({ master, pokemon })}
      >
        Enviar Solicitud
      </button>
    </div>
  );
};

export default Detalle;
