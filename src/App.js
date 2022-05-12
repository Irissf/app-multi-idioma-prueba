import React from 'react';
import Header from './components/Header';
import Grid from './components/Grid';
import './styles.css';

import { FormattedMessage,FormattedDate } from 'react-intl';


const App = () => {

	return (
	
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
	
	);
}
 
export default App;