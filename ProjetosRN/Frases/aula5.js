/** @format */
import React from 'react';
import { AppRegistry, Text, View } from 'react-native';
import { name as appName } from './app.json';
//ESTILOS
const Estilos = {
    estiloTexto: {
        fontSize: 40,
        backgroundColor: '#08509B',
        height: 60,
        width: 60,
    },
    estiloView: {
        backgroundColor: 'skyblue',
        height: 300,
        justifyContent: 'center',
        alignItems: 'flex-end',

    }
};
//CRIAR COMPONENTE
const App = () => {
    const { estiloTexto, estiloView } = Estilos;
    return (
        <View style={estiloView}>
            <Text style={estiloTexto} ></Text>
        </View>
    );
};


AppRegistry.registerComponent(appName, () => App);
