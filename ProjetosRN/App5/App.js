import React, { Component } from 'react';
import { Navigator } from 'react-native-deprecated-custom-components'

import CenaPrincipal from './src/componentes/CenaPrincipal';
import CenaClientes from './src/componentes/CenaClientes';

export default class App extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ id: 'a' }}
        renderScene={(route, navigator) => {
          /* definir a cena com base na rota */
          if (route.id === 'a') {
            //exibir a cenaPrincipal
            return (<CenaPrincipal navigator={navigator} />);
          }

          if (route.id === 'b') {
            //exibir a cenaClientes
            return (<CenaClientes navigator={navigator} />);
          }
        }}
      />
    );
  }
}

