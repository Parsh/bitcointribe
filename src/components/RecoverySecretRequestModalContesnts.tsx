import React from 'react'
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
  Platform,
} from 'react-native'
import Colors from '../common/Colors'
import Fonts from '../common/Fonts'
import { RFValue } from 'react-native-responsive-fontsize'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { AppBottomSheetTouchableWrapper } from './AppBottomSheetTouchableWrapper'

export default function RecoverySecretRequestModalContents( props ) {
  return (
    <View style={{
      ...styles.modalContentContainer, height: '100%'
    }}>
      <View>
        <View
          style={{
            ...styles.successModalHeaderView,
            marginRight: wp( '8%' ),
            marginLeft: wp( '8%' ),
          }}
        >
          <Text style={styles.modalTitleText}>{props.title}</Text>
          <Text style={{
            ...styles.modalInfoText, marginTop: wp( '1.5%' )
          }}>
            {props.infoText}
          </Text>
        </View>
        <View style={styles.box}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: hp( '2%' ),
            }}
          >
            <Image
              style={styles.successModalAmountImage}
              source={require( '../assets/images/icons/icon_wallet.png' )}
            />
            <Text style={styles.successModalWalletNameText}>{props.name}</Text>
          </View>
          <View style={styles.separator} />
          <View
            style={{
              marginTop: hp( '2%' ),
              marginLeft: wp( '2%' ),
              marginRight: wp( '2%' ),
            }}
          >
            <Text style={{
              ...styles.modalTitleText, fontSize: RFValue( 11 )
            }}>
              {props.subTitle}
            </Text>
            <Text style={{
              ...styles.modalInfoText
            }}>
              {props.subTitleInfo}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 'auto',
            alignItems: 'center',
          }}
        >
          <AppBottomSheetTouchableWrapper
            onPress={() => {
              props.onPressAccept()
            }}
            style={{
              ...styles.successModalButtonView
            }}
          >
            <Text style={styles.proceedButtonText}>
              {props.acceptButtonName}
            </Text>
          </AppBottomSheetTouchableWrapper>
          <AppBottomSheetTouchableWrapper
            onPress={() => props.onPressReject()}
            style={{
              height: wp( '13%' ),
              width: wp( '35%' ),
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{
              ...styles.proceedButtonText, color: Colors.blue
            }}>
              {props.rejectButtonName}
            </Text>
          </AppBottomSheetTouchableWrapper>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create( {
  modalContentContainer: {
    height: '50%',
    backgroundColor: Colors.white,
    borderTopLeftRadius: 10,
    borderLeftColor: Colors.borderColor,
    borderLeftWidth: 1,
    borderTopRightRadius: 10,
    borderRightColor: Colors.borderColor,
    borderRightWidth: 1,
    borderTopColor: Colors.borderColor,
    borderTopWidth: 1,
  },
  box: {
    backgroundColor: Colors.backgroundColor1,
    marginRight: wp( '5%' ),
    marginLeft: wp( '5%' ),
    paddingTop: hp( '2%' ),
    paddingBottom: hp( '2%' ),
    marginBottom: hp( '3%' ),
    borderRadius: 10,
    justifyContent: 'center',
  },
  successModalHeaderView: {
    marginTop: hp( '5%' ),
    marginBottom: hp( '3%' ),
  },
  modalTitleText: {
    color: Colors.blue,
    fontSize: RFValue( 18 ),
    fontFamily: Fonts.Medium,
  },
  modalInfoText: {
    color: Colors.textColorGrey,
    fontSize: RFValue( 11 ),
    fontFamily: Fonts.Regular,
  },
  successModalAmountView: {
    marginRight: wp( '10%' ),
    marginLeft: wp( '10%' ),
  },
  successModalWalletNameText: {
    color: Colors.black,
    fontSize: RFValue( 25 ),
    fontFamily: Fonts.Regular,
    textAlign: 'center',
  },
  successModalAmountImage: {
    width: wp( '15%' ),
    height: wp( '15%' ),
    marginRight: 15,
    marginLeft: 10,
    marginBottom: wp( '1%' ),
    resizeMode: 'contain',
  },
  successModalAmountText: {
    color: Colors.black,
    fontFamily: Fonts.Regular,
    fontSize: RFValue( 21 ),
    marginLeft: 5,
  },
  successModalAmountUnitText: {
    color: Colors.borderColor,
    fontFamily: Fonts.Regular,
    fontSize: RFValue( 11 ),
  },
  successModalAmountInfoView: {
    flex: 0.4,
    marginRight: wp( '10%' ),
    marginLeft: wp( '10%' ),
  },
  successModalButtonView: {
    height: wp( '13%' ),
    width: wp( '35%' ),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    elevation: 10,
    shadowColor: Colors.shadowBlue,
    shadowOpacity: 10,
    shadowOffset: {
      width: 0, height: 10
    },
    backgroundColor: Colors.blue,
    alignSelf: 'center',
    marginLeft: wp( '8%' ),
  },
  proceedButtonText: {
    color: Colors.white,
    fontSize: RFValue( 13 ),
    fontFamily: Fonts.Medium,
  },
  separator: {
    height: 2,
    marginLeft: wp( '2%' ),
    marginRight: wp( '2%' ),
    backgroundColor: Colors.borderColor,
  },
} )
