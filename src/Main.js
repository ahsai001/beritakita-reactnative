import React from 'react';
import {StyleSheet, Linking, Alert, View} from 'react-native';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

function CustomDrawerContent(props) {
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigation.toggleDrawer();
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={{height: 200}} />
      <DrawerItemList {...props} />
      <DrawerItem
        label="Logout"
        onPress={() =>
          Alert.alert(
            'Logout Confirmation',
            'Are you sure want to logout?',
            [
              {
                text: 'Cancel',
                onPress: () => {
                  console.log('Cancel Pressed'), toggleDrawer();
                },
              },
              {
                text: 'OK',
                onPress: () => {
                  console.log('Ok Pressed'), toggleDrawer();
                },
              },
            ],
            {
              cancelable: true,
            },
          )
        }
      />
      <DrawerItem
        label="About"
        onPress={() => Linking.openURL('https://mywebsite.com/help')}
      />
    </DrawerContentScrollView>
  );
}

import HomeNavigator from './home/Home.js';
import LoginScreen from './login/Login.js';
import LogoutScreen from './logout/Logout.js';

const Drawer = createDrawerNavigator();

export function Main() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="Home"
        component={HomeNavigator}
        options={({route}) => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
          if (routeName != 'Home')
            return {swipeEnabled: false, title: 'Home Navigator'};
        }}
      />
      <Drawer.Screen
        name="Login"
        component={LoginScreen}
        options={{title: 'Login Page'}}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
