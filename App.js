import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Botao from './components/botao'
import Menu from './screens/menu';
import CadastroScreen from './screens/registro'


function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vinda</Text>
      <View style={styles.logoContainer}>
      </View>
      <View style={styles.quadrado}>
        <Text style={styles.login}>LOGIN:</Text>
        <View style={styles.caixinhadetexto}>
          <MaterialCommunityIcons name="email-newsletter" size={24} color="black" />
          <TextInput
            multiline
            style={styles.input}
            placeholder='Digite seu email'
          />
        </View>

        <Text style={styles.senha}>SENHA:</Text>

        <View style={styles.caixinhadetexto}>
          <Entypo name="key" size={24} color="black" />
          <TextInput
            keyboardType="numeric"
            style={styles.input}
            placeholder="Digite sua senha"
          />
        </View>
        <Botao
          title="Entrar"
          onPress={() => navigation.navigate('Menu')}
        />
        <Botao
          title="Ainda não tem cadastro?"
          onPress={() => navigation.navigate('Registro')}
        />
      </View>
    </View>
  );
}
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'TELA DE LOGIN' }}
        />
        <Stack.Screen
          name="Registro"
          component={CadastroScreen}
          options={{ title: 'TELA DE CADASTRO' }}
        />
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{ title: 'TELA DE MENU' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4dde7',
    alignItems: 'center',
    justifyContent: 'center',
  },

  boldText: {
    position: 'absolute',
    top: 60,
    fontWeight: 'bold',
    fontSize: 30,
    color: 'black',
    marginTop: 50,

  },
  title: {
    fontSize: 40,
    marginTop: 20,
    paddingTop: 20,
    marginVertical: 30,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: '#8c4f4d',
  },
  logoContainer: {

    position: 'absolute',
    top: 100,
    left: 40,
    justifyContent: 'center',
    marginVertical: 30,
    marginRight: 300,
    marginTop: 30,

  },

  input: {
    padding: 5,
    margin: 1,
    width: 200,

  },

  botao: {
    marginTop: 20,

  },
  botao1: {
    marginTop: 20,
    backgroundColor: '#8c4f4d',
  },

  caixinhadetexto: {
    flexDirection: 'row',
    borderWidth: 1,
    padding: 10,
    width: '50%',
    borderRadius: 10,
    marginTop: 15,
    marginBottom:10,
  },

  senha: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',

  },

  texto1: {
    fontSize: 15,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },

  login: {

    fontSize: 20,
    fontWeight: 'bold',

  },

  quadrado: {
    marginTop: 20,
    padding: 40,
    backgroundColor: 'white',
    borderRadius: 20,
  }

});

export default App;