import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Input, Button } from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import { setForm } from '../../redux';
import auth from '@react-native-firebase/auth';
import {firebase} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const Register = ({navigation}) => {

    const {form} = useSelector(state => state.RegisterReducer);
    const dispatch = useDispatch();
    const firestore_ref=firestore().collection('Users')

    //register use firebase
    const sendData = () => {
        console.log("Send Data: ", form.email);
        auth()
            .createUserWithEmailAndPassword(form.email, form.password)
            .then(() => {
                alert('success');
                navigation.navigate('Home');
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    alert('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    alert('That email address is invalid!');
                }

                console.error(error);
            });
    };

    const onChangeTextInput = (value, input) => {
        dispatch(setForm(input, value));
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
