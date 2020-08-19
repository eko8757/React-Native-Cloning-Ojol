import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { colors } from '../../../utils';

const Button = ({title}) => {
    return (
        <TouchableOpacity style={styles.bgButton}>
            <Text style={styles.txtButton}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    bgButton: {
        backgroundColor: colors.colorPrimary,
        borderRadius: 8,
        paddingVertical: 10,
        marginTop: 24,
    },
    txtButton: {
        fontSize: 18,
        fontWeight: '600',
        color: 'white',
        textAlign: 'center',
    }
});

export default Button;
