import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Ilustrations from '../../assets/image/ilustrations_welcome.svg';

const Welcome = () => {
    return (
        <View style={styles.container}>
            <View style={styles.wrapperImg}>
                <Ilustrations width={320} height={250} />
            </View>
            <Text style={styles.txtTitle}>Selamat Datang!</Text>
            <Text style={styles.txtContent}>Silahkan nikmati layanan kami, namun sebelum itu dimohon untuk Login terlebih dahulu jika sudah memiliki akun.</Text>
            <TouchableOpacity>
                <View style={styles.bgButton}>
                    <Text style={styles.txtButton}>Login</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    txtTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 8,
    },
    txtContent: {
        textAlign: 'center',
        fontSize: 14,
        marginTop: 8,
    },
    wrapperImg: {
        alignItems: 'center',
    },
    bgButton: {
        backgroundColor: '#6C63FF',
        borderRadius: 8,
        paddingVertical: 10,
        marginTop: 24,
    },
    txtButton: {
        fontSize: 18,
        fontWeight: '600',
        color: '#FFFFFF',
        textAlign: 'center',
    }
});

export default Welcome;
