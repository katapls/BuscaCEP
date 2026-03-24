import React from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={style.container}>

      <View style={style.barraSuperior}>
        <Text style={style.logo}>CEP Finder</Text>
        <View style={style.fileira}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={style.linkNav}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
            <Text style={style.linkNav}>Cadastro</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={style.conteudo}>

        <Text style={style.titulo}>931.000</Text>
        <Text style={style.subtitulo}>CEPs conhecidos</Text>

        <TouchableOpacity style={style.botao} onPress={() => navigation.navigate('Cep')}>
          <Text style={style.textoBotao}>Buscar um CEP</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  container:{ flex: 1, backgroundColor: '#fff' },
  barraSuperior:{ paddingTop: 50, paddingBottom: 15, paddingHorizontal: 20, backgroundColor: '#b78143', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  logo:{ color: '#fff', fontSize: 18, fontWeight: 'bold' },
  fileira:{ flexDirection: 'row', gap: 16 },
  linkNav:{ color: '#fff', fontSize: 14 },
  conteudo:{ padding: 24 },
  titulo:{ fontSize: 34, fontWeight: 'bold', color: '#222', marginBottom: 8 },
  subtitulo:{ fontSize: 20, color: '#888', marginBottom: 32, fontWeight:'bold'},
  botao:{ backgroundColor: '#b78143', padding: 16, borderRadius: 8, alignItems: 'center' },
  textoBotao:{ color: '#fff', fontSize: 16, fontWeight: 'bold' },
});