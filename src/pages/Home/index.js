import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from '../Login';
import Register from '../Register';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const Home = () => {
    return (
        <Tab.Navigator initialRouteName="Login"
            tabBarOptions={{
                activeTintColor: '#e91e63',
            }}>
            <Tab.Screen
                name="Login"
                component={Login}
                options={{
                tabBarLabel: 'Login',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Register"
                component={Register}
                options={{
                tabBarLabel: 'Register',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}    
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({});

export default Home;
