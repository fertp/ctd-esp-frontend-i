export const getPokemonTypesNames = () => {
  return fetch("https://pokeapi.co/api/v2/type/")
    .then((resp) => resp.json())
    .then((data) => data?.results?.map((type) => type.name))
    .catch((err) => console.log(err));
};

export const getPokemonSpeciesNames = () => {
  return fetch("https://pokeapi.co/api/v2/pokemon-species/")
    .then((resp) => resp.json())
    .then((data) => data?.results?.map((specie) => specie.name))
    .catch((err) => console.log(err));
};

export const savePokemonAdmission = (data) => {
  return fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((resp) => resp.json());
};
