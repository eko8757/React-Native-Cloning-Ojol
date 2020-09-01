import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Splash, Welcome, Login, Register, Home, Feed, Settings } from '../pages';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Splash" component={Splash} options={{headerShown: false,}} />
            <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false,}} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Home" component={Home} options={{headerShown: false,}} />
            <Stack.Screen name="Feed" component={Feed} />
            <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
    );
};

export default Router;
