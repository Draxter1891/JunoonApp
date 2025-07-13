import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import Home from './screens/Home';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Image } from 'react-native';
import { width } from './constants/Sizes';

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
          headerStyle: {
            backgroundColor: '#fce4ec',
            elevation: 0,
            shadowOpacity: 0,
            height: 70,
          },
          drawerStyle: {
            backgroundColor: '#eaced9',
            width: width * 0.5,
          },
          drawerItemStyle: {
            borderRadius: 30,
            marginVertical: 10,
            paddingHorizontal: 10,
          },
          drawerAllowFontScaling: false,
          drawerLabelStyle: {
            fontSize: 16,
            fontWeight: '500',
            textAlign: 'center',
            width: '100%',
          },
          drawerActiveTintColor: '#7e1900ff',
          drawerActiveBackgroundColor: '#6d33d83a',
          drawerInactiveBackgroundColor: 'gray',
          headerTintColor: '#7e1900ff',
          headerTitleStyle: {
            fontWeight: '600',
            fontSize: 20,
          },
          headerRight: () => (
            <Image
              source={require('./assets/images/logo.png')}
              style={{ width: '25%', height: '100%', marginRight: 10 }}
            />
          ),
        }}
      >
        <Drawer.Screen name="Home" component={Home} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
