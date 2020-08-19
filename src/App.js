import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Welcome from './pages/Welcome';

const App = () => {
  return (
    <View>
      <Welcome />
    </View>
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
