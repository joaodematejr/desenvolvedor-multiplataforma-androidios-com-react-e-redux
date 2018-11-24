import React, { Component } from 'react';
import { StyleSheet, AppRegistry, Text, View, Button, Image } from 'react-native';

class App3 extends Component {
    constructor(props) {
        super(props);
        this.state = { escolhaUsuario: '', escolhaComputador: '', resultado: '' };
    }
    jokenpo(escolhaUsuario) {
        //GERAR NUMERO ALEATORIO ( 0, 1, 2 );

        var numeroAleatorio = Math.floor(Math.random() * 3);

        var escolhaComputador = '';

        switch (numeroAleatorio) {
            case 0: escolhaComputador = "Pedra"; break;
            case 1: escolhaComputador = "Papel"; break;
            case 2: escolhaComputador = "Tesoura"; break;
        }

        var resultado = '';

        if (escolhaComputador == "Pedra") {
            if (escolhaUsuario == "Pedra") {
                resultado = "Empate"
            }
            if (escolhaUsuario == "Papel") {
                resultado = "Você Ganhou !"
            }
            if (escolhaUsuario == "Tesoura") {
                resultado = "Você Perdeu !"
            }
        }

        if (escolhaComputador == "Papel") {
            if (escolhaUsuario == "Papel") {
                resultado = "Empate"
            }
            if (escolhaUsuario == "Tesoura") {
                resultado = "Você Ganhou !"
            }
            if (escolhaUsuario == "Pedra") {
                resultado = "Você Perdeu !"
            }
        }

        if (escolhaComputador == "Tesoura") {
            if (escolhaUsuario == "Tesoura") {
                resultado = "Empate"
            }
            if (escolhaUsuario == "Pedra") {
                resultado = "Você Ganhou !"
            }
            if (escolhaUsuario == "Papel") {
                resultado = "Você Perdeu !"
            }
        }

        this.setState({ escolhaUsuario: escolhaUsuario, escolhaComputador: escolhaComputador, resultado: resultado });
    }
    render() {
        return (
            <View>
                <Topo />
                <View style={styles.painelAcoes}>
                    <View style={styles.btnEscolha}>
                        <Button title="Pedra" onPress={() => { this.jokenpo("Pedra") }} />
                    </View>
                    <View style={styles.btnEscolha}>
                        <Button title="Papel" onPress={() => { this.jokenpo("Papel") }} />
                    </View>
                    <View style={styles.btnEscolha}>
                        <Button title="Tesoura" onPress={() => { this.jokenpo("Tesoura") }} />
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

class Topo extends Component {
    render() {
        return (
            <View >
                <Image resizeMode="stretch" style={{ width: '100%' }} source={require("./img/jokenpo.png")} />
            </View>
        );
    }
}

class Icone extends Component {
    render() {

        //this.props.escolha
        //this.props.jogador

        if (this.props.escolha == 'Pedra') {
            return (
                <View style={styles.icone}>
                    <Text style={styles.txtJogador}>{this.props.jogador}</Text>
                    <Image source={require('./img/pedra.png')} />
                </View>
            );
        } else if (this.props.escolha == 'Papel') {
            return (
                <View style={styles.icone}>
                    <Text style={styles.txtJogador}>{this.props.jogador}</Text>
                    <Image source={require('./img/papel.png')} />
                </View>
            );
        } else if (this.props.escolha == 'Tesoura') {
            return (
                <View style={styles.icone}>
                    <Text style={styles.txtJogador}>{this.props.jogador}</Text>
                    <Image source={require('./img/tesoura.png')} />
                </View>
            );
        } else {
            return false;
        }

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
    txtJogador: {
        fontSize: 18,
        alignSelf: 'center',
    },
    icone: {
        alignSelf: 'center',
        marginTop: 20
    }
});

AppRegistry.registerComponent('App3', () => App3);
