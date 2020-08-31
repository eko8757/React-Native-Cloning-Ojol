import React, { useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Input, Button } from '../../components';

const Register = () => {

    const [form, setForm] = useState ({
        name: '',
        email: '',
        password: '',
        password_verification: '',
    });

    const sendData = () => {
        console.log("Send Data: ", form);
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
                    placeholder="Nama.."
                    value={form.name}
                    onChangeText={(value) => onChangeTextInput(value, 'name')}
                />
                <View style={styles.wrapper.space(16)} />
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
                <View style={styles.wrapper.space(16)} />
                <Input
                    placeholder="Password Verification.."
                    value={form.password_verification}
                    onChangeText={(value) => onChangeTextInput(value, 'password_verification')}
                    secureTextEntry={true}
                />
                <View style={styles.wrapper.space(32)} />
                <Button title="Register" onPress={sendData}/>
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

export default Register;
