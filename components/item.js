import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

const ItemLista = () => {
  const [pessoas, setPessoas] = useState([
    { nome: "Segurança Pessoal Feminina(SPF)", key: "1" },
    { nome: "Recursos de Emergência", key: "2" },
    { nome: "Adicionar localização em tempo real", key: "3" },
    { nome: "Tutoriais de Segurança", key: "5" },
    { nome: "Recursos de segurança personalizados", key: "6" },
    { nome: "Alertas", key: "7" },
    { nome: "Suporte", key: "8" },
  ]);

  return (
    <View>
      {pessoas.map((pessoa) => (
        <TouchableOpacity key={pessoa.key} style={styles.itemContainer}>
          <Text style={styles.itemText}>{pessoa.nome}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = {
  itemContainer: {
    height: 130,
    backgroundColor: "#8c4f4d",
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
    borderRadius: 20,
  },
  itemText: {
    fontSize: 18,
    color: 'white',
  },
};

export default ItemLista;
