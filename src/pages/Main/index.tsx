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
            label="ZIP CODE"
            value={cep}
            maxLength={9}
            placeholder="00000-000"
            inputMaskChange={(text: string) => setCep(text)}
        />

        <Input
            mask="phone"
            label="Phone or Cellphone"
            value={phone}
            maxLength={14}
            placeholder="(00)00000-0000"
            inputMaskChange={(text: string) => setPhone(text)}
        />

        <Input
            mask="currency"
            label="Currency (BRL)"
            value={currency}
            placeholder="100,00"
            inputMaskChange={(text: string) => setCurrency(text)}
        />  
    </View>
  );
}
