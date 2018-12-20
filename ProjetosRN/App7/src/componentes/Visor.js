import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default props => (
    <View style={styles.view}>
        <TextInput style={{ fontSize: 20 }}
            placeholder="Resultado"
            placeholderTextColor="#2196F3"
            editable={false} />
    </View>
)

const styles = StyleSheet.create({
    view: {
        paddingTop: 30,
        paddingBottom: 30,
        justifyContent: 'center',
        alignItems: 'center'
    }
});