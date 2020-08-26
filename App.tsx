import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Input from './src/components/Input';

export default function App() {
  return (
    <View style={styles.container}>
      <Input/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#082A44',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
