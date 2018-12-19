import React from 'react';
import { Platform, StyleSheet, TextInput, View } from 'react-native';

export default props => (
    <View>
        <TextInput style={styles.visor} placeholder='Resultado' editable={false} />
    </View>
)

const styles = StyleSheet.create({
    visor: {
        height: 10,
        fontSize: 30,
    }
});