import * as React from 'react';
import { 
  View, 
  Text, 
  Button,
  StyleSheet, 
  useColorScheme  
} from 'react-native';


export function LoginScreen({navigation}){
    return (
        <View style={style.center}>
        <Text>Login Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'anything you want here',
            });
          }}
        />
      </View>
    )
}

const style = StyleSheet.create({
    center: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }
  })
  