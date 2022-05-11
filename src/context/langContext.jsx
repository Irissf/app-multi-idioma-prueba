import React from 'react'

//El contexto será el espacio global
const langContext = React.createContext();

//creamos un proveedor, encierra la aplicación y le provee el contexto
const LangProvider = ({children}) => {
    return(
        <langContext.Provider value={{hola: 'hola soy Iris'}}>
            {/* Children son las propiedades que le pasamos */}
            {children} 
        </langContext.Provider>
    );
};

//exportamos el contexto y el proveedor
export {LangProvider,langContext};