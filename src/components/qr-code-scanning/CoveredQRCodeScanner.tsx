import React, { useRef, useState } from 'react'
import { ImageBackground, ImageSourcePropType, StyleSheet, View } from 'react-native'
import { BarCodeReadEvent, RNCamera } from 'react-native-camera'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { useDispatch } from 'react-redux'
import { setIsPermissionGiven } from '../../store/actions/preferences'
import { AppBottomSheetTouchableWrapper } from '../AppBottomSheetTouchableWrapper'
import CameraUnauthorized from '../CameraUnauthorized'

export type Props = {
  containerStyle?: Record<string, unknown>;
  coverImageSource?: ImageSourcePropType;
  onCodeScanned: ( event: BarCodeReadEvent ) => void;
};

// TODO: Make the styling here a bit more readable 🙂.
const CameraFrameIndicators: React.FC = () => {
  return (
    <>
      <View style={styles.view1}>
        <View style={styles.view2} />
        <View style={styles.view3} />
      </View>

      <View style={styles.view4}>
        <View style={styles.view5} />
        <View style={styles.view6} />
      </View>
    </>
  )
}

const CoveredQRCodeScanner: React.FC<Props> = ( {
  containerStyle = {
  },
  coverImageSource = require( '../../assets/images/icons/iPhone-QR.png' ),
  onCodeScanned,
}: Props ) => {
  const [ isCameraOpen, setIsCameraOpen ] = useState( true )
  const cameraRef = useRef<RNCamera>()
  const dispatch = useDispatch()

  if ( isCameraOpen ) {
    return <View style={{
      ...styles.rootContainer, ...containerStyle
    }}>
      <RNCamera
        ref={cameraRef}
        style={{
          flex: 1,
        }}
        onBarCodeRead={( event: BarCodeReadEvent ) => {
          onCodeScanned( event )
          setIsCameraOpen( false )
        }}
        captureAudio={false}
        notAuthorizedView={<CameraUnauthorized/>}
      >
        <CameraFrameIndicators />
      </RNCamera>
    </View >
  } else {
    return <AppBottomSheetTouchableWrapper onPress={() => {
      setIsCameraOpen( true )
      dispatch( setIsPermissionGiven( true ) )
    }} >
      <ImageBackground
        source={coverImageSource}
        style={{
          ...styles.rootContainer, ...containerStyle
        }}
      >
        <CameraFrameIndicators />
      </ImageBackground>
    </AppBottomSheetTouchableWrapper>
  }
}

const styles = StyleSheet.create( {
  rootContainer: {
    overflow: 'hidden',
    borderRadius: 20,
    alignSelf: 'center',
    width: widthPercentageToDP( 90 ),
    height: widthPercentageToDP( 90 ),
  },
  view1:{
    flexDirection: 'row',
    paddingTop: 12,
    paddingRight: 12,
    paddingLeft: 12,
    width: '100%'
  },
  view2: {
    borderLeftWidth: 1,
    borderTopColor: 'white',
    borderLeftColor: 'white',
    height: heightPercentageToDP( '5%' ),
    width: heightPercentageToDP( '5%' ),
    borderTopWidth: 1
  },
  view3:{
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderRightColor: 'white',
    borderTopColor: 'white',
    height: heightPercentageToDP( '5%' ),
    width: heightPercentageToDP( '5%' ),
    marginLeft: 'auto'
  },
  view4: {
    marginTop: 'auto',
    flexDirection: 'row',
    paddingBottom: 12,
    paddingRight: 12,
    paddingLeft: 12,
    width: '100%',
  },
  view5: {
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    borderLeftColor: 'white',
    height: heightPercentageToDP( '5%' ),
    width: heightPercentageToDP( '5%' ),
  },
  view6: {
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderRightColor: 'white',
    borderBottomColor: 'white',
    height: heightPercentageToDP( '5%' ),
    width: heightPercentageToDP( '5%' ),
    marginLeft: 'auto',
  }
} )

export default CoveredQRCodeScanner
