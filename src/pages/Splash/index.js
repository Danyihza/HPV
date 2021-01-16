import AsyncStorage from '@react-native-community/async-storage';
import React, { useEffect } from 'react';
import {View, Text, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {splashScreen} from '../../assets';


const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout( async() =>{
            const userData = await AsyncStorage.getItem('uid');
            if (userData != undefined || userData != null) {
                navigation.replace('Home');
            } else {
                navigation.replace('WelcomeAuth');
            }
        },2000);
    });

    return (
        <View style={styles.splash.container}>
            <Image source={splashScreen} style={styles.splash.backgroundImage} />
        </View>
    )
}

const styles = {
    splash: {
        backgroundImage: {
            flex: 1,
            resizeMode: 'stretch',
            // width: '100%',
        },
        container : {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F5FCFF',
            // flexDirection: 'column',
        }
    },
}

export default Splash