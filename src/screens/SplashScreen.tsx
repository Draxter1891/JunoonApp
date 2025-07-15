import React, { useEffect, useRef } from 'react';
import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;
  const glowAnim = useRef(new Animated.Value(0)).current;
  const bgAnim = useRef(new Animated.Value(0)).current;

  const bgColor = bgAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['#c22563', '#ffffff'],
  });

  useEffect(() => {
    const glowLoop = Animated.loop(
      Animated.sequence([
        Animated.timing(glowAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(glowAnim, {
          toValue: 0,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    );

    glowLoop.start();

    Animated.sequence([
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.delay(1500),
      Animated.parallel([
        Animated.timing(scaleAnim, {
          toValue: 2,
          duration: 800,
          easing: Easing.inOut(Easing.exp),
          useNativeDriver: true,
        }),
        Animated.timing(bgAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: false,
        }),
      ]),
    ]).start(() => {
      glowLoop.stop();
      onFinish();
    });
  }, []);

  return (
    <Animated.View style={[styles.container, { backgroundColor: bgColor }]}>
      <Animated.View
        style={[
          styles.glow,
          {
            opacity: glowAnim,
            transform: [
              {
                scale: glowAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 2],
                }),
              },
            ],
          },
        ]}
      />
      <Animated.View
        style={[
          styles.logoContainer,
          {
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >
        <Animated.Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
        />
      </Animated.View>
      <Animated.Text style={[styles.text, { opacity: opacityAnim }]}>
        Powered by Junoon Capital
      </Animated.Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    backgroundColor: '#f3e4ea',
    height: 200,
    width: 200,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    zIndex: 2,
  },
  text: {
    position: 'absolute',
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
    bottom: 30,
    zIndex: 2,
  },
  glow: {
    width: 200,
    height: 200,
    backgroundColor: '#d98bac',
    borderRadius: 100,
    position: 'absolute',
  },
});
