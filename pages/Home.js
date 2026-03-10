import React, { useState, useEffect } from 'react'; 
import { StyleSheet, ScrollView, View as BaseView } from 'react-native';
import MyView from '../componentes/View';
import MyText from '../componentes/Text';
import MyTouchableOpacity from '../componentes/TouchableOpacity';
import Container from '../componentes/Container';

import Login from './Login';
import Cadastro from './Cadastro';
import Splash from './splash';

export default function Home() {
  const [telaAtual, setTelaAtual] = useState('splash');

  useEffect(() => {
    if (telaAtual === 'splash') {
      const timer = setTimeout(() => {
        setTelaAtual('home');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [telaAtual]);

  if (telaAtual === 'splash') {
    return <Splash />;
  }

  if (telaAtual === 'login') {
    return <Login onBack={() => setTelaAtual('home')} />;
  }

  if (telaAtual === 'cadastro') {
    return <Cadastro onBack={() => setTelaAtual('home')} />;
  }

  return (
    <BaseView style={styles.mainContainer}>
      <MyView style={styles.navbar}>
        <MyText style={styles.logoText}>EverSweet</MyText>
        
        <BaseView style={styles.navButtons}>
          <MyTouchableOpacity 
            style={styles.navIconBtn} 
            onPress={() => setTelaAtual('login')}
          >
            <MyText style={styles.navBtnText}>LOGIN</MyText>
          </MyTouchableOpacity>

          <MyTouchableOpacity 
            style={[styles.navIconBtn, styles.registerBtn]} 
            onPress={() => setTelaAtual('cadastro')}
          >
            <MyText style={styles.navBtnText}>CADASTRO</MyText>
          </MyTouchableOpacity>
        </BaseView>
      </MyView>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <MyView style={styles.contentSection}>
          <MyText style={styles.sectionTitle}>Resumo de Vendas</MyText>
          
          <Container>
            <MyView style={styles.statsRow}>
              <MyView style={styles.statBox}>
                <MyText style={styles.statValue}>18</MyText>
                <MyText style={styles.statLabel}>Vendas</MyText>
              </MyView>
              
              <BaseView style={styles.divider} />

              <MyView style={styles.statBox}>
                <MyText style={styles.statValue}>R$ 0009</MyText>
                <MyText style={styles.statLabel}>Lucro</MyText>
              </MyView>
            </MyView>
          </Container>
        </MyView>
      </ScrollView>
    </BaseView>
  );
}

const styles = StyleSheet.create({
  mainContainer: { 
    flex: 1, 
    backgroundColor: '#f8f7ff' 
  },
  navbar: {
    height: 110,
    backgroundColor: '#fda7f2',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingTop: 45,
    elevation: 4,
  },
  logoText: { 
    color: 'white', 
    fontSize: 18, 
    fontWeight: 'bold', 
    letterSpacing: 1 
  },
  navButtons: { 
    flexDirection: 'row', 
    gap: 8 
  },
  navIconBtn: { 
    backgroundColor: '#7b7a7a', 
    paddingVertical: 6, 
    paddingHorizontal: 12, 
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(149, 149, 149, 0.3)'
  },
  registerBtn: { 
    backgroundColor: '#7b7a7a' 
  },
  navBtnText: { 
    color: 'white', 
    fontSize: 11, 
    fontWeight: 'bold' 
  },
  scrollContent: { 
    paddingBottom: 30, 
    alignItems: 'center' 
  },
  contentSection: { 
    width: '100%', 
    paddingHorizontal: 20, 
    paddingTop: 20 
  },
  sectionTitle: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    color: '#333', 
    marginBottom: 20, 
    textAlign: 'left' 
  },
  statsRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center' 
  },
  statBox: { 
    alignItems: 'center', 
    flex: 1 
  },
  divider: { 
    width: 1, 
    height: 40, 
    backgroundColor: '#eee' 
  },
  statValue: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    color: '#b60000' 
  },
  statLabel: { 
    fontSize: 12, 
    color: '#888', 
    marginTop: 4, 
    textTransform: 'uppercase' 
  },
});