import React from 'react';
import { View, Text, StatusBar, Image, TouchableHighlight } from 'react-native';
import { TabBar } from 'react-native-tab-view';
import { Actions } from "react-native-router-flux";
import { connect } from 'react-redux';
import { habilitaInclusaoContato } from '../actions/AppActions';
import firebase from 'firebase';

const TabBarMenu = props => (
    <View style={ { backgroundColor: '#115E54', elevation: 4, marginBottom: 6 } }>
        <StatusBar backgroundColor='#114D44' />
        <View style={ { marginTop: 50, flexDirection: 'row', justifyContent: 'space-between' } }>
            <View style={ { height: 50, justifyContent: 'center' } }>
                <Text style={ { color: '#FFF', fontSize: 20, marginLeft: 20 } }>João Zap</Text>
            </View>
            <View style={ { flexDirection: 'row', marginRight: 20 } }>
                <View style={ { justifyContent: 'center', width: 50, alignItems: 'center' } }>
                    <TouchableHighlight onPress={ () => { Actions.adicionarContato(); props.habilitaInclusaoContato() } } underlayColor='#114D44'>
                        <Image source={ require('../imgs/adicionar-contato.png') } />
                    </TouchableHighlight>
                </View>
                <View style={ { justifyContent: 'center' } }>
                    <TouchableHighlight onPress={ () => firebase.auth().signOut().then(Actions.formLogin()) }>
                        <Text style={ { fontSize: 20, color: '#FFF' } }>Sair</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
        <TabBar { ...props } style={ { backgroundColor: '#115E54', elevation: 0 } } />
    </View>
);

export default connect(null, { habilitaInclusaoContato })(TabBarMenu);