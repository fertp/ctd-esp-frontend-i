/**
 * @typedef {{ type: string, payload: { name: string, value: string } }} Action
 *
 * @typedef {{ firstname: string, lastname: string, email: string }} Master
 *
 * @typedef {{ name: string, type: string, element: string, height: string, age: string }} Pokemon
 *
 * @typedef {{ master: Master, pokemon: Pokemon }} State
 */

/**
 *
 * @param {State} state
 * @param {Action} action
 * @returns {State}
 */
export const admissionReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_MASTER":
      return {
        ...state,
        master: {
          ...state.master,
          [action.payload.name]: action.payload.value,
        },
      };
    case "UPDATE_POKEMON":
      return {
        ...state,
        pokemon: {
          ...state.pokemon,
          [action.payload.name]: action.payload.value,
        },
      };
    default:
      throw new Error(`Unknown type action: ${action.type}`);
  }
};
