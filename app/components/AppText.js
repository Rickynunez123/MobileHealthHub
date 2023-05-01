import React from 'react';
// imrn
import { Text } from 'react-native';
import defaultText from '../config/styles'

function AppText({ children, style}) {
    return (
        <Text style={[defaultText.text, style]}>{children}</Text>
    );
}



export default AppText;