//1.import component react native

import { Text, View, StyleSheet, Image, ScrollView} from "react-native";

//2.Buat component 
// component adalah function yang treturn jsx
const App = () =>{
  return [
    //JSX
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Welcome to My Personal Page!</Text>
          <View>
            <Text style={styles.tee}>
              Hi there! I’m Marsha and this is a little space where I share a bit about myself.
            </Text>
          </View>
        </View>
  gi
        <View style={styles.container2}>
          <Text style={styles.subTitle}>👤 About Me</Text>
          <Text style={styles.tee2}>
            I'm someone who likes challenges, loves exploring new things, enjoys sharing experiences, 
            and is always curious about the world.
          </Text>
  
          <Text style={styles.subTitle}>❤️ Things I Like</Text>
          <Text style={styles.tee2}>Here are some of my favorite things:</Text>
          <Text style={styles.tee2}>📚 Books: Series Bumi By TERELIYE</Text>
          <Text style={styles.tee2}>🎵 Music: RnB and POP, Artist: NewJeans</Text>
          <Text style={styles.tee2}>🎬 Movies: Kimi no nawa</Text>
          <Text style={styles.tee2}>🍜 Food: Rendang</Text>
        </View>
      </ScrollView>
  ];
  };
//3. Export component
export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'azure',
    borderColor: 'powderblue',
    borderWidth:5,
    padding: 10,
    margin:10,
    borderRadius:50,
  },

  container2: {
    backgroundColor: 'oldlace',
    borderColor: 'moccasin',
    borderWidth:5,
    padding: 5,
    margin:20,
    borderRadius:50,

  },
  title: {
    fontSize: 35,
    fontWeight:'900',
    color: 'Black',
    textAlign: 'center',
    margin: 50,
  },

  tee: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center'
  },

  tee2: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'left',
    margin:5,
  },

  subTitle: {
    fontSize: 25,
    fontWeight:'900',
    color: 'Black',
    textAlign: 'left',
    margin: 20,
  },

  foto:{
    width:350,
  }
})