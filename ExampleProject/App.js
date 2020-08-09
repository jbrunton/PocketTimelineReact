import 'react-native-gesture-handler';

import React from 'react';
import { Button } from 'react-native';
import { TimelineScreen } from 'PocketTimelineReact'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation, route }) => {
  React.useEffect(() => {
    if (route.params?.event) {
      console.log('Event clicked: ' + JSON.stringify(route.params?.event))
    }
  }, [route.params?.event]);

  return (
    <Button
      title="Show Timeline"
      onPress={() =>
        navigation.navigate('TimelineScreen', { timelineId: "1" })
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
        <Stack.Screen name="TimelineScreen" component={TimelineScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
