import AsyncStorage from '@react-native-community/async-storage';
import React, { useEffect } from 'react';
import {View, Text, Image, StatusBar} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {SplashScreen} from '../../assets';


const Splash = ({navigation}) => {
    StatusBar.setBarStyle("dark-content");
    StatusBar.setBackgroundColor("rgba(0,0,0,0)");
    StatusBar.setTranslucent(true);
    useEffect(() => {
        setTimeout( async () =>{
            const userData = await AsyncStorage.getItem('uid');
            if (userData != undefined || userData != null) {
                navigation.replace('Main');
            } else {
                navigation.replace('Main');
            }
        },500); //FIXME: 2000
    });

    return (
        <View style={styles.splash.container}>
            <Image source={SplashScreen} style={styles.splash.backgroundImage} />
            {/* <SplashScreen
            width={200}
            height={120}
            /> */}
        </View>
    )
}

const styles = {
    splash: {
        backgroundImage: {
            flex: 1,
            resizeMode: 'cover',
            width: '100%',
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