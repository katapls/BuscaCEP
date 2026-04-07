import { useState } from 'react';
import { Alert, StyleSheet, View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import axios from 'axios';

export default function Cadastro({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [telefone, setTelefone] = useState('');
  const [empresa, setEmpresa] = useState('');

  function mascaraTelefone(valor) {
    return valor
      .replace(/\D/g, '')
      .replace(/^(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d{1,4})$/, '$1-$2')
      .slice(0, 15);
  }

  async function cadastrar() {
    if (!nome || !email || !senha || !telefone || !empresa) {
      Alert.alert('Erro', 'Tem campos vazios');
      return;
    }

    const values = {
      nome:     nome,
      email:    email,
      senha:    senha,
      telefone: telefone.replace(/\D/g, ''), // envia só números
      empresa:  empresa,
    };

    try {
      const response = await axios.post('http://10.0.2.2:8000/api/Cadastro_usuario', values);
      console.log(response.data.usuario);
      Alert.alert('Sucesso', 'Conta criada com sucesso!');
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Erro', 'Erro ao cadastrar');
      console.error(error);
    }
  }

  return (
    <ImageBackground source={require('../assets/cadastro.png')} style={style.fundo}>
      <View style={style.sobreposicao}>
        <TouchableOpacity style={style.botaoVoltar} onPress={() => navigation.goBack()}>
          <Text style={style.textoVoltar}>←</Text>
        </TouchableOpacity>
        <View style={style.cartao}>
          <Text style={style.titulo}>Criar Conta</Text>
          <TextInput
            style={style.campo}
            placeholder="Nome Completo"
            value={nome}
            onChangeText={setNome}
          />
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
          <TextInput
            style={style.campo}
            placeholder="Telefone"
            keyboardType="phone-pad"
            value={telefone}
            onChangeText={(text) => setTelefone(mascaraTelefone(text))}
            maxLength={15}
          />
          <TextInput
            style={style.campo}
            placeholder="Empresa"
            value={empresa}
            onChangeText={setEmpresa}
          />
          <TouchableOpacity style={style.botao} onPress={cadastrar}>
            <Text style={style.textoBotao}>CADASTRAR</Text>
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
  campo:        { borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 12, marginBottom: 12 },
  botao:        { backgroundColor: '#74a882', padding: 15, borderRadius: 10, alignItems: 'center' },
  textoBotao:   { color: '#ffffff', fontWeight: 'bold' },
});