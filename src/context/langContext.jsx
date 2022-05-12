import React, {useState} from 'react'

import MensajesIngles from './../languajes/en-US.json'
import MensajesEspanol from './../languajes/es-ES.json'
import { IntlProvider } from 'react-intl';

//El contexto será el espacio global
const langContext = React.createContext();


//esto es un componente
//creamos un proveedor, encierra la aplicación y le provee el contexto
const LangProvider = ({children}) => {

    const [mensajes, establecerMensajes] = useState(MensajesIngles);
    const [locale, establecerLocale] = useState('en-US');

    //funición para toda la web de cambiar el idioma
    const establecerLenguaje = (lenguaje) => {
        
        switch (lenguaje) {
            case 'es-ES':
                establecerMensajes(MensajesEspanol);
                establecerLocale('es-ES');
                break;
            case 'en-EN':
                establecerMensajes(MensajesIngles);
                establecerLocale('en-US');
                break;
            default:
                //el por defecto
                establecerMensajes(MensajesIngles);
                establecerLocale('en-US');
                break;
        }
    }


    return (
		<langContext.Provider value={{establecerLenguaje: establecerLenguaje}}>
            {/* Encerramos toda la aplicacion en IntlProvider para poder traducirla */}
			<IntlProvider locale={locale} messages={mensajes}>
                {/* Children son las propiedades que le pasamos */}
                {children}
			</IntlProvider>
		</langContext.Provider>
	);
};

//exportamos el contexto y el proveedor
export {LangProvider,langContext};