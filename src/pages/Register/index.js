import React, { useState, useEffect } from 'react';
import { View,Text } from 'react-native';
import { Button, Input } from '../../components';
import { colors } from '../../utils';
import {IconBack, IllustrationRegister} from '../../assets';
import {ScrollView} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-community/async-storage';


const Register = ({navigation}) => {
  const globalState = useSelector((state) => state);
  const [formRegister, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  // useEffect(() => {
  //   fetch('https://reactnative.dev/movies.json')
  //   .then((response) => response.json())
  //   .then((json) => {
  //     console.log(json.movies);
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });
  // })

  const sendData = () => {
    console.log('data yang dikirim:', formRegister);
    auth()
    .createUserWithEmailAndPassword(formRegister.email, formRegister.password)
    .then((user) => {
      const uid = user.user._user.uid;
      const email = user.user._user.email;
      const fname = formRegister.fullName;
      console.log('User account created & signed in!', user);
      addUser(uid, email, fname);
      AsyncStorage.setItem('uid', uid);
      AsyncStorage.setItem('fname', fname);
      navigation.navigate('Home');
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
  };

  const addUser = async (uid, email, fullname)  => {
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <IconBack source={IconBack} width={20} height={25} onPress={goBack} />
        <IllustrationRegister
          width={200}
          height={120}
          style={styles.illustration}
        />
        <Text style={styles.text.desc}>
          Mohon mengisi beberapa data untuk proses daftar anda
        </Text>
        <View style={styles.space(64)} />
        <Input
          placeholder="Nama Lengkap"
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
        <View style={styles.space(80)} />
        <Button title="Daftar" onPress={sendData} />
      </ScrollView>
    </View>
  );
};

const styles = {
    wrapper: {
        page: {padding: 20}
    },
    iconBack : {width: 25, height:25, backgroundColor:'blue'},
    illustration : {marginTop: 8},
    text : {
        desc: {fontSize:14,fontWeight:'bold',color:colors.default,marginTop:16,maxWidth: 200}
    },
    space : value => {
        return {
            height: value
        }
    }

}

export default Register;