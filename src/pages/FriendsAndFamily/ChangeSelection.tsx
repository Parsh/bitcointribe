import React, { useState, useContext } from 'react'
import {
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  StyleSheet,
} from 'react-native'
import Colors from '../../common/Colors'
import Fonts from '../../common/Fonts'
import { RFValue } from 'react-native-responsive-fontsize'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import CardWithRadioBtn from '../../components/CardWithRadioBtn'
import BottomInfoBox from '../../components/BottomInfoBox'
import { translations } from '../../common/content/LocContext'

export default function ChangeSelection( props ) {
  const strings = translations[ 'f&f' ]
  const common = translations[ 'common' ]

  const [ activeIndex, setActiveIndex ] = useState( 0 )
  return (
    <SafeAreaView style={{
      backgroundColor: Colors.backgroundColor
    }}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {props.closeBottomSheet()}}
        style={{
          width: wp( 7 ), height: wp( 7 ), borderRadius: wp( 7/2 ),
          alignSelf: 'flex-end',
          backgroundColor: Colors.lightBlue, alignItems: 'center', justifyContent: 'center',
          marginTop: wp( 3 ), marginRight: wp( 3 )
        }}
      >
        <FontAwesome name="close" color={Colors.white} size={19} style={{
        // marginTop: hp( 0.5 )
        }} />
      </TouchableOpacity>
      <View style={{
        // alignSelf: 'baseline'
      }}>
        <View style={{
          marginLeft: wp( 6 ),
        }}>
          <Text style={styles.modalTitleText}>{'Change'}</Text>
          <Text style={{
            ...styles.modalInfoText,
            marginTop: wp( 1.5 ),
            marginBottom: wp( 3 ),
            marginRight: wp( 13 )
          }}>{'Send the gift to someone else or change the confirmation method'}</Text>
        </View>
        <CardWithRadioBtn
          mainText={'Change contact'}
          subText={'Send the gift to a different person'}
          isSelected={activeIndex === 0}
          setActiveIndex={setActiveIndex}
          index={0}
          geticon={''}
          italicText={''}
          boldText={''}
          changeBgColor={true}
        />
        <CardWithRadioBtn
          mainText={'Change confirmation method'}
          subText={'Use 2FA instead'}
          isSelected={activeIndex === 1}
          setActiveIndex={setActiveIndex}
          index={1}
          geticon={''}
          italicText={''}
          boldText={''}
          changeBgColor={true}
        />
      </View>
      <BottomInfoBox
        // title={common.note}
        infoText={''}
        // backgroundColor={Colors.white}
      />
      <View style={{
        marginTop: 0, marginBottom: hp( 2 )
      }}>
        <TouchableOpacity
          onPress={() => {
            props.onConfirm( activeIndex )
            //props.navigation.navigate('SettingGetNewPin')
            //PinChangeSuccessBottomSheet.current.snapTo(1);
          }}
          style={{
            ...styles.proceedButtonView,
            backgroundColor:Colors.blue,
          }}
        >
          <Text style={styles.proceedButtonText}>{common.proceed}</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create( {
  bottomNoteInfoText: {
    color: Colors.textColorGrey,
    fontSize: RFValue( 12 ),
    fontFamily: Fonts.Regular,
    marginLeft: wp( 8 ),
    marginVertical: wp( 4 ),
    width: '85%'
  },
  statusIndicatorView: {
    flexDirection: 'row',
    marginLeft: 'auto',
    marginHorizontal: wp( '6%' ),
    marginBottom: hp( 1 ),
    // marginTop: hp( 9 )
  },
  statusIndicatorActiveView: {
    height: 5,
    width: 25,
    backgroundColor: Colors.blue,
    borderRadius: 10,
    marginLeft: 5,
  },
  statusIndicatorInactiveView: {
    width: 5,
    backgroundColor: Colors.lightBlue,
    borderRadius: 10,
    marginLeft: 5,
  },
  modalBoldText: {
    color: Colors.textColorGrey,
    fontSize: RFValue( 12 ),
    fontFamily: Fonts.Medium,
    letterSpacing: 0.6,
    lineHeight: 18
  },
  modalTitleText: {
    color: Colors.blue,
    fontSize: RFValue( 18 ),
    fontFamily: Fonts.Regular,
    letterSpacing: 0.54
    // width: wp( 30 ),
  },
  modalInfoText: {
    marginRight: wp( 4 ),
    color: Colors.textColorGrey,
    fontSize: RFValue( 12 ),
    fontFamily: Fonts.Regular,
    textAlign: 'justify',
    letterSpacing: 0.6,
    lineHeight: 18
  },
  keyPadRow: {
    flexDirection: 'row',
    height: hp( '8%' ),
  },
  errorText: {
    fontFamily: Fonts.MediumItalic,
    color: Colors.red,
    fontSize: RFValue( 11, 812 ),
    fontStyle: 'italic',
  },
  keyPadElementTouchable: {
    flex: 1,
    height: hp( '8%' ),
    fontSize: RFValue( 18 ),
    justifyContent: 'center',
    alignItems: 'center',
  },
  keyPadElementText: {
    color: Colors.blue,
    fontSize: RFValue( 25 ),
    fontFamily: Fonts.Regular,
    fontStyle: 'normal',
  },
  proceedButtonView: {
    marginLeft: wp( 6 ),
    height: wp( '13%' ),
    width: wp( '30%' ),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    elevation: 10,
    shadowColor: Colors.shadowBlue,
    shadowOpacity: 1,
    shadowOffset: {
      width: 15, height: 15
    },
    marginBottom: hp( '1%' ),
  },
  proceedButtonText: {
    color: Colors.white,
    fontSize: RFValue( 13 ),
    fontFamily: Fonts.Medium,
  },
  passcodeTextInputText: {
    color: Colors.blue,
    fontWeight: 'bold',
    fontSize: RFValue( 13 ),
  },
  textStyles: {
    color: Colors.black,
    fontSize: RFValue( 13 ),
    textAlign: 'center',
    lineHeight: 18,
  },
  textFocused: {
    color: Colors.black,
    fontSize: RFValue( 13 ),
    textAlign: 'center',
    lineHeight: 18,
  },
  textBoxStyles: {
    borderWidth: 0.5,
    height: wp( '13%' ),
    width: wp( '13%' ),
    borderRadius: 7,
    marginLeft: wp( 6 ),
    borderColor: Colors.borderColor,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
  textBoxActive: {
    borderWidth: 0.5,
    height: wp( '13%' ),
    width: wp( '13%' ),
    borderRadius: 7,
    marginLeft: wp( 6 ),
    elevation: 10,
    shadowColor: Colors.borderColor,
    shadowOpacity: 0.35,
    shadowOffset: {
      width: 0, height: 3
    },
    borderColor: Colors.borderColor,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
  passcodeTextInputView: {
    flexDirection: 'row',
    marginTop: hp( '1%' ),
    marginBottom: hp( '2%' ),
  },
  boldItalicText: {
    fontFamily: Fonts.MediumItalic,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  headerTitleText: {
    color: Colors.blue,
    fontSize: RFValue( 25 ),
    marginLeft: wp( 6 ),
    marginTop: hp( '10%' ),
    fontFamily: Fonts.Regular,
  },
  headerInfoText: {
    marginTop: hp( '2%' ),
    color: Colors.textColorGrey,
    fontSize: RFValue( 12 ),
    marginLeft: wp( 6 ),
    fontFamily: Fonts.Regular,
  },
} )
