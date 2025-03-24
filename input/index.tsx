import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const input = () => {
  return (
    <View>
      <Text style ={styles.inputText}>placeholder</Text>
      <TextInput style={styles.input}placeholder='Masukan placeholder anda'/>
        
    </View>
  )
}

export default input

const styles = StyleSheet.create({
    input :{
        borderColor:'black',
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
        marginLeft:20,
        marginRight:20

    },

    tee:{
        fontSize: 35,
        fontWeight:'900',
        color: 'black',
        margin: 15,
    },

    inputText:{
        fontSize: 20,
        fontWeight: '500',
        color: 'black',
        marginLeft:20,
        marginRight:20,
        marginTop: 30,
    },

    button: {
        backgroundColor: 'orange',
        borderColor:'orange',
        borderWidth: 20,
        borderRadius:10,
        marginLeft:20,
        marginRight:20,
        marginTop: 30,

    },

    tee2: {
        fontSize: 20,
        fontWeight: '500',
        color: 'white',
        textAlign: 'center',

    }
})