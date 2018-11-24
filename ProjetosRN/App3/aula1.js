
import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class MeuComponente extends Component {
    render() {
        return (
            <View>
                <Text>{this.props.propriedade1}</Text>
                <Text>Segundo Parametro</Text>
            </View>
        )
    }
}

class App3 extends Component {
    render() {
        return (
            <MeuComponente propriedade1='banana'></MeuComponente>
        )
    }
}



AppRegistry.registerComponent('App3', () => App3);
