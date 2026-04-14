import { useState } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios';
import { Alert, StyleSheet, View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function logar() {
    if (email === '' || senha === '') {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    try {
      const response = await axios.post('http://10.0.2.2:8000/api/Login', {
        email: email,
        senha: senha,
      });

      if (response.data.token) {
        await AsyncStorage.setItem('token', response.data.token);
        await AsyncStorage.setItem('user_id', String(response.data.user_id));
        Alert.alert('Excelsior', 'Usuário logado!');
        navigation.navigate('Cep');
      } else {
        Alert.alert('Erro', 'Token não recebido');
      }
    } catch (error) {
      Alert.alert('ERRO', error.response?.data?.data || 'Usuário ou senha incorretos!');
      console.error(error);
    }
  }

  return (
    <ImageBackground source={require('../assets/login.png')} style={style.fundo}>
      <View style={style.sobreposicao}>
        <TouchableOpacity style={style.botaoVoltar} onPress={() => navigation.goBack()}>
          <Text style={style.textoVoltar}>←</Text>
        </TouchableOpacity>
        <View style={style.cartao}>
          <Text style={style.titulo}>Login</Text>
          <TextInput
            style={style.campo}
            placeholder="E-mail"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={style.campo}
            placeholder="Senha"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />
          <TouchableOpacity style={style.botao} onPress={logar}>
            <Text style={style.textoBotao}>ENTRAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const style = StyleSheet.create({
  fundo:        { flex: 1 },
  sobreposicao: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  botaoVoltar:  { position: 'absolute', top: 50, left: 20, backgroundColor: '#7c2c0d73', width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center' },
  textoVoltar:  { color: '#ffffff', fontSize: 24, fontWeight: 'bold', marginBottom: 15 },
  cartao:       { width: '85%', backgroundColor: '#ffffff', borderRadius: 12, padding: 24 },
  titulo:       { fontSize: 30, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  campo:        { borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 12, marginBottom: 12},
  botao: { backgroundColor: '#e4ec4c', padding: 15, borderRadius: 10, alignItems: 'center' },
  textoBotao: { color: '#000', fontWeight: 'bold' },
});