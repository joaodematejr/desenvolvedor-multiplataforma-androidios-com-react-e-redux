import axios from 'axios';
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Itens from './Itens';

export default class ListaItens extends Component {

    constructor(props) {
        super(props);
        this.state = { ListaItens: [] }
    }

    componentWillMount() {
        //API 
        //http://faus.com.br/recursos/c/dmairr/api/itens.html
        axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
            .then(response => {
                this.setState({ ListaItens: response.data })
                //console.log(response)
            })
            .catch(() => { console.log("Erro ao Recuperar os Dados") })
    }

    render() {
        return (
            <ScrollView style={{ backgroundColor: '#DDD' }}>
                {this.state.ListaItens.map(item => (<Itens key={item.titulo} item={item} />))}
            </ScrollView>
        );
    }
}


