import React, { Component } from 'react';
import ListaItens from './scr/components/listaItens';

export default class App extends Component {
  constructor(props) {
    super(props);
    console.log("Construindo APP");
  }
  componentWillMount() {
    console.log("Fazendo alguma coisa antes de renderizar");
  }
  componentDidMount() {
    console.log("Fazendo alguma coisa depois de renderizar");
  }
  render() {
    const teste = "esse é um valor ";
    console.log(teste);
    return (
      <ListaItens />
    );
  }

}


