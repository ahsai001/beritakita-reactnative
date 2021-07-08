import * as React from 'react';
import { 
  NavigationContainer, 
  DefaultTheme,
} from '@react-navigation/native';

import {Main} from './src/Main.js'

//fully custom themes
// const MyTheme = {
//   dark: false,
//   colors: {
//     primary: 'rgb(255, 45, 85)',
//     background: 'white',
//     card: 'green',
//     text: 'red',
//     border: 'pink',
//     notification: 'yellow',
//   },
// };

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
    card: 'white',
    text: 'orange'
  },
};

function App() {
  return (
      <NavigationContainer theme={MyTheme}>
        <Main/>
      </NavigationContainer>
  );
}

export default App;