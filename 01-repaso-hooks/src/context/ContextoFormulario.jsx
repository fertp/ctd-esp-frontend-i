// Aqui debemos crear nuestro contexto y nuestro provider.

import { createContext, useReducer, useState } from "react";

export const AdmissionContext = createContext({});

const initialState = {
  entrenador: {
    nombre: "",
    apellido: "",
    email: "",
  },
  pokemon: {
    nombre: "",
    tipo: "",
    elemento: "",
    altura: "",
    edad: "",
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ACTUALIZAR_ENTRENADOR":
      return {
        ...state,
        entrenador: {
          ...state.entrenador,
          [action.payload.name]: action.payload.value,
        },
      };
    case "ACTUALIZAR_POKEMON":
      return {
        ...state,
        pokemon: {
          ...state.pokemon,
          [action.payload.name]: action.payload.value,
        },
      };
    default:
      throw new Error(`Unnow action type ${action.type}`);
  }
};

export const AdmissionProvider = ({ children }) => {
  const [formData, dispatch] = useReducer(reducer, initialState);

  // const [formData, setFormData] = useState({
  //   entrenador: {
  //     nombre: "",
  //     apellido: "",
  //     email: "",
  //   },
  //   pokemon: {
  //     nombre: "",
  //     tipo: "",
  //     elemento: "",
  //     altura: "",
  //     edad: "",
  //   },
  // });

  // const handleInputBlur = ({ name, value }) => {
  //   setFormData((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  return (
    <AdmissionContext.Provider value={{ formData, dispatch }}>
      {children}
    </AdmissionContext.Provider>
  );
};
