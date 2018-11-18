/** @format */
import React from 'react';
import { AppRegistry, Text } from 'react-native';
import { name as appName } from './app.json';
//ESTILOS
const Estilos = {
    estiloTexto: {
        fontSize: 40,
        backgroundColor: '#08509B',
        shadowColor: '#000000',
        marginTop: 35,
        paddingTop: 15,
        color: '#fff',
        //fontStyle: 'italic',
        //fontWeight: '600',
        //textAlign: 'center',
        textDecorationLine: 'underline',
    }
};
//CRIAR COMPONENTE
const App = () => {
    return (
        <Text style={Estilos.estiloTexto} >Frases do Dia</Text>
    );
};


AppRegistry.registerComponent(appName, () => App);
