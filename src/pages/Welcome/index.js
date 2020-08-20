import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import ActionButton from './ActionButton';
import { colors } from '../../utils';
import { ilustrationsWelcome } from '../../assets';

const Welcome = ({navigation}) => {
    const handleIntent = screen => {
        navigation.navigate(screen);
    };
    return (
        <View style={styles.wrapper.page}>
            <View style={styles.wrapper.ilustrations}>
                <Image source={ilustrationsWelcome} style={styles.image} />
            </View>
            <Text style={styles.text.txtTitle}>Selamat Datang!</Text>
            <Text style={styles.text.txtContent}>Silahkan nikmati layanan kami, namun sebelum itu dimohon untuk Login terlebih dahulu jika sudah memiliki akun.</Text>
            <ActionButton 
                title="Login" 
                onPress={() => handleIntent('Login')}
            />
            <ActionButton
                title="Register"
                onPress={() => handleIntent('Register')}
            />
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
        ilustrations: {
            alignItems: 'center',
        },
    },
    text: {
        txtTitle: {
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 18,
            marginTop: 8,
            color: colors.colorText.colorTextDark,
        },
        txtContent: {
            textAlign: 'center',
            fontSize: 14,
            marginTop: 8,
            color: colors.colorText.colorTextDark,
        },
    },
    image: {
        width: 330,
        height: 260,
    },
};

export default Welcome;
