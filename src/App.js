import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Welcome from './pages/Welcome';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <View>
        <Welcome />
    </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  txtTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
