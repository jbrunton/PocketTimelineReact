import 'react-native-gesture-handler';

import React from 'react';
import { Button } from 'react-native';
import { FibApp } from 'TestReactComponentJS'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <Button
      title="Launch Fib Calculator"
      onPress={() =>
        navigation.navigate('Calculator')
      }
    />
  );
};

export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Calculator" component={FibApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
