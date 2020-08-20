import React from 'react'
import { Text, View } from 'react-native'
import { Input } from '../../components';

const Login = () => {
    return (
        <View style={styles.wrapper.page}>
            <Text>Login Page</Text>
            <View style={styles.wrapper.space(48)} />
            <Input placeholder="Email.." />
            <View style={styles.wrapper.space(16)} />
            <Input placeholder="Password.." />
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

export default Login;
