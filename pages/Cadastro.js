import { useState } from 'react';
import { Alert } from 'react-native';
import { StyleSheet, View as BaseView } from 'react-native';
import MyText from '../componentes/Text';
import MyTextInput from '../componentes/TextInput';
import MyTouchableOpacity from '../componentes/TouchableOpacity';
import MyImageBackground from '../componentes/ImageBackground';
import Container from '../componentes/Container';

export default function Cadastro({ onBack, navigation }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  function cadastrar() {
    Alert.alert("Sucesso", "Conta criada com sucesso!");
  }

  return (
    <MyImageBackground source={{ uri: 'https://i.pinimg.com/736x/f4/a9/20/f4a920df89961e1c6c2ad5f8e3f3d133.jpg' }}>
      <BaseView style={styles.overlay}>
        <MyTouchableOpacity style={styles.backButton} onPress={onBack}>
          <MyText style={styles.backText}>←</MyText>
        </MyTouchableOpacity>
        <Container>
          <MyText style={styles.title}>Criar Conta</MyText>
          <MyTextInput
            placeholder="Nome Completo"
            value={nome}
            onChangeText={setNome}
          />
          <MyTextInput
            placeholder="E-mail"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <MyTextInput
            placeholder="Senha"
            secureTextEntry
            value={pass}
            onChangeText={setPass}
          />
          <MyTouchableOpacity style={styles.btnSuccess} onPress={cadastrar}>
            <MyText style={styles.btnText}>CADASTRAR</MyText>
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