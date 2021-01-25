import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Splash,Login,Register,WelcomeAuth,Home,Main,MainScreen,DetailScreen,HelpScreen } from '../pages';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash} options={{headerShown: false,}} />
            <Stack.Screen name="Login" component={Login} options={{headerShown: false,}} />
            <Stack.Screen name="Register" component={Register} options={{headerShown: false,}} />
            <Stack.Screen name="WelcomeAuth" component={WelcomeAuth} options={{headerShown: false,}} />
            <Stack.Screen name="Home" component={Home} options={{headerShown: false,}} />
            <Stack.Screen name="Main" component={Main} options={{headerShown: false,}} />
            <Stack.Screen name="MainScreen" component={MainScreen} options={{headerShown: false,}} />
            <Stack.Screen name="DetailScreen" component={DetailScreen} options={{headerShown: false,}} />
            <Stack.Screen name="HelpScreen" component={HelpScreen} options={{headerShown: false,}} />
        </Stack.Navigator>
    )
}

export default Router