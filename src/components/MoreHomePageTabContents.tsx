import React, { useState } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  FlatList,
  Linking,
} from 'react-native';
import Colors from '../common/Colors';
import Fonts from '../common/Fonts';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { AppBottomSheetTouchableWrapper } from '../components/AppBottomSheetTouchableWrapper';

export default function MoreHomePageTabContents(props) {
  const [addData, setAddData] = useState([
    {
      title: 'Friends and Family',
      image: require('../assets/images/icons/addressbook.png'),
      info: `View and manage your contacts`,
    },
    {
      title: 'Funding Sources',
      image: require('../assets/images/icons/existing_saving_method.png'),
      info: 'Buying methods integrated in your wallet',
    },
    {
      title: `Hexa Community (Telegram)`,
      image: require('../assets/images/icons/telegram.png'),
      info: `Questions, feedback and more`,
    },
    {
      title: 'Wallet Settings',
      image: require('../assets/images/icons/settings.png'),
      info: `Wallet setting and preferences`,
    },
    // {
    //     title: `All accounts and funds`, image: require( '../assets/images/icons/accounts.png' ), info: `View and manage all accounts and funds`,
    // },
  ]);

  const openLink = (url) => {
    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: " + url);
      }
    });
  };

  return (
    <View style={{ ...styles.modalContentContainer, height: '100%' }}>
      <View>
        <FlatList
          data={addData}
          ItemSeparatorComponent={() => (
            <View style={{ backgroundColor: Colors.white }}>
              <View style={styles.separatorView} />
            </View>
          )}
          renderItem={({ item }) => {
            return <AppBottomSheetTouchableWrapper
              onPress={() => props.onPressElements(item)}
              style={styles.addModalView}
            >
              <View style={styles.modalElementInfoView}>
                <View style={{ justifyContent: 'center' }}>
                  <Image
                    source={item.image}
                    style={{ width: 25, height: 25, resizeMode: 'contain' }}
                  />
                </View>
                <View style={{ justifyContent: 'center', marginLeft: 10 }}>
                  <Text style={styles.addModalTitleText}>{item.title} </Text>
                  <Text style={styles.addModalInfoText}>{item.info}</Text>
                </View>
              </View>
            </AppBottomSheetTouchableWrapper>
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          elevation: 10,
          shadowColor: Colors.borderColor,
          shadowOpacity: 10,
          shadowOffset: { width: 2, height: 2 },
          backgroundColor: Colors.white,
          justifyContent: 'space-around',
          height: 40,
          alignItems: 'center',
          marginLeft: 10,
          marginRight: 10,
          paddingLeft: 10,
          paddingRight: 10,
          marginTop: 'auto',
          marginBottom: hp('14%'),
        }}
      >
        <AppBottomSheetTouchableWrapper
          onPress={() => openLink('http://hexawallet.io/faq')}
        >
          <Text style={styles.addModalTitleText}>FAQs</Text>
        </AppBottomSheetTouchableWrapper>

        <View
          style={{ height: 20, width: 1, backgroundColor: Colors.borderColor }}
        />

        <AppBottomSheetTouchableWrapper
          onPress={() => openLink('https://hexawallet.io/terms-of-service/')}
        >
          <Text style={styles.addModalTitleText}>Terms of Service</Text>
        </AppBottomSheetTouchableWrapper>

        <View
          style={{ height: 20, width: 1, backgroundColor: Colors.borderColor }}
        />

        <AppBottomSheetTouchableWrapper
          onPress={() => openLink('http://hexawallet.io/privacy-policy')}
        >
          <Text style={styles.addModalTitleText}>Privacy Policy</Text>
        </AppBottomSheetTouchableWrapper>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContentContainer: {
    height: '100%',
    backgroundColor: Colors.white,
  },
  separatorView: {
    marginLeft: 15,
    marginRight: 15,
    height: 2,
    backgroundColor: Colors.backgroundColor,
  },
  addModalView: {
    backgroundColor: Colors.white,
    padding: hp('1%'),
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
  },
  addModalTitleText: {
    color: Colors.blue,
    fontSize: RFValue(14),
    fontFamily: Fonts.FiraSansRegular
  },
  addModalInfoText: {
    color: Colors.textColorGrey,
    fontSize: RFValue(11),
    marginTop: 5,
    fontFamily: Fonts.FiraSansRegular
  },
  modalElementInfoView: {
    margin: 10,
    height: hp('5%'),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
