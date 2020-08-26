import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

import { maskCep, maskPhone, maskCurrency } from '../../utils/masks';

interface InputProps {
    mask: 'cep' | 'phone' | 'currency',
    inputMaskChange: any;
}

const Input: React.FC<InputProps> = ({ mask, inputMaskChange, ...rest }) => {
  
    function handleChange(text: string) {
        if( mask === 'cep') {
            const value = maskCep(text)
            inputMaskChange(value)
        }
        else if (mask === 'phone') {            
            const value = maskPhone(text)
            inputMaskChange(value)
        }
        else if (mask === 'currency') {            
            const value = maskCurrency(text)
            inputMaskChange(value)
        }
    }

    return (
        <>
            <TextInput
                style={styles.input}
                onChangeText={ text => handleChange(text)}
                keyboardType="number-pad"
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