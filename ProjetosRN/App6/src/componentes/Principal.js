import React, { Component } from 'react';
import { Image, StyleSheet, View, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';

const logo = require('../imgs/logo.png');
const btnJogar = require('../imgs/botao_jogar.png');
const btnSobreJogar = require('../imgs/sobre_jogo.png');
const btnOutrosJogar = require('../imgs/outros_jogos.png');

export default class Principal extends Component {
    render() {
        return (
            <View style={styles.cenaPrincipal}>
                <View style={styles.apresentacaoJogo}>
                    <Image source={logo} />
                    <TouchableHighlight onPress={() => { Actions.resultado(); }}>
                        <Image source={btnJogar} />
                    </TouchableHighlight>
                </View>
                <View style={styles.rodape}>
                    <TouchableHighlight
                        onPress={() => { Actions.sobrejogo(); }}>
                        <Image source={btnSobreJogar} />
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => { Actions.outrosjogos(); }}>
                        <Image source={btnOutrosJogar} />
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cenaPrincipal: {
        flex: 1,
        backgroundColor: '#61BD8C',
    },
    apresentacaoJogo: {
        flex: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    rodape: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',

    }
});
