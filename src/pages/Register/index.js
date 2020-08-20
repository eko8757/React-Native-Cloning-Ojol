import React from 'react';
import { Text, View } from 'react-native';
import { Input } from '../../components';

const Register = () => {
    return (
        <View style={styles.wrapper.page}>
            <Text>Register Page</Text>
            <View style={styles.wrapper.space(48)} />
            <Input placeholder="Nama.." />
            <View style={styles.wrapper.space(16)} />
            <Input placeholder="Email.." />
            <View style={styles.wrapper.space(16)} />
            <Input placeholder="Password.." />
            <View style={styles.wrapper.space(16)} />
            <Input placeholder="Password Verification.." />
        </View>
    );
};

const styles = {
    wrapper: {
        page: {
            flex: 1,
            padding: 20,
            backgroundColor: 'white',
        },
        space: value => {
            return {
                height: value,
            };
        },
    },
};

export default Register;
