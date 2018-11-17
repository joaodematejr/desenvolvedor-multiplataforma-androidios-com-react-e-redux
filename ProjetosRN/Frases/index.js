/** @format */
import React from 'react';
import { AppRegistry, Text } from 'react-native';
import { name as appName } from './app.json';

const Estilos = {
    estiloTexto: {
        fontSize: 50
    }
};
const App = () => {
    return (
        <Text style={Estilos.estiloTexto} >Frases do Dia</Text>
    );
};


AppRegistry.registerComponent(appName, () => App);
