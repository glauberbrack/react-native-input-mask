import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

interface InputProps {

}

const Input: React.FC<InputProps> = () => {
  return (
      <>
        <TextInput style={styles.input}>Componente de Input</TextInput>
      </>
  );
}

export default Input;

const styles = StyleSheet.create({
    input: {
        height: 54,
        width: 200,
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingHorizontal: 16,
        marginTop: 4,
        fontSize: 14
    }
})