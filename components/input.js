import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

const Input = ({  placeholder, icon, ...rest  }) => {
  return (
    <View style={styles.borda}>
         <TextInput
      style={styles.input}
      placeholder={placeholder}

      {...rest}
    />
    </View>
   
  );
};

const styles = StyleSheet.create({
  input: {
    width: 200,
  },
  borda:{
    borderColor: '#8c4f4d',
    flexDirection: 'row',
    marginBottom: 2,
    borderBottomWidth: 1,
    padding: 10,
    width: 300,
    fontSize: 16,
  }
});

export default Input;
