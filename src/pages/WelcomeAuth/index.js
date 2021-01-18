import React from 'react';
import {View, Text, Image} from 'react-native';
import { colors } from '../../utils';
import ActionButton from './ActionButton';
import {Obat, welcomeAuth} from '../../assets'

const WelcomeAuth = ({navigation}) => {
  const handleGoTo = (screen) => {
    navigation.navigate(screen)
  }
  return (
    <View
      style={styles.wrapper.page}>
      <View
        style={styles.wrapper.illustration}
      />
      <Obat
        // width={200}
        height={220}
        style={{marginBottom: 20}}
      />
      {/* <Image source={welcomeAuth} style={styles.wrapper.illustration}/> */}
      <Text
        style={styles.text.welcome}>
        Welcome to
      </Text>
      <Text
        style={styles.text.welcome}>
        SMART-HPV
      </Text>
      <Text
        style={styles.text.subtext}>
        Aplikasi yang membantu anda dalam menerima informasi yang berkaitan dengan HPV
      </Text>
      {/* <ActionButton desc="Silahkan Masuk, Jika anda sudah memiliki akun" title="Masuk" onPress={() => handleGoTo('Login')} /> */}
      <View style={styles.button.getting}>
        <ActionButton title="Mulai" onPress={() => handleGoTo('Login')} />
      </View>
    </View>
  );
};


const styles = {
    wrapper : {
        page : {
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            backgroundColor: '#b7d4ed'
        },
        illustration : {
            // width: 219,
            // height: 150,
            // marginBottom: 100,
        },
    },
    text: {
        welcome : {
            fontSize: 32,
            fontFamily: 'TypoGotikaBoldDemo',
            color: 'black',
            lineHeight: 40,
            letterSpacing: 3
            // marginBottom: 75,
            // marginTop: 75,
        },
        subtext : {
            fontSize: 18,
            fontFamily: 'TypoGotikaRegularDemo',
            color: 'black',
            lineHeight: 20,
            textAlign: 'center',
            paddingHorizontal: 20,
            marginTop: 30,
            // marginBottom: 100
        },
        
    },
    button: {
      getting: {
        // justifyContent: 'flex-end',
        position: 'absolute',
        alignItems: 'center',
        // left: '0%',
        bottom: 0,
        width: '100%'
        // bottom: 0,
      }
    }
};

export default WelcomeAuth;
