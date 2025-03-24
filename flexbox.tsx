import Reach from 'react';
import { ImageBackground, Text, View, StyleSheet} from 'react-native';

const Flexbox = () => {
    return [
        <View style={styles.container}>
            <View style={styles.redContainer}></View>
            <View style={styles.greenContainer}></View>
            <View style={styles.blueContainer}></View>
        </View>
    ];
};

export default Flexbox;

const styles = StyleSheet.create({ 

    container :{
        flex: 1,
        justifyContent: 'space-evenly',
        flexDirection :'column',
        alignItems: 'center'
    },

    redContainer : {
        backgroundColor: 'red',
        width: 100,
        height:100,
    },

    greenContainer :{
        backgroundColor: 'green',
        width: 100,
        height:100,

    },

    blueContainer :{
        backgroundColor: 'blue',
        width: 100,
        height:100,

    }
});

