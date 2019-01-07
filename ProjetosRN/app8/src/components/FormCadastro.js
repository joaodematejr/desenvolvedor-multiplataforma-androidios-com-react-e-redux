import React, { Component } from 'react';
import { View, TextInput, Button, ImageBackground, Text, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha, modificaNome, cadastraUsuario } from '../actions/AutenticacaoActions';

class formCadastro extends Component {
    //FUNCAOES COM _ É UMA FUNCAO DA ACTION E SEM _ É UMA FUNÇAO INTERNA
    _cadastraUsuario() {

        const { nome, email, senha } = this.props;
        this.props.cadastraUsuario({ nome, email, senha });

    }

    renderBtnCadastro() {
        if (this.props.loading_cadastro) {
            return (
                <ActivityIndicator size='large' />
            )
        }
        return (
            <Button title="Cadastrar" color="#222" onPress={ () => this._cadastraUsuario() } />
        )
    }

    render() {
        return (
            <ImageBackground style={ { flex: 1, width: null } } source={ require('../imgs/bg.png') } >
                < View style={ { flex: 1, padding: 10 } }>
                    <View style={ { flex: 4, justifyContent: 'center' } }>
                        <TextInput placeholderTextColor='#fff'
                            onChangeText={ texto => this.props.modificaNome(texto) } value={ this.props.nome }
                            placeholder="Nome" style={ { fontSize: 20, height: 45 } } />
                        <TextInput placeholderTextColor='#fff'
                            onChangeText={ texto => this.props.modificaEmail(texto) } value={ this.props.email }
                            placeholder="Email" style={ { fontSize: 20, height: 45 } } />
                        <TextInput placeholderTextColor='#fff' secureTextEntry={ true }
                            onChangeText={ texto => this.props.modificaSenha(texto) } value={ this.props.senha }
                            placeholder="Senha" style={ { fontSize: 20, height: 45 } } />
                        <Text style={ { color: '#ff0000', fontSize: 18 } }>{ this.props.erroCadastro }</Text>
                    </View>
                    <View style={ { flex: 1 } }>
                        { this.renderBtnCadastro() }
                    </View>
                </View >
            </ImageBackground >
        );
    }
}
const mapStateToProps = state => (
    {
        nome: state.AutenticacaoReducer.nome,
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha,
        erroCadastro: state.AutenticacaoReducer.erroCadastro,
        loading_cadastro: state.AutenticacaoReducer.loading_cadastro
    }
)

export default connect(mapStateToProps, { modificaEmail, modificaSenha, modificaNome, cadastraUsuario })(formCadastro);