// eslint-disable-next-line react/prop-types
const CharacterCard = ({ imagen, nombre, especie }) => (
  <div id='tarjeta'>
    <img
      src={imagen}
      alt={nombre}
    />
    <div>
      <h2>{nombre}</h2>
      <h3>{especie}</h3>
    </div>
  </div>
)

export default CharacterCard
