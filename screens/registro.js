import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Botao from '../components/botao'
import Input from '../components/input';

export default function CadastroScreen({ navigation }) {

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");
  const [value, setValue] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (value === 'gustavo') {
      setShowMessage(true);
    } else {
      setShowMessage(false);
    }
  }, [value]);

  const Nome = (text) => {
    setNome(text);
  };

  const Email = (text) => {
    setEmail(text);
  };

  const Senha = (text) => {
    setSenha(text);
  };

  const ConfirmSenha = (text) => {
    setConfirmSenha(text);
  };
  const Telefone = (text) => {
    setTelefone(text);
  };

  const handleCadastro = () => {

    console.log('Nome:', nome);
    console.log('E-mail:', email);
    console.log('Senha:', senha);
    console.log('Telefone:', telefone);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.caixinha}>

        <View>

          <Text style={styles.texto}>Nome:</Text>
          <View>
            <Input multiline
              placeholder='Enter your name'
              onChangeText={setValue}
              value={value} />
          </View>
          {showMessage && (
            <Text style={styles.message}> *nome não está disponivel </Text>
          )}
        </View>

        <Text style={styles.texto}>E-mail:</Text>
        <View >
          <Input
            multiline
            placeholder='Enter your email'
            onChangeText={Email}
            value={email}
          />
        </View>

        <Text style={styles.texto}>Telefone:</Text>
        <View>
          <Input
            keyboardType='numeric'
            placeholder='Enter your phone number'
            onChangeText={Telefone}
            value={telefone}
          />

        </View>

        <Text style={styles.texto}>Senha:</Text>
        <View>
          <Input
            keyboardType='numeric'
            placeholder='Enter your password'
            onChangeText={Senha}
            value={senha}
            secureTextEntry={true}
          />
        </View>

        <Text style={styles.texto}>Confirmar Senha:</Text>
        <View >
          <Input
            keyboardType='numeric'
            placeholder='Confirm your password'
            onChangeText={ConfirmSenha}
            value={confirmSenha}
            secureTextEntry={true}

          />
        </View>

        <View>
          <Botao
            title="Cadastrar"
            onPress={handleCadastro}
          />
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
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
  texto:{
    marginTop: 20,
    fontSize: 18,
  },
  caixa: {
    marginRight: 20, 
    padding:2,
  },

  caixinha: {
    marginTop: 20,
    padding: 40,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  message: {
    color: 'red',
    fontSize: 15,
    fontStyle: 'italic',
    fontWeight: 'bold',
  }

});