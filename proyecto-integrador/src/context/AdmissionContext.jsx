import PropTypes from "prop-types";
import { createContext, useReducer } from "react";
import { admissionReducer } from "./admissionReducer";

const initialState = {
  master: {
    firstname: "",
    lastname: "",
    email: "",
  },
  pokemon: {
    name: "",
    type: "",
    element: "",
    height: "",
    age: "",
  },
};

export const AdmissionContext = createContext({});

export const AdmissionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(admissionReducer, initialState);

  /**
   * @todo Type dispatcher
   */
  const dispatcher = {
    updateMasterField: ({ name, value }) => {
      dispatch({ type: "UPDATE_MASTER", payload: { name, value } });
    },
    updatePokemonField: ({ name, value }) => {
      dispatch({ type: "UPDATE_POKEMON", payload: { name, value } });
    },
  };

  return (
    <AdmissionContext.Provider value={{ state, dispatcher }}>
      {children}
    </AdmissionContext.Provider>
  );
};

AdmissionProvider.propTypes = {
  children: PropTypes.node,
};
