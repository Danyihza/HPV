import React, { useState, useEffect } from 'react';
import { View,Text, Alert } from 'react-native';
import { Button, Input } from '../../components';
import { colors } from '../../utils';
import {IconBack, IllustrationRegister} from '../../assets';
import {ScrollView} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-community/async-storage';
import { StackActions } from '@react-navigation/native';

const Register = ({route, navigation}) => {
  const {email} = route.params;
  const globalState = useSelector((state) => state);
  const [formRegister, setForm] = useState({
    fullName: '',
    email: email,
    password: '',
    confpassword: '',
  });

  useEffect(() => {
  })

  const sendData = () => {
    // console.log('data yang dikirim:', formRegister);
    if (formRegister.email === '' || formRegister.fullName === '' || formRegister.password === '' || formRegister.confpassword === '') {
      // SweetAlert.showAlertWithOptions({
      //   title: '',
      //   subTitle: '',
      //   confirmButtonTitle: 'OK',
      //   confirmButtonColor: '#000',
      //   otherButtonTitle: 'Cancel',
      //   otherButtonColor: '#dedede',
      //   style: 'success',
      //   cancellable: true
      // },
      //   callback => console.log(callback));
      Alert.alert(
        "Warning",
        "Lengkapi semua kolom",
        [
          {
            text: "OK",
            onPress: () => console.log("Ok")
          }
        ],
        { cancelable: true}
      );
    } else {
      if (formRegister.password !== formRegister.confpassword) {
        Alert.alert(
          "Warning",
          "Password tidak sama",
          [
            {
              text: "OK",
              onPress: () => console.log("Ok")
            }
          ],
          { cancelable: false}
        );
        
      } else {
        auth()
        .createUserWithEmailAndPassword(formRegister.email, formRegister.confpassword)
        .then((user) => {
          const uid = user.user._user.uid;
          const email = user.user._user.email;
          const fname = formRegister.fullName;
          console.log('User account created & signed in!', user);
          addUser(uid, email, fname);
          AsyncStorage.setItem('uid', uid);
          AsyncStorage.setItem('fname', fname);
          navigation.reset({
            index: 0,
            routes:[{name:'Main'}]
        });
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }

          console.error(error);
        });
      }
    }

  };

  const addUser = async (uid, email, fullname) => {
    await fetch(`${globalState.url}api/auth/register?user_id=${uid}&fname=${fullname}&email=${email}`, {
      method: 'GET',
      headers: {
        'Accept': '*/*',
      }
    })
    .then((result) => result.text())
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.error(err);
    })
    
  }

  const onInputChange = (value, input) => {
    setForm({
      ...formRegister,
      [input]: value,
    });
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.wrapper.page}>
      <ScrollView>
        <View style={styles.space(20)} />
        <IconBack width={30} height={30} onPress={goBack}/>
        <View style={styles.space(30)} />
        <Text style={styles.text.title}>Sign Up</Text>
        <Text style={styles.text.desc}>Please fill out this field to sign up</Text>
        {/* <View style={styles.space(64)} /> */}
        <Input
          autoFocus={true}
          placeholder="Full Name"
          value={formRegister.fullName}
          onChangeText={(value) => onInputChange(value, 'fullName')}
        />
        <View style={styles.space(33)} />
        <Input
          placeholder="Email"
          value={formRegister.email}
          onChangeText={(value) => onInputChange(value, 'email')}
        />
        <View style={styles.space(33)} />
        <Input
          placeholder="Password"
          value={formRegister.password}
          onChangeText={(value) => onInputChange(value, 'password')}
          secureTextEntry={true}
        />
        <View style={styles.space(33)} />
        <Input
          placeholder="Confirm password"
          value={formRegister.confpassword}
          onChangeText={(value) => onInputChange(value, 'confpassword')}
          secureTextEntry={true}
        />
        </ScrollView>
        <View style={styles.space(33)} />
          <Button title="Sign Up" onPress={sendData} />
    </View>
  );
};

const styles = {
    wrapper: {
        page: {
          padding: 20,
          backgroundColor: colors.background,
          flex: 1,
        }
    },
    iconBack : {width: 25, height:25, backgroundColor:'blue'},
    illustration : {marginTop: 8},
    text : {
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
    
    },
    space : value => {
        return {
            height: value
        }
    },

}

export default Register;