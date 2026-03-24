import { useState } from 'react';
import { Alert, StyleSheet, View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

export default function Cadastro({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  function cadastrar() {
    if (!nome || !email || !pass) {
      Alert.alert('Ops', 'Tem campos vazios');
      return;
    }
    Alert.alert('Excelsior', 'Conta criada');
  }

  return (
    <ImageBackground source={require('../assets/cadastro.png')} style={style.fundo}>
      <View style={style.sobreposicao}>

        <TouchableOpacity style={style.botaoVoltar} onPress={() => navigation.goBack()}>
          <Text style={style.textoVoltar}>←</Text>
        </TouchableOpacity>

        <View style={style.cartao}>
          <Text style={style.titulo}>Criar Conta</Text>
          <TextInput style={style.campo} placeholder="Nome Completo" value={nome} onChangeText={setNome} />
          <TextInput style={style.campo} placeholder="E-mail" keyboardType="email-address" value={email} onChangeText={setEmail} />
          <TextInput style={style.campo} placeholder="Senha" secureTextEntry value={pass} onChangeText={setPass} />

          <TouchableOpacity style={style.botao} onPress={cadastrar}>
            <Text style={style.textoBotao}>CADASTRAR</Text>
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
  botao:{ backgroundColor: '#74a882', padding: 15, borderRadius: 10, alignItems: 'center' },
  textoBotao:{ color: '#fff', fontWeight: 'bold' },
});