import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

export default props => (
    <View style={ styles.topo }>
        <Text style={ styles.txtTitulo }>Calculora 1.0</Text>
    </View>
)

const styles = StyleSheet.create({
    topo: {
        backgroundColor: '#2196F3',
        padding: 20,
        alignItems: 'center',
    },
    txtTitulo: {
        ...Platform.select({
            ios: {
                paddingTop: 30,
            },
            android: {
                padding: 0,
            },
        }),
        fontSize: 20,
        color: '#FFF'
    }
});