import React, { Component } from 'react';
import { Card, CardSection, Input, Spinner, Button } from './common';

class CreateEmployee extends Component {

    render(){
        return(
            <Card>
                <CardSection>
                    <Input label="First Name" placeholder="Joe"/>
                </CardSection>

                <CardSection>
                    <Input label="Last Name" placeholder="Blogs"/>
                </CardSection>
                    
                <CardSection>
                    <Input label="Phone" placeholder="Phone Number" />
                </CardSection>

                <CardSection>
                    <Button buttonText="Create" onPress={()=>{console.log('Created')}}/>
                </CardSection>
            </Card>
    
        )}
}

export default CreateEmployee;