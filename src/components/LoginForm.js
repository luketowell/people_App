import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';


class LoginForm extends Component {

    onEmailChange(text) {
        this.props.emailChanged(text);
    };

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    };

    onLoginClicked() {
        const email = this.props.email;
        const password = this.props.password;
        this.props.loginUser(email, password);
    }

    renderError(){
        if(this.props.error){
            return(
                <View style={styles.errorMessageContainer}>
                    <Text style={styles.errorMessage}>Unfortunately something has gone wrong!</Text>
                </View>
            )
        }
    }

    render() {
        if(this.props.loading){
            return(
                <Spinner/>
            )
        }   
        return (
            <Card>
                <CardSection>
                    <Input
                        label="E-mail"
                        placeholder="test@test.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value = {this.props.email}/>
                </CardSection>

                <CardSection>
                    <Input
                        label="Password"
                        placeholder="Password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value= {this.props.password}
                        passwordInput/>
                </CardSection>
                {this.renderError()}
                <CardSection>
                    <Button buttonText="Login" 
                    onPress={this.onLoginClicked.bind(this)}/>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorMessageContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    errorMessage: {
        color: 'red',
        fontSize: 16,
    }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        loading: state.auth.loading,
        error: state.auth.error,
        user: state.auth.user
    };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser }) (LoginForm);
