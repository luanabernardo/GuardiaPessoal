import * as React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Botao from './components/botao'
import Menu from './screens/menu';
import CadastroScreen from './screens/registro'
import LoginScreen from './screens/login';


function HomeScreen() {
  const navigation = useNavigation();

  return (

    <View style={styles.container}>
      <View>
        <Text style={styles.boldText}>Bem-Vinda!</Text>
      </View>
      <Image
        source={require('./assets/GP2.png')}
        style={styles.logo}
      />
        
        <View>
          <Botao
            title="Login"
            onPress={() => navigation.navigate('Login')}
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
    <NavigationContainer >
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#8c4f4d',
          },
          headerTintColor: 'white',
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Guardiã Pessoal' }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Guardiã Pessoal - LOGIN' }}
        />
        <Stack.Screen
          name="Registro"
          component={CadastroScreen}
          options={{ title: 'Guardiã Pessoal - CADASTRO' }}
        />
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{ title: 'Guardiã Pessoal - MENU' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
logo:{
  width: 200,
  height: 200,
  marginBottom: 20,
  marginTop: 20,
  borderRadius:100,
  borderWidth: 7,
  borderColor: '#8c4f4d',
},
  boldText: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#8c4f4d',
    marginTop: 20,

  },
  caixinhadetexto: {
    flexDirection: 'row',
    borderWidth: 1,
    padding: 10,
    width: '50%',
    borderRadius: 10,
    marginTop: 15,
    marginBottom: 10,
  },
  texto:{
    marginTop: 20,
    fontSize: 18, 
  },

});

export default App;