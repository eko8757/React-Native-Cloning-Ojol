import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native';
import { colors } from '../../utils';
import { 
    ojolRide,
    ojolCar,
    ojolBlueBird,
    ojolSend,
    ojolDeals,
    ojolPulsa,
    ojolFood,
    ojolMore,
    ojolSearch,
    ojolPromo,
    ojolPay,
    ojolNearby,
    ojolTopUp,
    ojolMorePay,
    sepakBola,
    ojolPayLogo
} from '../../assets';
import ButtonBanner from './ButtonBanner';

const Home = () => {
    return (
        <View style={{flex: 1}}>
            <ScrollView style={styles.container}>
                {/* search */}
                <View style={styles.search}>
                    <View style={styles.wrapperSearch}>
                        <TextInput placeholder="Search.." style={styles.txtInput}/>
                        <Image source={ojolSearch} style={styles.wrapperImgSearch}/>
                    </View>
                    <View style={styles.promo}>
                        <Image source={ojolPromo}/>
                    </View>
                </View>
                {/* ojol pay */}
                <View>
                    <View style={styles.oPaySection}>
                        <Image source={ojolPayLogo} />
                        <Text style={styles.txtOpay}>Rp. 50.000</Text>
                    </View>
                    <View style={styles.menuPay}>
                        <View style={styles.menuPay2}>
                            <Image source={ojolPay}/>
                            <Text style={styles.txtOpay2}>Pay</Text>
                        </View>
                        <View style={styles.menuPay2}>
                            <Image source={ojolNearby}/>
                            <Text style={styles.txtOpay2}>Nearby</Text>
                        </View>
                        <View style={styles.menuPay2}>
                            <Image source={ojolTopUp}/>
                            <Text style={styles.txtOpay2}>Top-Up</Text>
                        </View>
                        <View style={styles.menuPay2}>
                            <Image source={ojolMorePay}/>
                            <Text style={styles.txtOpay2}>More</Text>
                        </View>
                    </View>
                </View>
                {/* menu */}
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
                <View style={styles.divider}></View>
                {/* news section */}
                <View style={styles.wrapperBanner}>
                    <View>
                        <Image source={sepakBola} style={styles.imgBanner}/>
                        <View style={styles.imgBanner2}/>
                    </View>
                    <View style={styles.wrapperTxtBanner}>
                        <Text style={styles.textBanner1}>OJOL-NEWS</Text>
                        <Text style={styles.textBanner2}>Lorhbsdjfhb jbsjdfsu hbjshdfsu hiiu??</Text>
                        <ButtonBanner
                            title="READ" 
                            onPress={() => alert('Read')}
                        />
                    </View>
                </View>
            </ScrollView>
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
        color: colors.colorText.colorTextDark,
    },
    txtInput: {
        borderWidth: 1,
        borderColor: colors.colorIconBorder,
        borderRadius: 25,
        height: 40,
        fontSize: 12,
        paddingLeft: 45,
        paddingRight: 20,
        marginRight: 18,
    },
    search: {
        marginHorizontal: 17,
        flexDirection: 'row',
        marginTop: 16,
    },
    wrapperSearch: {
        flex: 1,
        position: 'relative',
    },
    wrapperImgSearch: {
        position: 'absolute',
        top: 7,
        left: 12,
    },
    promo: {
        width: 35,
        alignItems: 'center',
        justifyContent: 'center',
    },
    oPaySection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: colors.colorPrimary,
        marginHorizontal: 17,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        padding: 14,
        marginTop: 8,
    },
    txtOpay: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
    },
    menuPay: {
        flexDirection: 'row',
        marginHorizontal: 17,
        justifyContent: 'space-around',
        backgroundColor: colors.colorPrimaryDark,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        paddingBottom: 14,
        paddingTop: 20,
    },
    txtOpay2: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    menuPay2: {
        flex: 1,
        alignItems: 'center',
    },
    divider: {
        height: 17,
        backgroundColor: colors.colorDivider,
    },
    wrapperBanner: {
        paddingTop: 16,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: colors.colorDivider,
    },
    imgBanner: {
        height: 170,
        width: '100%',
        borderRadius: 8,
    },
    imgBanner2: {
        height: '100%',
        width: '100%',
        borderRadius: 8,
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'black',
        opacity: 0.2,
    },
    wrapperTxtBanner: {
        paddingTop: 16,
        paddingBottom: 20,
    },
    textBanner1: {
        color: colors.colorText.colorTextDark,
        fontSize: 16,
        fontWeight: 'bold',
    },
    textBanner2: {
        color: colors.colorText.colorTextGrey,
        fontSize: 14,
        fontWeight: '500',
    },
});

export default Home;