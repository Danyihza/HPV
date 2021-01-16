import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Button, Input} from '../../components';
import {colors} from '../../utils';
import {IconBack, IllustrationLogin} from '../../assets';
import {ScrollView} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';
// import { GoogleSignin } from '@react-native-community/google-signin';

// GoogleSignin.configure({
//     webClientId:'185617302992-93onig2d561voqm5vmen3dd8pir3c75i.apps.googleusercontent.com',
// });

const Login = ({navigation}) => {
  const globalState = useSelector((state) => state);
  const [formRegister, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const sendData = () => {
    loginWithEmail(formRegister.email, formRegister.password);
  };

  const onInputChange = (value, input) => {
    setForm({
      ...formRegister,
      [input]: value,
    });
  };

  const emptyInput = () => {
    setForm({
      email: '',
      password: ''
    });
  };

  

  const goBack = () => {
    navigation.goBack();
  };

  const loginAnon = () => {
    auth()
    .signInAnonymously()
    .then(() => {
      console.log('User signed in anonymously');
      navigation.navigate('Home');
    })
    .catch(error => {
      if (error.code === 'auth/operation-not-allowed') {
        alert('Enable anonymous in your firebase console.');
        console.log('Enable anonymous in your firebase console.');
      }
      alert(error);
      console.error(error);
    });
  }

  const loginWithEmail = (email,password) => {
    if (email === '' || password === '') {
      alert('Email / Password harap diisi!');
      emptyInput();
    } else {
      auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate('Home');
      })
      .catch(err => {
        console.log(err);
        if(err.code === 'auth/invalid-email'){
          emptyInput();
          alert('Email/Password Salah');
        }
      })
    }
  }

  return (
    <View style={styles.wrapper.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <IconBack source={IconBack} width={20} height={25} onPress={goBack} />
        <IllustrationLogin
          width={200}
          height={120}
          style={styles.illustration}
        />
        <Text style={styles.text.desc}>Please Login to Start your Session</Text>
        <View style={styles.space(64)} />
        <Input
          placeholder="Email*"
          value={formRegister.email}
          onChangeText={(value) => onInputChange(value, 'email')}
        />
        <View style={styles.space(33)} />
        <Input
          placeholder="Password*"
          value={formRegister.password}
          onChangeText={(value) => onInputChange(value, 'password')}
          secureTextEntry={true}
        />
        <View style={styles.space(80)} />
        <Button title="Login" onPress={sendData} />
        <View style={styles.space(10)} />
        {/* <Button title="Login Anonymously" onPress={loginAnon} /> */}
      </ScrollView>
    </View>
  );
};

const styles = {
  wrapper: {
    page: {padding: 20},
  },
  iconBack: {width: 25, height: 25, backgroundColor: 'blue'},
  illustration: {marginTop: 8},
  text: {
    desc: {
      fontSize: 14,
      fontWeight: 'bold',
      color: colors.default,
      marginTop: 16,
      maxWidth: 200,
    },
  },
  space: (value) => {
    return {
      height: value,
    };
  },
};

export default Login;
