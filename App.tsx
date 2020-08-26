import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Input from './src/components/Input';

export default function App() {
  const [cep, setCep] = useState('');
  const [phone, setPhone] = useState('');
  

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

      <Input
        mask="phone"
        value={phone}
        maxLength={14}
        placeholder="What's your phone?"
        placeholderTextColor="#212121"
        inputMaskChange={(text: string) => setPhone(text)}
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
