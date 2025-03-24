import { Text, View, StyleSheet, ScrollView} from "react-native";
import Button from "./components/Button";
import Input from "./components/Input";

const App4 = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.tee}>Welcome</Text>
      <Input label="Username" placeholder="Masukan username anda" />
      <Input label="Password" placeholder="Masukan password anda" />
      <Input label= "Alamat" placeholder="Masukan alamat anda" />
      <Input label="No.Telp" placeholder="Masukan nomor telepon anda" />
      <Button label= "Sign In" color='orange'/>
      <Button label="Sign In Google" color="red" />
      <Button label="Sign In Facebook" color="blue" />
      <Button label="Sign In Apple" color="black" />
    </ScrollView>
  );
}

export default App4;

const styles = StyleSheet.create({
    container :{
        borderColor:'white',
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
        marginLeft:5,
        marginRight:5
  },
    tee:{
        fontSize: 35,
        fontWeight:'900',
        color: 'black',
        margin: 15,
    },

});
