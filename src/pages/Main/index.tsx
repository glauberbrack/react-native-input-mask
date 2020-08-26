import React, { useState } from 'react';
import { View, Image, Text,  } from 'react-native';

import Input from '../../components/Input';

import { styles } from './styles';

import logo from '../../assets/images/logo.png';

export default function App() {
  const [cep, setCep] = useState('');
  const [phone, setPhone] = useState('');
  const [currency, setCurrency] = useState('');
  

  return (
    <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.headerTitleText}>We have awesome masks here!</Text>
        <Text style={styles.headerDescriptionText}>Try yourself</Text>
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
