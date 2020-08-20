import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { colors } from '../../../utils';

const Button = ({title, onPress}) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = {
    button: {
        backgroundColor: colors.colorPrimary,
        borderRadius: 8,
        paddingVertical: 10,
        marginTop: 24,
    },
    text: {
        fontSize: 18,
        fontWeight: '600',
        color: 'white',
        textAlign: 'center',
    }
}

export default Button;
