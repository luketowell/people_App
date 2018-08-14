//Imprt a library to create a component
import React from 'react';
import { Text, View } from 'react-native';


//Create a component
const Header = (props) => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    textStyle: {
        fontSize: 20,
        color: 'black'  
    },
    viewStyle: {
        marginTop: 18,
        height: 65,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'white',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'        
    }
};

//Render it to the device
export { Header };
