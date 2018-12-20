import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

export default props => (
    <TextInput style={styles.numero}
        value={props.num}
        onChangeText={valorDoCampo => props.atualizaValor(props.nome, valorDoCampo)} />
);

const styles = StyleSheet.create({
    numero: {
        width: 140,
        height: 80,
        fontSize: 20,
        backgroundColor: "#e1f5fe"
    }
});
