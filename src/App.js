import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Platform,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';
import { Provider } from 'react-redux';
import { store } from './redux';

StatusBar.setBarStyle("dark-content");
StatusBar.setBackgroundColor("rgba(0,0,0,0)");
StatusBar.setTranslucent(true);


const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Router/>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
});

export default App;
