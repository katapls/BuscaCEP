import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function Container({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    width: '90%',
    padding: 25,
    borderRadius: 20,
    elevation: 5,
  },
});