import React, { useState } from 'react'
import { Text, View, ScrollView } from 'react-native'
import { Input, Button } from '../../components';

const Login = () => {

    const [form, setForm] = useState ({
        email: '',
        password: '',
    });

    const sendData = () => {
        console.log("Send Data Login: ", form);
    };

    const onChangeTextInput = (value, input) => {
        setForm({
            ...form,
            [input]: value,
        });
    };

    return (
        <View style={styles.wrapper.page}>
            <ScrollView>
                <View style={styles.wrapper.space(24)} />
                <Input 
                    placeholder="Email.."
                    onChangeText={(value) => onChangeTextInput(value, 'email')}
                />
                <View style={styles.wrapper.space(16)} />
                <Input
                    placeholder="Password.."
                    onChangeText={(value) => onChangeTextInput(value, 'password')}
                    secureTextEntry={true}
                />
                <View style={styles.wrapper.space(32)} />
                <Button title="Login" onPress={sendData} />
            </ScrollView>
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
