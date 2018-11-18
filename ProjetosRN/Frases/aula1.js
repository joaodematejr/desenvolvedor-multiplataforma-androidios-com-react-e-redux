/** @format */
import React from 'react';
import { AppRegistry, Text } from 'react-native';
import { name as appName } from './app.json';
//ESTILOS
const Estilos = {
    estiloTexto: {
        fontSize: 30,
        backgroundColor: '#08509B',
        height: 80,
        //width: 300,
    }
};
//CRIAR COMPONENTE
const App = () => {
    return (
        <Text style={Estilos.estiloTexto} >Frases do Dia</Text>
    );
};


AppRegistry.registerComponent(appName, () => App);
