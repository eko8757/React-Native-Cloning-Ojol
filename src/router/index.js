import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Splash, Welcome, Login, Register } from '../pages';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    );
};

export default Router;
