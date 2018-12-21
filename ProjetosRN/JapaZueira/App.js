import React, { Component } from 'react';

import { StyleSheet, Text, TouchableOpacity, View, ScrollView, Alert, Image } from 'react-native';
import Sound from 'react-native-sound';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {},
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 30,
    padding: 20,
    textAlign: 'center',
    backgroundColor: '#311b92',
  },
  button: {
    fontSize: 20,
    backgroundColor: 'rgba(220,220,220,1)',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'rgba(80,80,80,0.5)',
    overflow: 'hidden',
    padding: 7,
  },
  header: {
    textAlign: 'left',
  },
  feature: {
    flexDirection: 'row',
    padding: 10,
    alignSelf: 'stretch',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'rgb(180,180,180)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(230,230,230)',
  },
});

const Button = ({ title, onPress }) => (
  <TouchableOpacity onPress={ onPress }>
    <Text style={ styles.button }>{ title }</Text>
  </TouchableOpacity>
);

const Header = ({ children, style }) => <Text style={ [styles.header, style] }>{ children }</Text>;

const Feature = ({ title, onPress, description, buttonLabel = 'PLAY', status }) => (
  <View style={ styles.feature }>
    <Header style={ { flex: 1 } }>{ title }</Header>
    { status ? <Text style={ { padding: 5 } }>{ resultIcons[status] || '' }</Text> : null }
    <Button title={ buttonLabel } onPress={ onPress } />
  </View>
);

const japaZueiraImg = require('./src/img/japa.png');

const resultIcons = {
  '': '',
  pending: '?',
  playing: '\u25B6',
  win: '\u2713',
  fail: '\u274C',
};

const audioTests = [
  {
    title: 'Acontece né (Irma da Japa)',
    isRequire: true,
    url: require('./src/sons/acontecene.mp3'),
  },
  {
    title: 'Ai, Desculpa(Irma da Japa)',
    isRequire: true,
    url: require('./src/sons/aidesculpa.mp3'),
  },
  {
    title: 'É mais cheguei para atacar Terror (Irma da Japa)',
    isRequire: true,
    url: require('./src/sons/chegueiparaatacarterro.mp3'),
  },
  {
    title: 'Coração Bateu Forte Né',
    isRequire: true,
    url: require('./src/sons/coracaobateuforte.mp3'),
  },
  {
    title: 'Sei lá o que é isso',
    isRequire: true,
    url: require('./src/sons/grito.mp3'),
  },
  {
    title: 'Jão',
    isRequire: true,
    url: require('./src/sons/jao.mp3'),
  },
  {
    title: 'Nem Pensar',
    isRequire: true,
    url: require('./src/sons/nempensar.mp3'),
  },
  {
    title: 'Não vou te Responder',
    isRequire: true,
    url: require('./src/sons/nemvoureresponder.mp3'),
  },
  {
    title: 'Nossa',
    isRequire: true,
    url: require('./src/sons/nossa.mp3'),
  },
  {
    title: 'Oi',
    isRequire: true,
    url: require('./src/sons/oi.mp3'),
  },
  {
    title: 'Quero saber do meu MC',
    isRequire: true,
    url: require('./src/sons/querosaberdomeumc.mp3'),
  },
  {
    title: 'Tomar um Não',
    isRequire: true,
    url: require('./src/sons/tomarumnao.mp3'),
  },
  {
    title: 'Vou ficar bem quietinha',
    isRequire: true,
    url: require('./src/sons/vouficarbemquietinhanaminha.mp3'),
  },
];

function setTestState(testInfo, component, status) {
  component.setState({ tests: { ...component.state.tests, [testInfo.title]: status } });
}

/**
 * Generic play function for majority of tests
 */
function playSound(testInfo, component) {
  setTestState(testInfo, component, 'pending');

  const callback = (error, sound) => {
    if (error) {
      Alert.alert('error', error.message);
      setTestState(testInfo, component, 'fail');
      return;
    }
    setTestState(testInfo, component, 'playing');
    // Run optional pre-play callback
    testInfo.onPrepared && testInfo.onPrepared(sound, component);
    sound.play(() => {
      // Success counts as getting to the end
      setTestState(testInfo, component, 'win');
      // Release when it's done so we're not using up resources
      sound.release();
    });
  };

  // If the audio is a 'require' then the second parameter must be the callback.
  if (testInfo.isRequire) {
    const sound = new Sound(testInfo.url, error => callback(error, sound));
  } else {
    const sound = new Sound(testInfo.url, testInfo.basePath, error => callback(error, sound));
  }
}

class MainView extends Component {
  constructor (props) {
    super(props);

    Sound.setCategory('Playback', true); // true = mixWithOthers

    // Special case for stopping
    this.stopSoundLooped = () => {
      if (!this.state.loopingSound) {
        return;
      }

      this.state.loopingSound.stop().release();
      this.setState({ loopingSound: null, tests: { ...this.state.tests, ['mp3 in bundle (looped)']: 'win' } });
    };

    this.state = {
      loopingSound: undefined,
      tests: {},
    };
  }

  render() {
    return (
      <View style={ { flex: 1 } }>
        <View style={ { justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: '#FFF' } } >
          <Image
            style={ { width: 200, height: 200 } }
            source={ japaZueiraImg }
          />
          <Text style={ { fontSize: 20, color: '#c51162' } }>Sons da JapaZueira</Text>
        </View>
        <View style={ { flex: 2, backgroundColor: '#9575cd' } } >
          <ScrollView style={ styles.container } contentContainerStyle={ styles.scrollContainer }>
            { audioTests.map(testInfo => {
              return (
                <Feature
                  status={ this.state.tests[testInfo.title] }
                  key={ testInfo.title }
                  title={ testInfo.title }
                  onPress={ () => {
                    return playSound(testInfo, this);
                  } }
                />
              );
            }) }
            <Feature title="Som" buttonLabel={ 'STOP' } onPress={ this.stopSoundLooped } />
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default MainView;