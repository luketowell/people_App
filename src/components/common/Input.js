import React from 'react';
import { TextInput, View, Text } from 'react-native';

 const Input = ({ placeholder, label, value, onChangeText, passwordInput }) => {
    const { inputContainer, labelStyle, inputStyle } = styles;

    return (

        <View style={inputContainer}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
            secureTextEntry={passwordInput}
            placeholder={placeholder}
            autoCorrect={false}
            value={value}
            onChangeText={onChangeText}
            style={inputStyle}
            />
        </View>
    );
};

 const styles = {
    inputContainer: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    labelStyle: {
        fontSize: 18,
        flex: 1,
        paddingLeft: 20
    },
    inputStyle: { 
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        lineHeight: 23,
        fontSize: 18,
        flex: 2,
        height: 20,
        width: 100
    }
};

export { Input };
