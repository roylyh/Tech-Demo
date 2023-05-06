import { createContext, useReducer } from "react";
import darkModeReducer from "./darkModeReducer";

const INITIAL_STATE = {
  darkMode: false,
};

export const DarkModeContext = createContext();

const DarkModeContextProvide = (props) => {
  const [state,dispatch] = useReducer(darkModeReducer,INITIAL_STATE);

  return <DarkModeContext.Provider value={{state, dispatch}}>
    {props.children}
  </DarkModeContext.Provider>
}

export default DarkModeContextProvide;