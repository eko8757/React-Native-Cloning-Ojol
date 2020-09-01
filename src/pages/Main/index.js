import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Settings } from '../../pages';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../../utils';

const Tab = createBottomTabNavigator();

const Main = () => {
    return (
        <Tab.Navigator initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: colors.colorPrimary,
            }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                ),
                }}
            />
            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{
                tabBarLabel: 'Settings',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                ),
                }}    
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({});

export default Main;
