import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import firebase from 'firebase';

export default class App extends Component {



  componentWillMount() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyCF8zpgpf5VQ4BXuutXpFtkUd-vLFVOWs0",
      authDomain: "configuracaofirebasereac-92d53.firebaseapp.com",
      databaseURL: "https://configuracaofirebasereac-92d53.firebaseio.com",
      projectId: "configuracaofirebasereac-92d53",
      storageBucket: "configuracaofirebasereac-92d53.appspot.com",
      messagingSenderId: "507138475641"
    };
    firebase.initializeApp(config);
  }

  cadastrarUsuario() {
    var email = "joaodematejr@gmail.com";
    var senha = "abc123";

    const usuario = firebase.auth();

    usuario.createUserWithEmailAndPassword(
      email,
      senha
    ).catch(
      (erro) => {
        var mensagemErro = "";
        if (erro.code == "auth/weak-password") {
          mensagemErro = "A senha Precisa ter no minimo 6 caracteres";
        }
        //erro.code, erro.message
        alert(mensagemErro);
      }
    );
  }
  /*   verificarUsuarioLogado() {
      const usuario = firebase.auth();
      const usuarioAtual = usuario.currentUser;
  
      if (usuarioAtual) {
        alert("usuario esta Logado");
      } else {
        alert("usuario não esta Logado");
      }
    } */
  verificarUsuarioLogado() {

    const usuario = firebase.auth();
    usuario.onAuthStateChanged(
      (usuarioAtual) => {
        if (usuarioAtual) {
          alert("usuario esta Logado");
        } else {
          alert("usuario não esta Logado");
        }
      }
    );


  }


  render() {
    return (
      <View style={ styles.container }>
        <Button
          onPress={ () => { this.cadastrarUsuario(); } }
          title="Cadastrar Usuario"
          color="#841584"
          accessibilityLAbel="Cadastrar Usuario" />

        <Button
          onPress={ () => { this.verificarUsuarioLogado(); } }
          title="Verificar Usuario Logado"
          color="#222"
          accessibilityLAbel="Verificar Usuario Logado" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
