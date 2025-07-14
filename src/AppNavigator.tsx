import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Image, StyleSheet, Dimensions } from 'react-native';

import Home from './screens/Home';
import AboutScreen from './screens/AboutScreen';

const { width } = Dimensions.get('window');
const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          swipeEnabled: true,
          drawerType: 'front',
          swipeEdgeWidth: width * 0.5,
          headerStyle: styles.header,
          drawerStyle: styles.drawer,
          drawerItemStyle: styles.drawerItem,
          drawerLabelStyle: styles.drawerLabel,
          drawerAllowFontScaling: false,
          drawerActiveTintColor: '#7E1900',
          drawerActiveBackgroundColor: '#F5E1E1',
          drawerInactiveTintColor: '#666666',
          headerTintColor: '#7E1900',
          headerTitleStyle: styles.headerTitle,
          headerRight: () => (
            <Image
              source={require('./assets/images/logo.png')}
              resizeMode="contain"
              style={styles.logo}
            />
          ),
        }}
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="About" component={AboutScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FCE4EC',
    elevation: 3,
    shadowOpacity: 1,
    height: 70,
  },
  headerTitle: {
    fontWeight: '600',
    fontSize: 20,
  },
  logo: {
    width: 70,
    height: 70,
    marginRight: 15,
  },
  drawer: {
    backgroundColor: '#EACED9',
    width: width * 0.5,
  },
  drawerItem: {
    borderRadius: 30,
    paddingHorizontal: 10,
  },
  drawerLabel: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    width: '100%',
  },
});
