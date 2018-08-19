import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm  from './components/LoginForm';
import List from './components/List';
import Detail from './components/Detail';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene key="login" component={LoginForm} title="Please Login" initial/> 
                </Scene>
                <Scene key="main">
                    <Scene key="List" component={List} title="List"/>
                    <Scene key="Detail" component={Detail} title="Detail"/>
                </Scene>   
            </Scene>
        </Router>
    );
}

export default RouterComponent