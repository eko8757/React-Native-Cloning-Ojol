import React, {useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../utils';

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Welcome');
        }, 2000);
    });
    return (
        <View style={styles.wrapper}>
            <Text style={styles.text}>Splash Page</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: colors.colorPrimary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 32,
        fontWeight: '700',
        color: 'white',
        textAlign: 'center',
    },
});

export default Splash;
