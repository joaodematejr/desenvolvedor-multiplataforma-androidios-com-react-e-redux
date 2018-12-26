import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import firebase from 'firebase';

export default class App extends Component {

  constructor (props) {
    super(props);
    this.state = { pontuacao: 0 }
  }

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

  salvarDados() {
    var funcionarios = firebase.database().ref("funcionarios");
    //database.ref('pontuacao').set('100');
    //REMOVER
    //database.ref('pontuacao').remove();
    //funcionarios.push().child("nome").set("João");
    //funcionarios.child("002").child("nome").set("Junior");
    //funcionarios.child("002").remove();
    funcionarios.push().set(
      {
        nome: 'João',
        altura: '1,75',
        peso: '87KG'
      }
    );
  }
  listarDados() {
    var pontuacao = firebase.database().ref("pontuacao");
    pontuacao.on('value', (snapshot) => {
      //alert(snapshot.val());
      var pontos = snapshot.val();
      this.setState({ pontuacao: pontos });
    });
  }


  render() {
    let { pontuacao } = this.state;
    return (
      <View style={ styles.container }>
        <Text style={ styles.welcome }>{ pontuacao }</Text>
        <Button
          onPress={ () => { this.salvarDados(); } }
          title="Salvar Dados"
          color="#841584"
          accessibilityLAbel="Salvar Dados" />

        <Button
          onPress={ () => { this.listarDados(); } }
          title="Listar Dados"
          color="#222"
          accessibilityLAbel="Listar Dados" />
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
