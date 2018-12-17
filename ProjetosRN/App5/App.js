import React, { Component } from 'react';
import { Navigator } from 'react-native-deprecated-custom-components'

import CenaPrincipal from './src/componentes/CenaPrincipal';
import CenaClientes from './src/componentes/CenaClientes';
import CenaContatos from './src/componentes/CenaContatos';
import CenaEmpresa from './src/componentes/CenaEmpresa';
import CenaServico from './src/componentes/CenaServico';

export default class App extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ id: 'principal' }}
        renderScene={(route, navigator) => {
          switch (route.id) {
            case 'principal':
              return (<CenaPrincipal navigator={navigator} />);
            case 'cliente':
              return (<CenaClientes navigator={navigator} />);
            case 'contato':
              return (<CenaContatos navigator={navigator} />);
            case 'empresa':
              return (<CenaEmpresa navigator={navigator} />);
            case 'servico':
              return (<CenaServico navigator={navigator} />);
            default:
              return false;
          }
        }}
      />
    );
  }
}

