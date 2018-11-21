/** @format */
import React from 'react';
import { AppRegistry, View, Image, Text, TouchableOpacity, Alert } from 'react-native';
import { name as appName } from './app.json';
//ESTILOS
const Estilos = {
    principal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    botao: {
        backgroundColor: '#538530',
        paddingVertical: 10,
        paddingHorizontal: 40,
        marginTop: 20
    },
    textoBotao: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold'
    }
};
const gerarNovaFrase = () => {
    var numeroAleatorio = Math.random();
    numeroAleatorio = Math.floor(numeroAleatorio * 5);

    var frases = Array();
    frases[0] = 'O tempo deixa perguntas, mostra respostas, esclarece dúvidas, mas, acima de tudo, o tempo traz verdades.';
    frases[1] = 'Superar é preciso. Seguir em frente é essencial. Olhar pra trás é perda de tempo. Passado se fosse bom era presente.';
    frases[2] = 'Cada escolha, uma oportunidade. Cada queda, um aprendizado. Cada atitude, uma consequência.';
    frases[3] = 'Cada cicatriz que temos é a confirmação de que uma ferida sara. Cicatrizes são marcas de superação que só um verdadeiro guerreiro possui.';
    frases[4] = 'Da vida não quero muito. Quero apenas saber que tentei tudo o que quis, tive tudo o que pude, amei tudo o que valia e perdi apenas o que, no fundo, nunca foi meu.';

    var frasesEscolhida = frases[numeroAleatorio];

    Alert.alert(frasesEscolhida);
}
//CRIAR COMPONENTE
const App = () => {
    const { principal, botao, textoBotao } = Estilos;
    return (
        <View style={principal}>
            <Image source={require('./imgs/logo.png')} />
            <TouchableOpacity onPress={gerarNovaFrase} style={botao}>
                <Text style={textoBotao}>Nova Frase</Text>
            </TouchableOpacity>
        </View>
    );
};


AppRegistry.registerComponent(appName, () => App);
