import React, { Component } from 'react';
import { Platform, Image, Text, View } from 'react-native';

const logo = require('./src/imgs/logo.png');
const btnJogar = require('./src/imgs/botao_jogar.png');
const btnSobreJogar = require('./src/imgs/sobre_jogo.png');
const btnOutrosJogar = require('./src/imgs/outros_jogos.png');

export default class App extends Component {
  render() {
    return (
      <View>
        <View>
          <Image source={logo} />
          <Image source={btnJogar} />
        </View>
        <View>
          <Image source={btnSobreJogar} />
          <Image source={btnOutrosJogar} />
        </View>
      </View>
    );
  }
}
