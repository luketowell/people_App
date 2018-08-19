import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import { config } from './config/firebaseConfig'
import LoginForm from './components/LoginForm'
import { Header } from './components/common'
import RouterComponent from './Router'

class App extends Component {

    componentWillMount() {
        console.log(config);
        firebase.initializeApp(config);
    }

    render() {
        return (
        <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <RouterComponent />
        </Provider>
        );
    }
}

export default App;