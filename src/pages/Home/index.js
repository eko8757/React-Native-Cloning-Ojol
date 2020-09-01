import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { colors } from '../../utils';
import { 
    ojolRide,
    ojolCar,
    ojolBlueBird,
    ojolSend,
    ojolDeals,
    ojolPulsa,
    ojolFood,
    ojolMore
} from '../../assets';

const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.wrapperContainer}>
                    <View style={styles.wrapperIcons}>
                        <View style={styles.wrapperIconsTop}>
                            <Image source={ojolRide} />
                        </View>
                        <Text style={styles.textIcons}>OJOL-RIDE</Text>
                    </View>
                    <View style={styles.wrapperIcons}>
                        <View style={styles.wrapperIconsTop}>
                            <Image source={ojolCar} />
                        </View>
                        <Text style={styles.textIcons}>OJOL-CAR</Text>
                    </View>
                    <View style={styles.wrapperIcons}>
                        <View style={styles.wrapperIconsTop}>
                            <Image source={ojolBlueBird} />
                        </View>
                        <Text style={styles.textIcons}>OJOL-BLUEBIRD</Text>
                    </View>
                    <View style={styles.wrapperIcons}>
                        <View style={styles.wrapperIconsTop}>
                            <Image source={ojolSend} />
                        </View>
                        <Text style={styles.textIcons}>OJOL-SEND</Text>
                    </View>
                </View>
                <View style={styles.wrapperContainer}>
                    <View style={styles.wrapperIcons}>
                        <View style={styles.wrapperIconsBottom}>
                            <Image source={ojolDeals} />
                        </View>
                        <Text style={styles.textIcons}>OJOL-DEALS</Text>
                    </View>
                    <View style={styles.wrapperIcons}>
                        <View style={styles.wrapperIconsBottom}>
                            <Image source={ojolPulsa} />
                        </View>
                        <Text style={styles.textIcons}>OJOL-PULSA</Text>
                    </View>
                    <View style={styles.wrapperIcons}>
                        <View style={styles.wrapperIconsBottom}>
                            <Image source={ojolFood} />
                        </View>
                        <Text style={styles.textIcons}>OJOL-FOOD</Text>
                    </View>
                    <View style={styles.wrapperIcons}>
                        <View style={styles.wrapperIconsBottom}>
                            <Image source={ojolMore} />
                        </View>
                        <Text style={styles.textIcons}>OJOL-MORE</Text>
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
        marginTop: 18,
    },
    wrapperContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 18,
    },
    wrapperIcons: {
        width: '25%',
        alignItems: 'center',
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

export default Home;