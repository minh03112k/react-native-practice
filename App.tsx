import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";
import React from 'react';
import Button from "./components/common/Button";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button title='Custom Button' />
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
