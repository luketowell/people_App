import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { employeeDetails } from '../actions';
import { CardSection, Card } from './common';

class List extends Component {

    componentWillMount(){
        this.props.employeeDetails();
    }


    render() {
        return (
            <View>
                <View>
                    <Text>stuff</Text>
                    <Text>{JSON.stringify(this.props.data)}</Text>

                    
                </View>
                <FlatList
                    data={this.props.data}
                    keyExtractor = {(item,index)=> item.id}
                    renderItem={({item}) => console.log(data)}
                />
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