import * as React from 'react';
import { 
  StyleSheet, 
} from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';

import {HomeNavigator} from './home/Home.js'
import {LoginScreen} from './login/Login.js'
import {LogoutScreen} from './logout/Logout.js'

const Drawer = createDrawerNavigator()

export function Main(){
    return (
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeNavigator} options={{ title: 'Home Navigator' }}/>
          <Drawer.Screen name="Login" component={LoginScreen} options={{ title: 'Login Page' }}/>
          <Drawer.Screen name="Logout" component={LogoutScreen} options={{ title: 'Logout Page' }}/>
        </Drawer.Navigator>
    );
}

const style = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})