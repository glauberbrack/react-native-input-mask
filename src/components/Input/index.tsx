import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

import { maskCep } from '../../utils/masks';

interface InputProps {
    mask: 'cep' | 'phone' | 'currency',
    inputMaskChange: any;
}

const Input: React.FC<InputProps> = ({ mask, inputMaskChange, ...rest }) => {

  
    function handleChange(text: string) {
        const value = maskCep(text)
        inputMaskChange(value)
    }

    return (
      <>

        <TextInput
            style={styles.input}
            onChangeText={ text => handleChange(text)}
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