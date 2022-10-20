// Aqui debemos crear nuestro contexto y nuestro provider.
import { useState, createContext } from "react";

export const FormContext = createContext();

export const FormularioProvider = ({children}) => {
  const [valueGlobalForm, setValueGlobalForm] = useState({})
  return (
    <FormContext.Provider value={{valueGlobalForm, setValueGlobalForm}}>
        {children}
    </FormContext.Provider>
  )
}


