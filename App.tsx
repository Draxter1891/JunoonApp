import React, { useState, useRef, useEffect } from 'react';
import { View, Animated } from 'react-native';
import SplashScreen from './src/screens/SplashScreen';
import AppNavigator from './src/AppNavigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const handleSplashFinish = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start(() => {
      setShowSplash(false);
    });
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        {showSplash && (
          <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
            <SplashScreen onFinish={handleSplashFinish} />
          </Animated.View>
        )}
        {!showSplash && <AppNavigator />}
      </View>
    </GestureHandlerRootView>
  );
}
