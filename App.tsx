import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./src/Navigation";
import { store } from "./src/Store/";
import { Provider } from "react-redux";
import { styles } from './src/Styles';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <View style={styles.appContainer}>
          <Navigation />
          <StatusBar style="auto" />
        </View>
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
