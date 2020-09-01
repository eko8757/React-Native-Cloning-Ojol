import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { colors } from '../../utils';
import { ojolRide } from '../../assets';

const Feed = () => {
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.wrapperContainer}>
                    <View>
                        <View style={styles.wrapperIconsTop}>
                            <Image source={ojolRide} />
                        </View>
                        <Text style={styles.textIcons}>OJOL-MENU</Text>
                    </View>
                    <View>
                        <View style={styles.wrapperIconsTop}>
                            <Image source={ojolRide} />
                        </View>
                        <Text style={styles.textIcons}>OJOL-MENU</Text>
                    </View>
                    <View>
                        <View style={styles.wrapperIconsTop}>
                            <Image source={ojolRide} />
                        </View>
                        <Text style={styles.textIcons}>OJOL-MENU</Text>
                    </View>
                    <View>
                        <View style={styles.wrapperIconsTop}>
                            <Image source={ojolRide} />
                        </View>
                        <Text style={styles.textIcons}>OJOL-MENU</Text>
                    </View>
                </View>
                <View style={styles.wrapperContainer}>
                    <View>
                        <View style={styles.wrapperIconsBottom}>
                            <Image source={ojolRide} />
                        </View>
                        <Text style={styles.textIcons}>OJOL-MENU</Text>
                    </View>
                    <View>
                        <View style={styles.wrapperIconsBottom}>
                            <Image source={ojolRide} />
                        </View>
                        <Text style={styles.textIcons}>OJOL-MENU</Text>
                    </View>
                    <View>
                        <View style={styles.wrapperIconsBottom}>
                            <Image source={ojolRide} />
                        </View>
                        <Text style={styles.textIcons}>OJOL-MENU</Text>
                    </View>
                    <View>
                        <View style={styles.wrapperIconsBottom}>
                            <Image source={ojolRide} />
                        </View>
                        <Text style={styles.textIcons}>OJOL-MENU</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    wrapper: {
        flexDirection: 'row',
        backgroundColor: 'white',
        flexWrap: 'wrap',
        marginHorizontal: 16,
        marginTop: 18,
    },
    wrapperContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 18,
    },
    wrapperIconsTop: {
        borderWidth: 1,
        borderColor: colors.colorIconBorder,
        width: 58,
        height: 58,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    wrapperIconsBottom: {
        borderWidth: 1,
        borderColor: colors.colorIconBorder,
        width: 58,
        height: 58,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    imagesIcons: {
        width: 50,
        height: 50,
    },
    textIcons: {
        fontSize: 10,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 6,
    },
});

export default Feed;