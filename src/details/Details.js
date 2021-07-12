import * as React from 'react';
import { 
  View, 
  Text, 
  Button,
  StyleSheet, 
  Image,
  StatusBar,
  useColorScheme,
  SafeAreaView 
} from 'react-native';

import useFetch from '../hook/usefetch.js'

export default function DetailsScreen({navigation, route}) {
    const { itemId, otherParam } = route.params;

    const [response, isLoading, error] = useFetch('https://api.zaitunlabs.com/kango/cijou/news/detail/'+itemId, 
    {
        method: 'POST',
        headers: {
        'Accept': 'application/json; charset=UTF-8',
        'Authorization': 'QVBJS0VZPXF3ZXJ0eTEyMzQ1Ng==',
        'x-packagename': 'com.ahsailabs.beritakita_flutter',
        'x-platform': "android"
        }
    });
    
    return (
        <SafeAreaView style={styles.container}>
        <View>
        <Image
            style={{width: '100%', height: 200}}
            source={{uri: response.photo}}
            resizeMode={'contain'} // cover or contain its upto you view look
            />
        <View style={styles.column_author_date}>
            <Text>{response.created_by}</Text>
            <Text>{response.created_at}</Text>
        </View>
        <Text>{response.title}</Text>
        <Text>{response.body}</Text>
        </View>
        </SafeAreaView>
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
    column_author_date: {
        flexDirection: 'row',
        marginBottom: 30,
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})