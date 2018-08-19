import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm  from './components/LoginForm';
import List from './components/List';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene key="login" component={LoginForm} title="Please Login" initial/> 
                <Scene key="List" component={List} title="List"/>       
            </Scene>
        </Router>
    );
}

export default RouterComponent