import { useState } from 'react';
import { Alert, StyleSheet, View as BaseView } from 'react-native';
import axios from 'axios';
import MyText from '../componentes/Text';
import MyTextInput from '../componentes/TextInput';
import MyTouchableOpacity from '../componentes/TouchableOpacity';
import MyImageBackground from '../componentes/ImageBackground';
import Container from '../componentes/Container';

export default function Cep({ navigation }) {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState({});

  async function Buscar() {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    console.log(response.data);
    setEndereco(response.data);
  }

  return (
    <MyImageBackground source={{ uri: 'https://i.pinimg.com/736x/f4/a9/20/f4a920df89961e1c6c2ad5f8e3f3d133.jpg' }}>
      <BaseView style={styles.overlay}>
        <MyTouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <MyText style={styles.backText}>←</MyText>
        </MyTouchableOpacity>
        <Container>
          <MyText style={styles.title}>Buscar CEP</MyText>
          <MyTextInput placeholder="CEP:" value={cep} onChangeText={setCep} keyboardType="numeric" maxLength={8} />
          <MyTextInput placeholder="Rua:" value={endereco.logradouro} />
          <MyTextInput placeholder="Bairro:" value={endereco.bairro} />
          <MyTextInput placeholder="Cidade:" value={endereco.localidade} />
          <MyTextInput placeholder="Estado:" value={endereco.estado} />
          <MyTouchableOpacity style={styles.btnSuccess} onPress={Buscar}>
            <MyText style={styles.btnText}>Buscar Cep</MyText>
          </MyTouchableOpacity>
        </Container>
      </BaseView>
    </MyImageBackground>
  );
}

const styles = StyleSheet.create({
  overlay: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.3)' },
  title: { fontSize: 30, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  btnSuccess: { backgroundColor: '#a87d74', padding: 15, borderRadius: 10, alignItems: 'center' },
  btnText: { color: 'white', fontWeight: 'bold' },
  backButton: { position: 'absolute', top: 50, left: 20, backgroundColor: 'rgba(255,255,255,0.3)', width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center' },
  backText: { color: 'white', fontSize: 24, fontWeight: 'bold' }
});