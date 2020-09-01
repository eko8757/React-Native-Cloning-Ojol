import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { motorCycle, vehicle, taxi } from '../../assets';

const Feed = () => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.wrapperImages}>
                <Image
                    source={motorCycle}
                    style={styles.imagesIcons}
                />
                <Text style={styles.textIcons}>Ojol-Bike</Text>
            </View>
            <View style={styles.wrapperImages}>
                <Image
                    source={vehicle}
                    style={styles.imagesIcons}
                />
                <Text style={styles.textIcons}>Ojol-Car</Text>
            </View>
            <View style={styles.wrapperImages}>
                <Image
                    source={taxi}
                    style={styles.imagesIcons}
                />
                <Text style={styles.textIcons}>Ojol-Taxi</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    wrapperImages: {
        borderWidth: 1,
        width: 90,
        height: 90,
        padding: 4,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        margin: 8,
        backgroundColor: 'white',
    },
    imagesIcons: {
        width: 50,
        height: 50,
    },
    textIcons: {
        fontSize: 14,
        fontWeight: 'bold',
    },
});

export default Feed;