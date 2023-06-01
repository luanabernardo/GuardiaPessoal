import * as React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import Botao from '../components/botao'
import Input from '../components/input';

export default function LoginScreen({ navigation }) {
    return(
        <View style={styles.container}>
        <Image
          source={require('../assets/GP2.png')}
          style={styles.logo}
        />
          
          <View style={styles.quadrado}>
            <Text style={styles.texto}>LOGIN:</Text>
            <View>
              <Input
                multiline
                style={styles.input}
                placeholder='Digite seu email'
              />
            </View>
  
            <Text style={styles.texto}>SENHA:</Text>
  
            <View >
              <Input
                keyboardType="numeric"
                style={styles.input}
                placeholder="Digite sua senha"
              />
            </View>
            <View style={styles.esp}>
                 <Botao
              title="Entrar"
              onPress={() => navigation.navigate('Menu')}
            />
            </View>
           
        
          </View>
    
      </View>
    )
}  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
  logo:{
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius:100,
    borderWidth: 6,
    borderColor: '#8c4f4d',
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
      marginTop: 10,
      marginVertical: 30,
      fontStyle: 'italic',
      fontWeight: 'bold',
      color: '#8c4f4d',
    },
  
    texto:{
      marginTop: 20,
      fontSize: 18, 
    },
  
    quadrado: {
      marginTop: 20,
      padding: 40,
      backgroundColor: 'white',
      borderRadius: 20,
    },
    esp:{
        paddingTop:40
    }
  });