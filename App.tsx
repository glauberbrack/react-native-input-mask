import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';

import Main from './src/pages/Main';

export default function App() {
  

  return (
    <>
      <Main/>
      <StatusBar style="auto" />
    </>
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
