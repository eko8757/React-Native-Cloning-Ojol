import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Welcome } from '../pages';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={Welcome} />
        </Stack.Navigator>
    );
};

export default Router;