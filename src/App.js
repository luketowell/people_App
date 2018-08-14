import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import config from './config/firebaseConfig'
import LoginForm from './components/LoginForm'
import { Header } from './components/common'

class App extends Component {

    componentWillMount() {
        firebase.initializeApp(config);
    }

    render() {
        return (
        
        <Provider store={createStore(reducers)}>
                <LoginForm>
                </LoginForm>
        </Provider>
        );
    }
}

export default App;