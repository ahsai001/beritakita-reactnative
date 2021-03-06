import * as React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default function LogoutScreen({navigation}) {
  return (
    <View style={styles.center}>
      <Text>Logout Screen</Text>
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
