import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import axios from 'axios';

export default function Cep({ navigation }) {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState({});

  async function buscar() {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    setEndereco(response.data);
  }

  return (
    <ImageBackground source={require('../assets/cep.png')} style={style.fundo}>
      <View style={style.sobreposicao}>

        <TouchableOpacity style={style.botaoVoltar} onPress={() => navigation.goBack()}>
          <Text style={style.textoVoltar}>←</Text>
        </TouchableOpacity>

        <View style={style.cartao}>
          <Text style={style.titulo}>Buscar CEP</Text>
          <TextInput style={style.campo} placeholder="CEP" value={cep} onChangeText={setCep} keyboardType="numeric" maxLength={8} />
          <TextInput style={style.campo} placeholder="Rua" value={endereco.logradouro} />
          <TextInput style={style.campo} placeholder="Bairro" value={endereco.bairro} />
          <TextInput style={style.campo} placeholder="Cidade" value={endereco.localidade} />
          <TextInput style={style.campo} placeholder="Estado" value={endereco.estado} />

          <TouchableOpacity style={style.botao} onPress={buscar}>
            <Text style={style.textoBotao}>Buscar CEP</Text>
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
  botao:{ backgroundColor: '#479d5b', padding: 15, borderRadius: 10, alignItems: 'center' },
  textoBotao:{ color: '#fff', fontWeight: 'bold' },
});