import Reach from 'react';
import { ImageBackground, Text, View, StyleSheet, Image} from 'react-native';

const App3 = () => {
    return [
        <View style={styles.container}>
            <View style={styles.hitam}></View>
            <View style={styles.kuning}></View>
            <View style={styles.hitam2}></View>
        </View>,

        <View style={styles.putih}>
            <Image style={styles.foto} source={require('./foto/logo.png')} />
        </View>,

        <View style={styles.container1}>
            <View style={styles.hitam3}></View>
            <View style={styles.kuning2}></View>
            <View style={styles.hitam4}></View>
        </View>,

    ]
}

    export default App3;

    const styles = StyleSheet.create({

        container :{
            backgroundColor: 'red',
            width: 450,
            height: 120,
            flexDirection :'row',
        },
    
        hitam : {
            backgroundColor: 'black',
            width: 80,
            height:80,
            marginRight:20,
            marginTop:20,
            marginLeft:20
        },
    
        kuning :{
            backgroundColor: 'yellow',
            width: 80,
            height:80,
            marginRight:20,
            marginTop:20
        },
    
        hitam2 :{
            backgroundColor: 'black',
            width: 80,
            height:80,
            marginRight:20,
            marginTop:20
        },

        putih: {
            backgroundColor: 'white',
            height:620

        },

        foto:{
            objectFit:'contain',
            width: 410,
            height: 620,
            margin: 5
        },

        container1 :{
            backgroundColor: 'blue',
            width: 450,
            height: 120,
            flexDirection :'row',
            flex:1,
            justifyContent:'space-evenly'
        },
    
        hitam3 : {
            backgroundColor: 'black',
            width: 80,
            height:80,
            marginTop:20
        },
    
        kuning2 :{
            backgroundColor: 'yellow',
            width: 80,
            height:80,
            marginTop:20
        },
    
        hitam4 :{
            backgroundColor: 'black',
            width: 80,
            height:80,
            marginRight: 45,
            marginTop:20
        },
        




    })