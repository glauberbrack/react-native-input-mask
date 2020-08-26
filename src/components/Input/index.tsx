import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

interface InputProps {
    mask: 'cep' | 'phone' | 'currency',
    inputMaskChange: any;
}

const Input: React.FC<InputProps> = ({ mask, inputMaskChange, ...rest }) => {
  return (
      <>
      
        <TextInput
            style={styles.input}
            {...rest}        
        />

      </>
  );
}

export default Input;

const styles = StyleSheet.create({
    input: {
        height: 44,
        width: 200,
        backgroundColor: '#fff',
        borderRadius: 4,
        paddingHorizontal: 16,
        marginTop: 4,
        fontSize: 14
    }
})