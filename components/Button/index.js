import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const Button = ({ label, color = 'white' }) => {
  return (
    <TouchableOpacity style={buttonStyle(color)}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const buttonStyle = (color) => ({
  backgroundColor: color,
  borderColor: color,
  borderWidth: 20,
  borderRadius:10,
  marginLeft:20,
  marginRight:20,
  marginTop: 20,
});

const styles = StyleSheet.create({
  buttonText: {
  fontSize: 20,
  fontWeight: '500',
  color: 'white',
  textAlign: 'center',
  }

});

