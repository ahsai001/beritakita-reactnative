import * as React from 'react';
import { 
  View, 
  Text, 
  Button,
  StyleSheet, 
  useColorScheme  
} from 'react-native';

export default function DetailsScreen({navigation, route}) {
    const { itemId, otherParam } = route.params;

    React.useEffect(()=>{
        fetch('https://reactnative.dev/movies.json')
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
        })
        .catch((error) => {
        console.error(error);
        });
    }, [])
    return (
        <View style={styles.center}>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
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


const styles = StyleSheet.create({
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})