import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { employeeDetails } from '../actions';
import { CardSection, Card } from './common';
import _ from 'lodash';

class List extends Component {

    componentWillMount(){
        this.props.employeeDetails();
    }


    render() {
        console.log(this.props.data)
        const arr = _(this.props.data) //wrap object so that you can chain lodash methods
            .mapValues((value, id)=>_.merge({}, value, {id})) //attach id to object
            .values() //get the values of the result
            .value()
        console.log(arr)
        return (
            <View>
                <View>
                    <Text>stuff</Text>
                    
                </View>
          </View>
        );
    }
}

mapStateToProps = ( state ) => {
    return { 
        data: state.employeeList
    };
}

export default connect(mapStateToProps, { employeeDetails })(List);