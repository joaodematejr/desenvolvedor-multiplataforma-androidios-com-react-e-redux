/** @format */
import React from 'react';
import { AppRegistry, Text, View } from 'react-native';
import { name as appName } from './app.json';
//ESTILOS
const Estilos = {
    principal: {
        flex: 1,//PREENCHER ESPAÇO 1:1
        backgroundColor: 'cornflowerblue',
    },
    topo: {
        flex: 1,//1:5
        backgroundColor: 'brown',
    },
    conteudo: {
        flex: 3,//1:5
        backgroundColor: 'yellowgreen',
    },
    rodape: {
        flex: 1,//1:5
        backgroundColor: 'orangered',
    },
};
//CRIAR COMPONENTE
const App = () => {
    const { principal, topo, conteudo, rodape } = Estilos;
    return (
        <View style={principal}>
            <Text style={topo} >Topo</Text>
            <Text style={conteudo} >conteudo</Text>
            <Text style={rodape} >Rodape</Text>
        </View>
    );
};


AppRegistry.registerComponent(appName, () => App);
