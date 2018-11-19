/** @format */
import React from 'react';
import { AppRegistry, Text, View } from 'react-native';
import { name as appName } from './app.json';
//ESTILOS
const Estilos = {
    estiloTexto: {
        fontSize: 40,
        backgroundColor: '#08509B',
        //height: 60,
        //width: 60,
    },
    estiloTexto2: {
        fontSize: 40,
        backgroundColor: '#2A48FA',
        //height: 60,
        //width: 60,
    },
    estiloView: {
        backgroundColor: 'skyblue',
        height: 600,
        justifyContent: 'space-around',
        alignItems: 'stretch',
        flexDirection: 'column',

    }
};
//CRIAR COMPONENTE
const App = () => {
    const { estiloTexto, estiloView, estiloTexto2 } = Estilos;
    return (
        <View style={estiloView}>
            <Text style={estiloTexto} >a</Text>
            <Text style={estiloTexto2} >b</Text>
            <Text style={estiloTexto2} >c</Text>
        </View>
    );
};


AppRegistry.registerComponent(appName, () => App);
