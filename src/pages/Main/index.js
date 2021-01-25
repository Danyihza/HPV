import React, {useEffect} from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Login from '../Login';
import WelcomeAuth from '../WelcomeAuth';
import MainScreen from '../MainScreen';
import { colors } from '../../utils';
import { Alert, BackHandler, StatusBar } from 'react-native';



const Main = ({navigation, route}) => {
    StatusBar.setBarStyle("light-content");
    StatusBar.setBackgroundColor("rgba(0,0,0,0)");
    StatusBar.setTranslucent(true);
    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", backAction);
        return () =>
          BackHandler.removeEventListener("hardwareBackPress", backAction);
      }, []);

    const backAction = () => {
        Alert.alert("Hold on!", "Are you sure you want to exit?", [
          {
            text: "Cancel",
            onPress: () => null,
            style: "cancel"
          },
          { text: "YES", onPress: () => BackHandler.exitApp() }
        ]);
        return true;
    };

    const Tab = createMaterialBottomTabNavigator();
        return (
            <Tab.Navigator
            initialRouteName="MainScreen"
            activeColor= {colors.active}
            barStyle={{ backgroundColor: colors.default }}
            labeled={false}
            >
            <Tab.Screen
                name="MainScreen"
                component={MainScreen}
                options={{
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
                }}
            />
            <Tab.Screen
                name="Notifications"
                component={Login}
                options={{
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="book" color={color} size={26} />
                ),
                }}
            />
            <Tab.Screen
                name="Info"
                component={Login}
                options={{
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="face-profile" color={color} size={26} />
                ),
                }}
            />
            </Tab.Navigator>
        );
    
}


export default Main