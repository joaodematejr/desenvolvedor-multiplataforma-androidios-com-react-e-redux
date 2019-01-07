import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import Routes from './Routes';
import reducers from './reducers/';

class App extends Component {

  componentWillMount() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyDYH4fPToah0GiJt986LWGWjAEfrSshfV0",
      authDomain: "whatsapp-clone-2d024.firebaseapp.com",
      databaseURL: "https://whatsapp-clone-2d024.firebaseio.com",
      projectId: "whatsapp-clone-2d024",
      storageBucket: "whatsapp-clone-2d024.appspot.com",
      messagingSenderId: "247850987821"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={ createStore(reducers, {}, applyMiddleware(ReduxThunk)) }>
        <Routes />
      </Provider>
    );
  }
}

export default App;
