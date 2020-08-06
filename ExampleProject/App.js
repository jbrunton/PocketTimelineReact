import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { fib } from 'TestReactComponentJS/src/fib'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! hi! {fib(5)}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
