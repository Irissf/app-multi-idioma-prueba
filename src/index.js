import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router/Router';
import {LangProvider} from './context/langContext'

//https://www.youtube.com/watch?v=OueflnXmo1U tutorial

ReactDOM.render(
    
    //el proveedor debe encerrar toda la aplicación
    <LangProvider>
        <Router />
    </LangProvider>
, document.getElementById('root'));