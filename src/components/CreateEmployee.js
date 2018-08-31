import React, { Component } from 'react';
import { Card, CardSection, Input, Spinner, Button } from './common';
import { connect } from 'react-redux';
import { employeeUpdate }from '../actions';

class CreateEmployee extends Component {
    

    render(){
        return(
            <Card>
                <CardSection>
                    <Input
                     label="First Name"
                     placeholder="Joe"
                     value={this.props.firstName}
                     onChangeText = {text => this.props.employeeUpdate({ prop:'firstName', value:text })}
                     />
                </CardSection>

                <CardSection>
                    <Input 
                    label="Last Name" 
                    placeholder="Blogs" 
                    value={this.props.lastName}
                    onChangeText = {text => this.props.employeeUpdate({ prop:'lastName', value:text })}
                    />
                </CardSection>
                    
                <CardSection>
                    <Input 
                    label="Phone" 
                    placeholder="Phone Number" 
                    value={this.props.phone}
                    onChangeText = {text => this.props.employeeUpdate({ prop:'phone', value:text })}
                    />
                </CardSection>

                <CardSection>
                    <Button buttonText="Create" onPress={()=>{console.log('Created')}}/>
                </CardSection>
            </Card>
    
        )};
};

const mapStateToProps = (state) => {
    return {
        firstName: state.employeeForm.firstName,
        lastName: state.employeeForm.lastName,
        phone: state.employeeForm.phone,
        shift: state.employeeForm.shift,
    };
};

export default connect(mapStateToProps, { employeeUpdate }) (CreateEmployee);