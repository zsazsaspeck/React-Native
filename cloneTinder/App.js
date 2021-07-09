import "react-native-gesture-handler";
import React from "react";
import { ImageBackground, StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Perfil from "./components/Perfil.js";

const image = { uri: "https://i.ibb.co/MsMPtY3/1.jpg" };

const Stack = createStackNavigator();

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <Text style={{ top: 50, marginLeft:130 }}>
          {" "}
          <Entypo name="dots-three-horizontal" size={24} color="white" />
        </Text>
        <Text style={styles.text}>
          Maria, 30 <MaterialIcons name="verified" size={30} color="#1E90FF" />
        </Text>
        <Text style={{ fontSize: 20, color: "white", backgroundColor:'black', opacity:0.8}}>
          {" "}
          <Entypo name="location" size={24} color="black" /> Moro em Teresópolis
        </Text>
        <Text style={{ fontSize: 20, color: "white", backgroundColor:'black', opacity:0.8 }}>
          {" "}
          <FontAwesome5 name="university" size={24} color="black" /> Pedagoga
        </Text>
        <Text
          style={{
            backgroundColor: "black",
            color: "white",
            paddingBottom: 15,
            opacity:0.9
          }}
        >
          {" "}
          <Fontisto name="undo" size={40} color="white" style={{ marginLeft: 20 }} />{" "}
          <Feather name="x" size={50} color="red" style={{ marginLeft: 20 }} />{" "}
          <MaterialIcons name="stars" size={40} color="blue" style={{ marginLeft: 20 }} />{" "}
          <Ionicons name="md-heart-circle-outline" size={50} color="aqua" style={{ marginLeft: 20 }} />{" "}
          <MaterialCommunityIcons
            name="lightning-bolt"
            size={40}
            color="purple"
            style={{ marginLeft: 20 }}
          />
        </Text>
        <View style={{ flex: 1 }}>
          <View
            style={{
              position: "flex",
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "white",
              paddingTop: 10,
            }}
          >
            <Text>
              {" "}
              <FontAwesome5 name="fire" size={18} color="red" style={{ marginLeft: 10 }} />{" "}
              <FontAwesome5 name="star-of-life" size={18} color="grey" style={{ marginLeft: 70 }} />{" "}
              <MaterialCommunityIcons name="message" size={18} color="grey" style={{ marginLeft: 70 }}/>{" "}
              <Entypo
                name="user"
                size={18}
                color="grey"
                style={{ marginLeft: 70 }}
                title="Perfil"
                onPress={() => {
                  navigation.navigate("Perfil");
                }}
              />{" "}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    marginTop: 600,
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "left",
    backgroundColor:'black',
    opacity:0.8
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}  />
        <Stack.Screen name="Perfil" component={Perfil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
