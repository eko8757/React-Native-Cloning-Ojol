import React, {useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Welcome');
        }, 2000);
    });
    return (
        <View>
            <Text>Splash Page</Text>
        </View>
    );
};

const styles = StyleSheet.create({})

export default Splash;
