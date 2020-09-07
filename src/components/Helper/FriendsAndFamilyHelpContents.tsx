import React, { useState, useRef } from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Colors from '../../common/Colors';
import Fonts from '../../common/Fonts';
import { RFValue } from 'react-native-responsive-fontsize';
import { AppBottomSheetTouchableWrapper } from '../AppBottomSheetTouchableWrapper';
import { ScrollView } from 'react-native-gesture-handler';
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function FriendsAndFamilyHelpContents(props) {
    const scrollViewRef = useRef();
    return (
        <View style={styles.modalContainer}>
            <AppBottomSheetTouchableWrapper style={{ justifyContent: 'center', alignItems: 'center' }}
                activeOpacity={10}
                onPress={() => props.titleClicked && props.titleClicked()}>
                <Text
                    style={{
                        color: Colors.white,
                        fontFamily: Fonts.FiraSansMedium,
                        fontSize: RFValue(20),
                        marginTop: hp('1%'),
                        marginBottom: hp('1%'),
                    }}
                >
                    Recovery Key with Friends and Family
                </Text>
            </AppBottomSheetTouchableWrapper>
            <View
                style={{
                    backgroundColor: Colors.homepageButtonColor,
                    height: 1,
                    marginLeft: wp('5%'),
                    marginRight: wp('5%'),
                    marginBottom: hp('1%'),
                }}
            />

            <ScrollView
                ref={scrollViewRef}
                style={styles.modalContainer}
                snapToInterval={hp('89%')}
                decelerationRate='fast'
            >
                <View style={{ height: hp('89%'), paddingBottom: hp('6%'), justifyContent: 'space-between' }}>
                    <Text
                        style={{
                            textAlign: 'center',
                            color: Colors.white,
                            fontSize: RFValue(13),
                            fontFamily: Fonts.FiraSansRegular,
                            marginTop: hp('2%')
                        }}
                    >
                        You can send two of your five Recovery Keys{'\n'}to your Friends and Family chosen from{'\n'}your Address Book. You can then either share{'\n'}a QR code or a link so they can open{'\n'}Hexa and act as your Keeper
                    </Text>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            source={require('../../assets/images/icons/FnF_recovery_key.png')}
                            style={{ width: wp('90%'), height: wp('70%'), resizeMode: 'contain' }}
                        />
                    </View>
                    <Text
                        style={{
                            textAlign: 'center',
                            color: Colors.white,
                            fontSize: RFValue(13),
                            fontFamily: Fonts.FiraSansRegular,
                        }}
                    >
                        Recovery Keys are sent through secure, encrypted{'\n'}channels, most frequently used in Internet{'\n'}communications. These channels are{'\n'}encrypted end-to-end, enabling only the receiver{'\n'}and sender to decrypt their information,{'\n'}and are called ECDH channels.
                {/* Recovery Keys are sent through ECDH channels,{'\n'}most frequently used in Internet{'\n'}communication. ECDH communications are{'\n'}encrypted end-to-end, enabling only the receiver{'\n'}and sender to decrypt information */}
                    </Text>
                    <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => {
                        scrollViewRef.current && scrollViewRef.current.scrollTo({ x: 0, y: hp('85%'), animated: true });
                    }}>
                        <FontAwesome name="angle-double-down" color={Colors.white} size={40} />
                    </TouchableOpacity>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <View
                            style={{
                                borderStyle: 'dotted',
                                borderWidth: 1,
                                borderRadius: 1,
                                borderColor: Colors.white,
                                width: wp('70%'),
                                height: 0,
                            }}
                        />
                    </View>
                </View>
                <View style={{ height: hp('89%'), paddingTop: hp('1%'), paddingBottom: hp('6%') }}>
                    <Text
                        style={{
                            textAlign: 'center',
                            color: Colors.white,
                            fontSize: RFValue(13),
                            fontFamily: Fonts.FiraSansRegular,
                        }}
                    >
                        Creation of ECDH channels is facilitated by the{'\n'}BitHyve Relay Server. After creation, however,{'\n'}the Relay Server (and others on the internet) is{'\n'}blind to all communications between the{'\n'}two parties
                    </Text>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('5%'), marginBottom: hp('5%') }}>
                        <Image
                            source={require('../../assets/images/icons/FnF_recovery_key_2.png')}
                            style={{ width: wp('90%'), height: wp('70%'), resizeMode: 'contain' }}
                        />
                    </View>
                    <Text
                        style={{
                            textAlign: 'center',
                            color: Colors.white,
                            fontSize: RFValue(13),
                            fontFamily: Fonts.FiraSansRegular,
                            marginBottom: hp('5%')
                        }}
                    >
                        Personal Recovery Keys need to be available at{'\n'}all times to enable recovery. If your Personal{'\n'}Keys are not available, you require all{'\n'}three Recovery Keys not in your possession to{'\n'}enable recovery
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    modalContainer: {
        height: '100%',
        backgroundColor: Colors.blue,
        alignSelf: 'center',
        width: '100%',
        elevation: 10,
        shadowColor: Colors.borderColor,
        shadowOpacity: 10,
        shadowOffset: { width: 0, height: 2 },
    },
});