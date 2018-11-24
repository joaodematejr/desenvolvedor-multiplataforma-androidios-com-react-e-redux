import React, { Component } from 'react';
import { Image, View } from 'react-native';

const imagem = require("../../img/jokenpo.png");

class Topo extends Component {
    render() {
        return (
            <View >
                <Image resizeMode="stretch" style={{ width: '100%' }} source={imagem} />
            </View>
        );
    }
}

export default Topo;
