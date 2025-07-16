import React, { useState } from 'react';
import { View, Text } from 'react-native';
import SplashScreen from './src/screens/SplashScreen';
import AppNavigator from './src/AppNavigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <View style={{ flex: 1 }}>
      {showSplash ? (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
        <AppNavigator/>
      )}
    </View>
    </GestureHandlerRootView>
  );
}