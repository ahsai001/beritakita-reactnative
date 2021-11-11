import * as React from 'react';
import {View, Text, Button, StyleSheet, useColorScheme} from 'react-native';

export default function LoginScreen({navigation}) {
  return (
    <View style={styles.center}>
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
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
