import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import Principal from './componentes/Principal';
import SobreJogo from './componentes/SobreJogo';
import OutrosJogos from './componentes/OutrosJogos';
import Resultado from './componentes/Resultado';

const Rotas = () => (
    <Router sceneStyle={{ paddingTop: 0 }}>
        <Stack key="root">
            <Scene key='principal' component={Principal} initial={true} title="Cara ou Coroa" />
            <Scene key='sobrejogo' component={SobreJogo} title="Sobre o Jogo" />
            <Scene key='outrosjogos' component={OutrosJogos} title="Outros o Jogos" />
            <Scene key='resultado' component={Resultado} title="Resultado" />
        </Stack>
    </Router>
);

export default Rotas;
