import React, { useState } from 'react'
import { Text, View, ScrollView } from 'react-native'
import { Input, Button } from '../../components';
import { setForm } from '../../redux';
import { useSelector, useDispatch } from 'react-redux';

const Login = () => {

    const {form} = useSelector(state => state.LoginReducer);
    const dispatch = useDispatch();

    const sendData = () => {
        console.log("Send Data Login: ", form);
    };

    const onChangeTextInput = (value, input) => {
        dispatch(setForm(input, value));
    };

    return (
        <View style={styles.wrapper.page}>
            <ScrollView>
                <View style={styles.wrapper.space(24)} />
                <Input 
                    placeholder="Email.."
                    value={form.email}
                    onChangeText={(value) => onChangeTextInput(value, 'email')}
                />
                <View style={styles.wrapper.space(16)} />
                <Input
                    placeholder="Password.."
                      value={form.password}
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
