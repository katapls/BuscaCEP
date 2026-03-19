import React from 'react';
import { useFonts } from 'expo-font';
import Home from './pages/Home';

export default function App() {
  const [fontsLoaded] = useFonts({
    'BebasNeue': require('./src/fonts/BebasNeue-Regular.ttf'),
  });

  if (!fontsLoaded) return null;

  return <Home />;
}