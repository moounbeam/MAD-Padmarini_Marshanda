import { Text, View, StyleSheet, ScrollView, TouchableOpacity, TextInput} from "react-native";
import Input from "./components/Input";
const App2 = () =>{
    return [
        <View>
            <Text style={styles.tee}>Welcome</Text>
        </View>,

        <View> 
            <Text style={styles.subtee}>Username</Text>
        </View>,
        <Input>Masukan username anda</Input>,
        <View>
            <Text style={styles.subtee}>Password</Text>
        </View>,

        <View style={styles.container}>
            <TextInput>Masukan password anda</TextInput>
        </View>,

        <TouchableOpacity style={styles.button}>
            <Text style={styles.tee2}>Sign In</Text>
        </TouchableOpacity>,


    ]
    }

    export default App2;

    const styles = StyleSheet.create({

        container :{
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

        subtee:{
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
