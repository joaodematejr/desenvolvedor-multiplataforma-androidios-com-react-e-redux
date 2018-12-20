import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Entrada from './Entrada';
import Comando from './Comando';
import Operacao from './Operacao';

class Painel extends Component {

    constructor(props) {
        super(props);

        this.state = { num1: '22', num2: '2' };
        this.calcular = this.calcular.bind(this);
        this.atualizaValor = this.atualizaValor.bind(this);

    }

    calcular() {
        const resultado = parseFloat(this.state.num1) + parseFloat(this.state.num2);
    }

    atualizaValor(nomeCampo, numero) {
        const obj = {};
        obj[nomeCampo] = numero;
        this.setState(obj);
    }

    render() {
        return (
            <View>
                <Entrada
                    num1={this.state.num1}
                    num2={this.state.num2}
                    atualizaValor={this.atualizaValor} />
                <Operacao />
                <Comando acao={this.calcular} />
            </View>
        );
    }
}
export { Painel }; 
