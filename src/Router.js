import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm  from './components/LoginForm';
import List from './components/List';
import Detail from './components/Detail';
import CreateEmployee from './components/CreateEmployee';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene key="login" component={LoginForm} title="Please Login" initial/> 
                </Scene>
                <Scene key="main">
                    <Scene 
                        rightTitle="Add"
                        onRight={() => Actions.NewEmployee()}
                        key="List" 
                        component={List} 
                        title="List"
                        initial
                    />
                    <Scene key="NewEmployee" component={CreateEmployee} title="Add Employee"/>
                    <Scene key="Detail" component={Detail} title="Detail"/>
                </Scene>   
            </Scene>
        </Router>
    );
}

export default RouterComponent