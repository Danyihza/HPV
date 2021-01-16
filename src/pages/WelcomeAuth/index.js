import React from 'react';
import {View, Text, Image} from 'react-native';
import { colors } from '../../utils';
import ActionButton from './ActionButton';
import {welcomeAuth} from '../../assets'

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
      <Image source={welcomeAuth} style={styles.wrapper.illustration}/>
      <Text
        style={styles.text.welcome}>
        Selamat Datang
      </Text>
      <ActionButton desc="Silahkan Masuk, Jika anda sudah memiliki akun" title="Masuk" onPress={() => handleGoTo('Login')} />
      <ActionButton desc="Silahkan Daftar, Jika anda tidak memiliki akun" title="Daftar" onPress={() => handleGoTo('Register')} />
    </View>
  );
};


const styles = {
    wrapper : {
        page : {
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            backgroundColor: 'white'
        },
        illustration : {
            width: 219,
            height: 150,
            marginBottom: 10,
        },
    },
    text: {
        welcome : {
            fontSize: 18,
            fontWeight: 'bold',
            color: colors.default,
            marginBottom: 75,
        },
    },
};

export default WelcomeAuth;
