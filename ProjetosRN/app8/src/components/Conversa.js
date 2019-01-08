import React, { Component } from "react";
import { View, TextInput, Image, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { modificaMensagem, enviarMensagem } from '../actions/AppActions'

class Conversa extends Component {

    _enviarMensagem() {
        const { mensagem, contatoNome, contatoEmail } = this.props;
        this.props.enviarMensagem(mensagem, contatoNome, contatoEmail)
    }
    render() {
        console.log(this.props);
        return (
            <View style={ { flex: 1, marginTop: 50, backgroundColor: '#eee4dc', padding: 10 } }>
                <View style={ { flex: 1, paddingBottom: 20 } }></View>
                <View style={ { flexDirection: 'row', height: 60 } }>
                    <TextInput style={ { flex: 4, backgroundColor: '#fff', fontSize: 18 } }
                        value={ this.props.mensagem } onChangeText={ texto => this.props.modificaMensagem(texto) }
                    />
                    <TouchableHighlight onPress={ this._enviarMensagem.bind(this) } underlayColor='#fff'>
                        <Image source={ require('../imgs/enviar_mensagem.png') } />
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

mapStateToProps = state => {
    return ({
        mensagem: state.AppReducer.mensagem
    })
}

export default connect(mapStateToProps, { modificaMensagem, enviarMensagem })(Conversa)