import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Input from './src/components/Input';

export default function App() {
  const [cep, setCep] = useState('');
  

  return (
    <View style={styles.container}>
      <Input
        mask="cep"
        value={cep}
        maxLength={9}
        placeholder="Enter your Zip Code"
        placeholderTextColor="#212121"
        inputMaskChange={(text: string) => setCep(text)}
      />
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
