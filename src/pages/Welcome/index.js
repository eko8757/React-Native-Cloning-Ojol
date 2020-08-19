import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Welcome = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.txtTitle}>Welcome Screen</Text>
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
    },
});

export default Welcome;
