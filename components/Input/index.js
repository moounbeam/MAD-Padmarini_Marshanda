import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

const Input = ({label, placeholder}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput placeholder={placeholder} style={styles.input} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({

  input: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    fontSize: 15,
    marginBottom: 5,
    marginLeft:20,
    marginRight:20

  },

  label:{
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
    marginLeft:20,
    marginRight:20,
    marginTop: 10,
  }
});
