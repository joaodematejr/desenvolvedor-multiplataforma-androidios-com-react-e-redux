import React, { Component } from 'react';
import { Image, StatusBar, View, StyleSheet, Text } from 'react-native';
import BarraNavegacao from './BarraNavegacao';

const detalheContatos = require('../imgs/detalhe_contato.png');

export default class CenaContatos extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <StatusBar
                    //hidden={false}
                    backgroundColor='#61BD8C'
                />

                <BarraNavegacao voltar navigator={this.props.navigator} corDeFundo='#61BD8C' />

                <View style={styles.cabecalho}>
                    <Image source={detalheContatos} />
                    <Text style={styles.txtTitulo}>Contatos</Text>
                </View>
                <View style={styles.detalheContatos}>
                    <Text style={styles.txtContatos}>Tel: (48) 9999-9999</Text>
                    <Text style={styles.txtContatos}>Cel: (48) 9999-9999</Text>
                    <Text style={styles.txtContatos}>Email: contatos@atmconsultoria.com.br</Text>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    cabecalho: {
        flexDirection: 'row',
        marginTop: 20,
    },
    txtTitulo: {
        fontSize: 30,
        color: '#61BD8C',
        marginLeft: 10,
        marginTop: 25,
    },
    detalheContatos: {
        marginTop: 20,
        padding: 20,
    },
    txtContatos: {
        fontSize: 18
    }
});


