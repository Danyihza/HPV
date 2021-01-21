import React, {useState} from 'react';
import {View, Text, StatusBar} from 'react-native';
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
    StatusBar.setBarStyle("dark-content");
    StatusBar.setBackgroundColor("rgba(0,0,0,0)");
    StatusBar.setTranslucent(true);
  const globalState = useSelector((state) => state);
  const [formRegister, setForm] = useState({
    email: '',
    error: ''
  });

  const sendData = () => {
    loginWithEmail(formRegister.email);
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
      password: '',
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

  const loginWithEmail = (email) => {
    if (email === '') {
      setForm({
        ...formRegister,
        error: 'Please enter a valid email'
      }),
      alert('Email harap diisi!');
      emptyInput();
    } else {
      fetch(`${globalState.url}api/auth/checkUser?email=${email}`)
      .then(result => result.json())
      .then((res) => {
        console.log(res.status)
        if (res.status === 1) {
          navigation.navigate('Home', { email: res.data.email_user, fname: res.data.fullname });
        } else {
          navigation.navigate('Register', { email: email });
        }
      })
      .catch((err) => {
        console.error(err);
      })
    }
  }

  return (
    <View style={styles.wrapper.page}>
        <View style={styles.space(20)} />
        <IconBack width={30} height={30} onPress={goBack}/>
        <View style={styles.space(30)} />
        <Text style={styles.text.title}>Sign Up/Sign In</Text>
        <Text style={styles.text.desc}>Please enter your registered e-mail to continue</Text>
        <Input
          placeholder="e.g. example@mail.com"
          value={formRegister.email}
          onChangeText={(value) => onInputChange(value, 'email')}
        />
          <Text style={styles.text.error}>{formRegister.error}</Text>
          <View style={styles.button}>
            <Button title="Continue" onPress={sendData} />
          </View>
    </View>
  );
};

const styles = {
  wrapper: {
    page: {
      padding: 20,
      backgroundColor: colors.background,
      flex: 1,
    },
  },
  iconBack: {width: 25, height: 25, backgroundColor: 'blue'},
  illustration: {marginTop: 8},
  text: {
    desc: {
      fontSize: 18,
      fontFamily: 'TypoGotikaRegularDemo',
      // fontWeight: 'bold',
      color: 'black',
      marginTop: 16,
      marginBottom: 25,
      // maxWidth: 200,
    },
    title: {
      fontSize: 24,
      fontFamily: 'TypoGotikaBoldDemo',
      // fontWeight: 'bold',
      color: 'black',
      // marginBottom: 16,
      // maxWidth: 200,
    },
    error: {
      fontSize: 14,
      fontFamily: 'TypoGotikaRegularDemo',
      color: 'red',
      marginTop: 10
  }
  },
  space: (value) => {
    return {
      height: value,
    };
  },
  button: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    // justifyContent: 'center',
    // alignItems: 'center',
    width: '100%',
  }
};

export default Login;