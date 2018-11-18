/** @format */
import React from 'react';
import { AppRegistry, Text } from 'react-native';
import { name as appName } from './app.json';
//ESTILOS
const Estilos = {
    estiloTexto: {
        fontSize: 30,
        backgroundColor: '#08509B',
        shadowColor: '#000000',
        marginTop: 35,
        paddingTop: 15,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        //shadowRadius: 20
    }
};
//CRIAR COMPONENTE
const App = () => {
    return (
        <Text style={Estilos.estiloTexto} >Frases do Dia</Text>
    );
};


AppRegistry.registerComponent(appName, () => App);
