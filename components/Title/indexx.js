import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Title = ({text}: {text: string}) => {
  return <Text style={styles.title}>{text}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default Title;