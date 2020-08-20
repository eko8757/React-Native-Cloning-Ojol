import React from 'react'
import { Text, View } from 'react-native'
import { Input } from '../../components';

const Login = () => {
    return (
        <View style={styles.wrapper.page}>
            <Text>Login Page</Text>
            <Input placeholder="Email.." />
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
    },
};

export default Login;
