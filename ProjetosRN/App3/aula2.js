import React, { Component } from 'react';
import { AppRegistry, Text, View, Button } from 'react-native';

class MeuComponente extends Component {
    render() {
        return (
            <View>
                <Text>{this.props.teste}</Text>
            </View>
        )
    }
}

class App3 extends Component {

    constructor(props) {
        super(props);

        this.state = { texto: 'Texto teste 2' };

    }

    alteraTexto() {
        this.setState({ texto: 'Outra coisa' });
    }

    render() {
        return (
            <View>
                <MeuComponente teste={this.state.texto}></MeuComponente>
                <Button
                    onPress={() => { this.alteraTexto() }}
                    title='Botão'
                />
            </View>
        )
    }
}

AppRegistry.registerComponent('App3', () => App3);
