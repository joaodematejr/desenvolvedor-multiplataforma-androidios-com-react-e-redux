/** @format */
import React from 'react';
import { AppRegistry, Button, View } from 'react-native';
import { name as appName } from './app.json';
//ESTILOS
const Estilos = {
    principal: {
        paddingTop: 40,
    },
};

const botaoPressionado = () => {
    alert('Botão Pressionado');
}
//CRIAR COMPONENTE
const App = () => {
    const { principal } = Estilos;
    return (
        <View style={principal}>
            <Button
                onPress={botaoPressionado}
                title="Clique aqui"
                color="#841584"
                accessibilityLabel="Clique para abrir as notícias"
            />
        </View>
    );
};


AppRegistry.registerComponent(appName, () => App);
