import * as React from 'react';
import { 
  View, 
  Text, 
  Button,
  StyleSheet, 
  useColorScheme  
} from 'react-native';

import {
    createStackNavigator
} from '@react-navigation/stack'


import {DetailsScreen} from '../details/Details.js'

function HomeScreen({navigation}) {
    return (
      <View style={style.center}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() =>
            navigation.push('Details', {
              itemId: Math.floor(Math.random() * 100),
            })
          }
        />
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
        <Button
          title="Go back to first screen in stack"
          onPress={() => navigation.popToTop()}
        />
      </View>
    );
  }


const Stack = createStackNavigator()

export function HomeNavigator({navigation}) {
    return (
        <Stack.Navigator initialRouteName="HomeS">
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home Page' }}/>
            <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Details Page' }}/>
        </Stack.Navigator>
    );
  } 

  const style = StyleSheet.create({
    center: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }
  })