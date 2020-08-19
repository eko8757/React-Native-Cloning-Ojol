import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Ilustrations from '../../assets/image/ilustrations_welcome.svg';
import ActionButton from './ActionButton';
import { colors } from '../../utils';

const Welcome = () => {
    return (
        <View style={styles.wrapper.page}>
            <View style={styles.ilustrations}>
                <Ilustrations width={320} height={250} />
            </View>
            <Text style={styles.text.txtTitle}>Selamat Datang!</Text>
            <Text style={styles.text.txtContent}>Silahkan nikmati layanan kami, namun sebelum itu dimohon untuk Login terlebih dahulu jika sudah memiliki akun.</Text>
            <ActionButton title="Login" />
            <ActionButton title="Register" />
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
    ilustrations: {
        alignItems: 'center',
    },
};

export default Welcome;
