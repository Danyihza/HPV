import AsyncStorage from '@react-native-community/async-storage';
import React, { useEffect, useState } from 'react'
import { View, Text, StatusBar } from 'react-native'
import { useSelector } from 'react-redux';
import { IconBack } from '../../assets';
import { Input, Button } from '../../components';
import auth from '@react-native-firebase/auth';
import { StackActions } from '@react-navigation/native';
import { colors } from '../../utils';
// import { Container, Header, Content, Button, Icon, Text } from 'native-base';


const Home = ({route,navigation}) => {
    StatusBar.setBarStyle("dark-content");
    StatusBar.setBackgroundColor("rgba(0,0,0,0)");
    StatusBar.setTranslucent(true);
    const globalState = useSelector((state) => state);
    const [formRegister, setForm] = useState({
        password: '',
        error: ''
    });

    const onInputChange = (value, input) => {
        setForm({
            ...formRegister,
            [input]: value,
        });
    };
    
      const emptyInput = () => {
        setForm({
          password: ''
        });
      };
    
    useEffect(() => {
        // getFullName();
    })

    const {email, fname} = route.params;

    const goBack = () => {
        navigation.goBack();
    };

    const sendData = () => {
        loginWithEmail(email, formRegister.password);
    };
    
    const loginWithEmail = (email, password) => {
        try {
            if (password === '') {
                alert('Email harap diisi!');
                emptyInput();
            } else {
                auth()
                .signInWithEmailAndPassword(email, password)
                .then((user) => {
                    console.log(user.user);
                    const uid = user.user._user.uid;
                    AsyncStorage.setItem('uid', uid);
                    AsyncStorage.setItem('fname', fname);
                    navigation.reset({
                        index: 0,
                        routes:[{name:'Main'}]
                    });
                })
                .catch(err => {
                    console.log(err);
                    if (err.code == 'auth/wrong-password') {
                        setForm({
                            ...formRegister,
                            error: 'Wrong Password!',
                            password: ''
                        })
                    }
                    if(err.code == 'auth/too-many-requests'){
                        setForm({
                            ...formRegister,
                            error: err.code,
                            password: ''
                        })
                    }
                });
                
            }
        } catch (error) {
            console.error(error);
        }
    }

        return (
            <View style={styles.wrapper.page}>
                <View style={styles.space(20)} />
                <IconBack width={30} height={30} onPress={goBack}/>
                <View style={styles.space(30)} />
                <Text style={styles.text.title}>Welcome Back, {fname.split(' ',1)}</Text>
                <Text style={styles.text.desc}>Please enter your password to continue</Text>
                <Input
                placeholder="Enter your password"
                value={formRegister.password}
                onChangeText={(value) => onInputChange(value, 'password')}
                secureTextEntry={true}
                />
                <Text style={styles.text.error}>{formRegister.error}</Text>
                <View style={styles.button}>
                    <Button title="Continue" onPress={sendData} />
                </View>
            </View>
        );
    
}

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
}

export default Home