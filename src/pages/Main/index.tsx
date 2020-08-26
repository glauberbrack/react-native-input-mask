import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Input from '../../components/Input';

export default function App() {
  const [cep, setCep] = useState('');
  const [phone, setPhone] = useState('');
  const [currency, setCurrency] = useState('');
  

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

      <Input
        mask="currency"
        value={currency}
        maxLength={14}
        placeholder="Enter the value"
        placeholderTextColor="#212121"
        inputMaskChange={(text: string) => setCurrency(text)}
      />  
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
