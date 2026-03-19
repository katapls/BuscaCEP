import React from 'react';
import { Text as RNText } from 'react-native';

export default function Text({ children, style }) {
  return (
    <RNText style={[{ fontFamily: 'BebasNeue' }, style]}>
      {children}
    </RNText>
  );
}