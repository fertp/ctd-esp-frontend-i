import { Link } from "react-router-dom";
import pokebola from "../../assets/pokebola.png";
import entrenador from "../../assets/entrenador.png";
import pikachu from "../../assets/pikachu.png";
import Input from "../Input/Input";
import Detalle from "./Detalle";
import { useAdmissionContext } from "../../context";
import Select from "../Select/Select";

const Formulario = () => {
  const { dispatcher } = useAdmissionContext();

  const handleMasterInputBlur = (e) => {
    const { name, value } = e.target;
    console.log({ name, value });
    dispatcher.updateMasterField({ name, value });
  };

  const handlePokemonInputBlur = (e) => {
    const { name, value } = e.target;
    dispatcher.updatePokemonField({ name, value });
  };

  return (
    <>
      <header className="form-header">
        <div>
          <img src={pokebola} alt="pokebola" />
          <h2>Centro Pokemon de Ash</h2>
        </div>
        <Link className="volver" to="/">
          Home
        </Link>
      </header>
      <div className="formulario-ingreso">
        <h3>Solicitud de atención</h3>
        <p>
          Por favor, completa el formulario para que podamos atender a tu
          pokémon
        </p>
        <div className="cuerpo-formulario">
          <div className="inputs">
            <div>
              <p className="nombre-seccion">
                <img src={entrenador} alt="entrenador" />
                <span>ENTRENADOR</span>
              </p>
              <Input
                name="firstname"
                label="Nombre"
                onBlur={handleMasterInputBlur}
              />
              <Input
                name="lastname"
                label="Apellido"
                onBlur={handleMasterInputBlur}
              />
              <Input
                name="email"
                label="Email"
                type="email"
                onBlur={handleMasterInputBlur}
              />
            </div>

            <div>
              <p className="nombre-seccion">
                <img src={pikachu} alt="pikachu" />
                <span>POKEMON</span>
              </p>
              <Input
                name="name"
                label="Nombre"
                onBlur={handlePokemonInputBlur}
              />
              <Select
                name="type"
                label="Tipo"
                onBlur={handlePokemonInputBlur}
              />
              <Input
                name="element"
                label="Elemento"
                onBlur={handlePokemonInputBlur}
              />
              <Input
                name="height"
                label="Altura"
                onBlur={handlePokemonInputBlur}
              />
              <Input name="age" label="Edad" onBlur={handlePokemonInputBlur} />
            </div>
          </div>
          <Detalle />
        </div>
      </div>
    </>
  );
};

export default Formulario;
