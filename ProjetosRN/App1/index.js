var React = require('react');
var Text = require('react-native').Text;
var View = require('react-native').View;
var Button = require('react-native').Button;
var AppRegistry = require('react-native').AppRegistry;

const gerarNumeroAleatorio = () => {
    var numero_aleatorio = Math.random();
    numero_aleatorio = Math.floor(numero_aleatorio * 10);
    alert(numero_aleatorio);
}

const App = () => {
    return (
        <View>
            <Text>Meu Primeiro APP</Text>
            <Button
                title="Gerar Numero"
                onPress={gerarNumeroAleatorio}
            />
        </View>
    );
};

AppRegistry.registerComponent('App1', () => App);
