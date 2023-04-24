import React from 'react';
// imrn
import { Text, StyleSheet } from 'react-native';


function AppText({ children, style}) {
    return (
        <Text style={[styles.text, style]}>{children}</Text>
    );
}

// rns
const styles = StyleSheet.create({
    text: {
        fontSize: 20, 
        fontFamily: "Arial", 
        fontWeight:"500"

    }
})

export default AppText;