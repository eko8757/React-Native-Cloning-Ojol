import React from 'react'
import { StyleSheet, Text, TextInput } from 'react-native'
import { colors } from '../../../utils';

const Input = ({placeholder, ...rest}) => {
    return (
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            placeholderTextColor={colors.colorPrimary}
            {...rest}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: colors.colorPrimary,
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 16,
        fontSize: 14,
        color: colors.colorText.colorTextDark,
    },
});

export default Input;
