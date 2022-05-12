import React, {useState} from 'react'

import MensajesIngles from './../languajes/en-US.json'
import MensajesEspanol from './../languajes/es-ES.json'
import { IntlProvider } from 'react-intl';

//El contexto será el espacio global
const langContext = React.createContext();


//esto es un componente
//creamos un proveedor, encierra la aplicación y le provee el contexto
const LangProvider = ({children}) => {

    //guardamos el valor de localStorage
    let localePorDefecto;
	let mensajesPorDefecto;
	const lang = localStorage.getItem('lang');

    //si tenemos guardado un idioma en navegador
    if(lang){
		localePorDefecto = lang

		if(lang === 'es-ES'){
			mensajesPorDefecto = MensajesEspanol;
		} else if(lang === 'en-US'){
			mensajesPorDefecto = MensajesIngles
		} else {
			localePorDefecto = 'en-US'
			mensajesPorDefecto = MensajesIngles
		}
	}

    const [mensajes, establecerMensajes] = useState(mensajesPorDefecto);
    const [locale, establecerLocale] = useState(localePorDefecto);

    //funición para toda la web de cambiar el idioma
    const establecerLenguaje = (lenguaje) => {
        
        switch (lenguaje) {
            case 'es-ES':
                establecerMensajes(MensajesEspanol);
                establecerLocale('es-ES');
                //para que se guarde en navegador el idioma elegido
                localStorage.setItem('lang', 'es-ES')
                break;
            case 'en-EN':
                establecerMensajes(MensajesIngles);
                establecerLocale('en-US');
                localStorage.setItem('lang', 'en-EN')
                break;
            default:
                //el por defecto
                establecerMensajes(MensajesIngles);
                establecerLocale('en-US');
                localStorage.setItem('lang', 'en-EN')
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