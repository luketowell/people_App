import React, { Component } from 'react';
import { Text, View, Picker } from 'react-native';
import { Card, CardSection, Input, Spinner, Button } from './common';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate }from '../actions';

class CreateEmployee extends Component {
    
    onButtonPress(){
        const { firstName, lastName, phone, shift } = this.props;

        this.props.employeeCreate({ firstName, lastName, phone, shift });
    }
    

    render(){
        const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
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

                <CardSection extraStyles={{flexDirection: 'column'}}>
                    <Text style={{ fontSize: 18, paddingLeft: 20 }}>Shift</Text>
                    <Picker
                        selectedValue={this.props.shift}
                        onValueChange={(itemValue) => this.props.employeeUpdate({prop:'shift', value: itemValue})}>

                        { days.map((item, key) => (
                        <Picker.Item key={key} label={ item } value={ item } />
                        ))}
                    </Picker>
                </CardSection>

                <CardSection>
                    <Button buttonText="Create" onPress={this.onButtonPress.bind(this)}/>
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

export default connect(mapStateToProps, { employeeUpdate, employeeCreate }) (CreateEmployee);