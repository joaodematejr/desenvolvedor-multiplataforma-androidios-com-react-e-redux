import React, { Component } from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

const imgPedra = require('../../img/pedra.png');
const imgPapel = require('../../img/papel.png');
const imgTesoura = require('../../img/tesoura.png');

class Icone extends Component {
    render() {
        //this.props.escolha
        //this.props.jogador
        if (this.props.escolha === 'Pedra') {
            return (
                <View style={styles.icone}>
                    <Text style={styles.txtJogador}>{this.props.jogador}</Text>
                    <Image source={imgPedra} />
                </View>
            );
        } else if (this.props.escolha === 'Papel') {
            return (
                <View style={styles.icone}>
                    <Text style={styles.txtJogador}>{this.props.jogador}</Text>
                    <Image source={imgPapel} />
                </View>
            );
        } else if (this.props.escolha === 'Tesoura') {
            return (
                <View style={styles.icone}>
                    <Text style={styles.txtJogador}>{this.props.jogador}</Text>
                    <Image source={imgTesoura} />
                </View>
            );
        }
        return false;
    }
}
const styles = StyleSheet.create({
    icone: {
        alignSelf: 'center',
        marginTop: 20
    },
    txtJogador: {
        fontSize: 18,
        alignSelf: 'center',
    },
});

export default Icone;
