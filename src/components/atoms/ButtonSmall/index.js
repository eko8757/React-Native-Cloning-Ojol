import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { colors } from '../../../utils';

const ButtonSmall = ({title, onPress}) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = {
    button: {
        backgroundColor: colors.colorPrimaryDark,
        borderRadius: 4,
        paddingVertical: 10,
        paddingHorizontal: 14,
        marginTop: 12,
        alignSelf: 'flex-end',
    },
    text: {
        fontSize: 14,
        fontWeight: '600',
        color: 'white',
        textAlign: 'center',
    }
}

export default ButtonSmall;
