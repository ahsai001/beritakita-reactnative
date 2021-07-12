import * as React from 'react';
import { 
  View, 
  Text, 
  Button,
  StyleSheet, 
  SafeAreaView,
  StatusBar,
  useColorScheme,  
  FlatList,
  TouchableHighlight,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';

import {
    createStackNavigator
} from '@react-navigation/stack'


import DetailsScreen from '../details/Details.js'
import { ListItem, Avatar, Card } from 'react-native-elements';

import useFetch from '../hook/usefetch.js'
import { BackgroundImage } from 'react-native-elements/dist/config';



function HomeScreen({navigation}) {

  let formData = new FormData();
  formData.append('groupcode', 'ABJAL1');
  formData.append('keyword', '');

  const [response, isLoading, error] = useFetch('https://api.zaitunlabs.com/kango/cijou/news/all', 
  {
    method: 'POST',
    headers: {
      'Accept': 'application/json; charset=UTF-8',
      'Authorization': 'QVBJS0VZPXF3ZXJ0eTEyMzQ1Ng==',
      'x-packagename': 'com.ahsailabs.beritakita_flutter',
      'x-platform': "android"
    },
    body: formData
  });

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? <ActivityIndicator size='large' style={styles.center}/> : (
        <FlatList
          data={response}
          keyExtractor={(_item, index) => _item.id}
          renderItem={({ item }) => (
            <TouchableOpacity>
            <Card>
              <Card.Image source={{uri: item.photo}} resizeMode='cover' style={styles.card_image}>
                <ListItem style={styles.overlay_bottom}>
                  <ListItem.Content style={{opacity: 0.3}}>
                    <ListItem.Title style={{opacity: 0.3}}>{item.title}</ListItem.Title>
                    <ListItem.Subtitle style={{opacity: 0.3}}>{item.summary}</ListItem.Subtitle>
                  </ListItem.Content>
                </ListItem>
              </Card.Image>
            </Card>
            </TouchableOpacity>
          )}
        />
      )}
    </SafeAreaView>
  );
  }


const Stack = createStackNavigator()

export default function HomeNavigator({navigation}) {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home Page' }}/>
            <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Details Page' }}/>
        </Stack.Navigator>
    );
  } 

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    center: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    card_image: {
    },
    overlay_bottom: {
      backgroundColor: '#998023',
      position: 'absolute',
      left: 0,
      bottom: 0,
      width: '100%',
      opacity: 0
    }
  })