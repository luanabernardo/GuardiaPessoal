import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity ,Image} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ItemLista from "../components/item";

export default function Menu() {


  const [dados, setDados] = useState([
    { dado: "Meus Dados", key: "1" },
    { dado: "Recursos Utilizados", key: "2" },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.iconeContainer}>
      <Image
        source={require('../assets/GP2.png')}
        style={styles.logo}
      />
        <Text style={styles.boldText}>Recursos do Usuário</Text>
      </View>

      <View style={styles.quadrado}>
        <FlatList
          numColumns={2}
          keyExtractor={(item) => item.key}
          data={dados}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.caixaContainer}>
              <Text style={styles.item}>{item.dado || item.dado}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <ScrollView>
      <ItemLista/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor:"white"

  },
  logo:{
    width: 60,
    height: 60,
    marginBottom: 10,
    borderRadius:100,
    borderWidth: 1,
    borderColor: '#8c4f4d',
  },
  itemContainer: {
    height: 130,
    backgroundColor: "#8c4f4d",
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
    borderRadius: 20,
  },
  item: {
    fontSize: 18,
    color: "white",
  },
  iconeContainer: {
    marginTop:20,
    alignItems:'center',
    flexDirection: "column",

  },
  boldText: {
    fontWeight: "bold",
    fontSize: 22,
    color: "#8c4f4d",

  },
  quadrado: {
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: "f4dde7",
    padding: 10,
    marginBottom:20,
    marginLeft:15,
  },
  caixaContainer: {
    backgroundColor: "#8c4f4d",
    height: 70,
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 10,
    padding: 10,
  }
});
