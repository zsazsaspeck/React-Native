import React from "react";
import { ImageBackground,  StyleSheet, Text, View } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const image = { uri: "https://i.ibb.co/MsMPtY3/1.jpg" };

const App = () => (
  <View style={styles.container}>
    <ImageBackground source={image} style={styles.image}>
      <Text style={{top:50}}>                                   <Entypo name="dots-three-horizontal" size={24} color="white" /></Text>
      <Text style={styles.text}>Maria, 30 <MaterialIcons name="verified" size={30} color="#1E90FF" /></Text>
      <Text style={{fontSize:20, color: 'white'}}> <Entypo name="location" size={24} color="black" /> Moro em Teresópolis</Text>
      <Text style={{fontSize:20, color: 'white'}}> <FontAwesome5 name="university" size={24} color="black" /> Pedagoga</Text>
      <Text style={{backgroundColor:'black', opacity:0.8}}>-</Text>
      <Text style={{backgroundColor:'black', color:'white', paddingBottom:30, opacity:0.9}}> <Fontisto name="undo" size={40} color="white" />       <Feather name="x" size={50} color="red" />      <MaterialIcons name="stars" size={40} color="blue" />      <Ionicons name="md-heart-circle-outline" size={50} color="aqua"/>       <MaterialCommunityIcons name="lightning-bolt" size={40} color="purple" />
      </Text>
      <View style={{flex: 1}}>
      <View style={{position: 'absolute', left: 0, right: 0, bottom: 0, backgroundColor: 'white', paddingTop: 10}}><Text>      <FontAwesome5 name="fire" size={18} color="red" />               <FontAwesome5 name="star-of-life" size={18} color="grey" />             <MaterialCommunityIcons name="message" size={18} color="grey" />              <Entypo name="user" size={18} color="grey" /> </Text></View>
</View>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    marginTop: 600,
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "left",
  }
});

export default App;