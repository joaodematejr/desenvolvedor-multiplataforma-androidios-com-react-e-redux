import React from 'react';
import { Router, Scene, Stack, ActionConst } from 'react-native-router-flux';
import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';
import BoasVindas from './components/BoasVindas'
import Principal from "./components/Principal";
import AdicionarContato from './components/AdicionarContato';
import Conversa from './components/Conversa';

export default props => (
    <Router navigationBarStyle={ { backgroundColor: '#115E54' } } titleStyle={ { color: '#FFF' } } >
        <Stack key="root" >
            <Scene hideNavBar={ true } key='formLogin' component={ FormLogin } title='Login' initial />
            <Scene hideNavBar={ false } key='formCadastro' component={ FormCadastro } title='Cadastro' />
            <Scene hideNavBar={ true } key='boasVindas' component={ BoasVindas } title='Bem-Vindo' />
            <Scene hideNavBar={ true } key='principal' component={ Principal } title='Principal' type={ ActionConst.RESET } />
            <Scene hideNavBar={ false } key='adicionarContato' component={ AdicionarContato } title='Adicionar Contato' />
            <Scene hideNavBar={ false } key='conversa' component={ Conversa } title='Conversas' />
        </Stack>
    </Router>
);