import React from 'react';
import { View, Text, TextInput } from 'react-native';

import { styles } from './styles';

import { maskCep, maskPhone, maskCurrency, maskCpf} from '../../utils/masks';

interface InputProps {
    mask: 'cep' | 'phone' | 'currency' | 'cpf',
    inputMaskChange: any;
    label: string;
}

const Input: React.FC<InputProps> = ({ mask, inputMaskChange, label, ...rest }) => {
  
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
        else if (mask === 'cpf') {            
            const value = maskCpf(text)
            inputMaskChange(value)
        }
    }

    return (
        <View>
            <Text style={styles.label}>{label}</Text>

            <TextInput
                style={styles.input}
                onChangeText={ text => handleChange(text)}
                keyboardType="number-pad"
                placeholderTextColor="#999999"
                {...rest}        
            />

        </View>
  );
}

export default Input;
