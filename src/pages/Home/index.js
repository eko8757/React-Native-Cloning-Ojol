import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feed from '../Feed';
import Settings from '../Settings';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const Home = () => {
    return (
        <Tab.Navigator initialRouteName="Feed"
            tabBarOptions={{
                activeTintColor: '#e91e63',
            }}>
            <Tab.Screen
                name="Feed"
                component={Feed}
                options={{
                tabBarLabel: 'Feed',
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

export default Home;
