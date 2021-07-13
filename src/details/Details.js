import * as React from 'react';
import { 
  View, 
  Text, 
  Button,
  StyleSheet, 
  Image,
  StatusBar,
  useColorScheme,
  SafeAreaView,
  ScrollView,
} from 'react-native';

import useFetch from '../hook/usefetch.js'

export default function DetailsScreen({navigation, route}) {
    const { itemId, otherParam } = route.params;
    const [aspectRatio, setAspectRatio] = React.useState(1.0);
    const [response, isLoading, error] = useFetch('https://api.zaitunlabs.com/kango/cijou/news/detail/'+itemId, 
    {
        method: 'POST',
        headers: {
        'Accept': 'application/json; charset=UTF-8',
        'Authorization': 'QVBJS0VZPXF3ZXJ0eTEyMzQ1Ng==',
        'x-packagename': 'com.ahsailabs.beritakita_flutter',
        'x-platform': "android"
        }
    }, (data) => {
        Image.getSize(data.photo, (w, h) => {setAspectRatio(w/h)}, (e) =>{console.log(e)})
        navigation.setOptions({ title: data.title })
    });

    return (
        <SafeAreaView style={styles.container}>
        <ScrollView>
        <Image
            style={{width: '100%', height: undefined, aspectRatio: aspectRatio}}
            source={{uri: response.photo, cache: "force-cache" }}
            resizeMode={'contain'} // cover or contain its upto you view look
            />
        <View style={styles.column_author_date}>
            <Text>{response.created_by}</Text>
            <Text>{response.created_at}</Text>
        </View>
        <Text>{response.title}</Text>
        <Text>{response.body}</Text>
        </ScrollView>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
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