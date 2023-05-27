import { useContext } from "react";
import { AdmissionContext } from "../AdmissionContext";

/**
 *
 * @returns {{ state: import("../admissionReducer").State, dispatcher: object }}
 */
export const useAdmissionContext = () => {
  const { state, dispatcher } = useContext(AdmissionContext);

  if (state === undefined) {
    throw new Error(
      "useAdmissionContext can only be used into AdmissionProvider"
    );
  }

  return { state, dispatcher };
};
