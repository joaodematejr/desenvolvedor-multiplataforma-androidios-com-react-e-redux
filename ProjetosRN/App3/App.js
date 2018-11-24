/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, View } from 'react-native';


class MeuComponente extends Component {
  render() {
    <View>
      <Text>Primeiro Paramentro</Text>
      <Text>Segundo Paramentro</Text>
    </View>
  }
}

class app3 extends Component {
  render() {
    return (
      <MeuComponente></MeuComponente>
    );
  }
}
