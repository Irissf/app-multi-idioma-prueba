import React from 'react';
import Header from './components/Header';
import Grid from './components/Grid';
import './styles.css';

import { IntlProvider,FormattedMessage,FormattedDate } from 'react-intl';
import MenssajesIngles from './languajes/en-US.json'
import { langContext } from './context/langContext';

const App = () => {
	console.log(langContext);
	return (
		//Encerramos toda la aplicacion en IntlProvider para poder traducirla
		<IntlProvider locale="en-US" messages={MenssajesIngles}>
			<div>
				<Header />

				<div className="main">
					<h1 className="titulo">
						{/* formateo de mensajes */}
						<FormattedMessage id='app.wellcome'  
							defaultMessage='Wellcome'
							values={
								{
									name:'Irissf' //le pasamos valor al json
								}
							}
						/>
					</h1>
					<p className="subtitulo"></p>
						{/* formateos de fechas */}
						<FormattedDate 
							value={Date.now()}
							year="numeric"
							month='long'
							day='numeric'
							weekday='long'
						/>
					<Grid />
				</div>
			</div>
		</IntlProvider>
	);
}
 
export default App;