import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardSection, Input, Button } from './common';
import { connect } from 'react-redux';
import emailChanged from '../actions';


class LoginForm extends Component {

    onEmailChange(text){
        this.props.emailChanged(text)
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="E-mail"
                        placeholder="test@test.com"
                        onChangeText={this.onEmailChange.bind(this)}/>
                </CardSection>

                <CardSection>
                    <Input
                        label="Password"
                        placeholder="Password"
                        passwordInput/>
                </CardSection>

                <CardSection>
                    <Button buttonText="Login" />
                </CardSection>
            </Card>
        );
    }
}

export default connect (null, emailChanged, LoginForm);
