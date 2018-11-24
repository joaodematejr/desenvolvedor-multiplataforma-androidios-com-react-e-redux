import React, { Component } from 'react';
import { AppRegistry, Button, StyleSheet, Text, View } from 'react-native';
import Topo from './src/componentes/topo';
import Icone from './src/componentes/icone';

class App3 extends Component {
    constructor(props) {
        super(props);
        this.state = { escolhaUsuario: '', escolhaComputador: '', resultado: '' };
    }
    jokenpo(escolhaUsuario) {
        //GERAR NUMERO ALEATORIO ( 0, 1, 2 );
        const numeroAleatorio = Math.floor(Math.random() * 3);

        let escolhaComputador = '';

        switch (numeroAleatorio) {
            case 0: escolhaComputador = "Pedra"; break;
            case 1: escolhaComputador = "Papel"; break;
            case 2: escolhaComputador = "Tesoura"; break;
            default: escolhaComputador = '';
        }
        let resultado = '';
        if (escolhaComputador === "Pedra") {
            if (escolhaUsuario === "Pedra") {
                resultado = "Empate"
            }
            if (escolhaUsuario === "Papel") {
                resultado = "Você Ganhou !"
            }
            if (escolhaUsuario === "Tesoura") {
                resultado = "Você Perdeu !"
            }
        }

        if (escolhaComputador === "Papel") {
            if (escolhaUsuario === "Papel") {
                resultado = "Empate"
            }
            if (escolhaUsuario === "Tesoura") {
                resultado = "Você Ganhou !"
            }
            if (escolhaUsuario === "Pedra") {
                resultado = "Você Perdeu !"
            }
        }

        if (escolhaComputador === "Tesoura") {
            if (escolhaUsuario === "Tesoura") {
                resultado = "Empate"
            }
            if (escolhaUsuario === "Pedra") {
                resultado = "Você Ganhou !"
            }
            if (escolhaUsuario === "Papel") {
                resultado = "Você Perdeu !"
            }
        }

        this.setState({ escolhaUsuario, escolhaComputador, resultado });
    }
    render() {
        return (
            <View>
                <Topo />
                <View style={styles.painelAcoes}>
                    <View style={styles.btnEscolha}>
                        <Button title="Pedra" onPress={() => { this.jokenpo("Pedra"); }} />
                    </View>
                    <View style={styles.btnEscolha}>
                        <Button title="Papel" onPress={() => { this.jokenpo("Papel"); }} />
                    </View>
                    <View style={styles.btnEscolha}>
                        <Button title="Tesoura" onPress={() => { this.jokenpo("Tesoura"); }} />
                    </View>
                </View>
                <View style={styles.palco}>
                    <Text style={styles.resultado}>{this.state.resultado}</Text>

                    <Icone escolha={this.state.escolhaComputador} jogador='Computador'></Icone>

                    <Icone escolha={this.state.escolhaUsuario} jogador='Você'></Icone>

                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    btnEscolha: {
        width: 90
    },
    painelAcoes: {
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    palco: {
        alignItems: 'center',
        marginTop: 10,
    },
    resultado: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'red',
        height: 60
    },
});

AppRegistry.registerComponent('App3', () => App3);
