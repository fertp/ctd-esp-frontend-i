import axios from "axios";

export const getPokemonTypes = () => {
  return fetch("https://pokeapi.co/api/v2/type/")
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
};

export const savePokemonAdmission = (data) => {
  return axios.post("https://jsonplaceholder.typicode.com/todos", data);
  // return fetch("https://jsonplaceholder.typicode.com/todos", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(data),
  // }).then((resp) => resp.json());
};
