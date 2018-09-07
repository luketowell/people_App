import React, { Component } from 'react';
import { View, Picker } from 'react-native';
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
                
                <View>
                    <Picker
                        selectedValue={this.props.shift}
                        style={{ padding: 5, backgroundColor: 'white' }}
                        onValueChange={(itemValue, itemIndex) => this.props.employeeUpdate({prop:'shift', value: itemValue})}>
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                    </Picker>
                </View>

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