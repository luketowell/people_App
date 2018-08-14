import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardSection, Input, Button } from './common';


class LoginForm extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="E-mail"
                        placeholder="test@test.com"/>
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

export default LoginForm;
