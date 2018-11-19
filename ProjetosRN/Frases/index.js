/** @format */
import React from 'react';
import { AppRegistry, TouchableOpacity, View, Text } from 'react-native';
import { name as appName } from './app.json';
//ESTILOS
const Estilos = {
    principal: {
        paddingTop: 40,
    },
    botao: {
        backgroundColor: '#48BBEC',
        padding: 10,
        borderColor: '#1D8EB8',
        borderWidth: 1,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4
    },
    textoBotao: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'center',

    }
};

const botaoPressionado = () => {
    alert('Botão Pressionado');
}
//CRIAR COMPONENTE
const App = () => {
    const { principal, botao, textoBotao } = Estilos;
    return (
        <View style={principal}>
            <TouchableOpacity style={botao}>
                <Text style={textoBotao}>Clique aqui</Text>
            </TouchableOpacity>
        </View>
    );
};


AppRegistry.registerComponent(appName, () => App);
