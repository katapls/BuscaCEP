import { useState } from 'react';
import { Alert, StyleSheet, View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

export default function Login({ navigation }) {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  function logar() {
    if (user === 'Busca' && pass === 'CEP') {
      Alert.alert('Excelsior', 'Usuário logado!');
    } else {
      Alert.alert('ERRO', 'Usuário ou senha incorretos!');
      navigation.navigate('Cep');
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
          <TextInput style={style.campo} placeholder="Nome" value={user} onChangeText={setUser} />
          <TextInput style={style.campo} placeholder="Senha" secureTextEntry value={pass} onChangeText={setPass} />

          <TouchableOpacity style={style.botao} onPress={logar}>
            <Text style={style.textoBotao}>ENTRAR</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ImageBackground>
  );
}

const style = StyleSheet.create({
  fundo:{ flex: 1 },
  sobreposicao:{ flex: 1, justifyContent: 'center', alignItems: 'center' },
  botaoVoltar:{ position: 'absolute', top: 50, left: 20, backgroundColor: 'rgba(138, 42, 4, 0.4)', width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center' },
  textoVoltar:{ color: '#fff', fontSize: 24, fontWeight: 'bold', marginBottom: 15 },
  cartao:{ width: '85%', backgroundColor: '#fff', borderRadius: 12, padding: 24 },
  titulo:{ fontSize: 30, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  campo:{ borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 12, marginBottom: 12 },
  botao:{ backgroundColor: '#e4ec4c', padding: 15, borderRadius: 10, alignItems: 'center' },
  textoBotao:{ color: '#000', fontWeight: 'bold' },
});