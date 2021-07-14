import React from "react";
import { Text, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";


const Perfil = ({ navigation }) => {
  return (
    <View>
      <Image
        source={{
          uri: "https://i.ibb.co/0ZFZSbh/3.jpg",
        }}
        style={{ width: 130, height: 130, borderRadius: 400 / 2, left: 120 }}
      />
      <Text
        style={{
          fontSize: 20,
          color: "black",
          marginLeft: 130,
          fontWeight: "bold",
        }}
      >
        Luis , 27 <MaterialIcons name="verified" size={24} color="#1E90FF" />
      </Text>
      <Text>
        <Feather
          name="settings"
          size={50}
          color="grey"
          style={{ marginLeft: 30 }}
        />
        <Entypo
          name="pencil"
          size={50}
          color="grey"
          style={{ marginLeft: 200 }}
        />
      </Text>
      <Text style={{ marginLeft: 150 }}>
        <MaterialIcons
          name="enhance-photo-translate"
          size={50}
          color="orange"
        />{" "}
      </Text>
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: 1,
          marginTop: 50,
        }}
      />
      <Text style={{ marginTop: 80, fontWeight: "bold", fontSize: 18 }}>
        <AntDesign
          name="heart"
          size={40}
          color="#00FFFF"
          style={{ marginLeft: 70 }}
        />{" "}
        Aumente suas chances
      </Text>
      <Text style={{ fontSize: 15, marginLeft: 70 }}>
        {" "}
        Descole curtidas ilimitadas com Tinder Plus!
      </Text>
      <Text><Entypo name="dots-three-horizontal" size={24} color="white" /></Text>
      

      <Text
        style={{
          fontSize: 30,
          marginTop: 70,
          borderWidth: 1,
          borderRadius: 9,
          marginBottom: 10,
          marginLeft: 40,
          marginRight: 40,
          color: "red",
        }}
      >
        {" "}
        Meu Tinder Plus <AntDesign name="trademark" size={12} color="red" /> {" "}
      </Text>
      <View
        style={{
          position: "flex",
          left: 30,
          right: 0,
          bottom: 0,
          backgroundColor: "white",
        }}
      >
        <Text>
          {" "}
          <FontAwesome5
            name="fire"
            size={18}
            color="grey"
            title="App"
            onPress={() => {
              navigation.navigate("Home");
            }}
          />{" "}
          <FontAwesome5
            name="star-of-life"
            size={18}
            color="grey"
            style={{ marginLeft: 70 }}
          />{" "}
          <MaterialCommunityIcons
            name="message"
            size={18}
            color="grey"
            style={{ marginLeft: 70 }}
          />{" "}
          <Entypo
            name="user"
            size={18}
            color="red"
            style={{ marginLeft: 70 }}
            title="Perfil"
            onPress={() => {
              navigation.navigate("Perfil");
            }}
          />{" "}
        </Text>
      </View>
    </View>
  );
};

export default Perfil;
