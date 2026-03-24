import React, { useEffect } from "react";
import { ImageBackground, Image, StyleSheet } from "react-native";

export default function Splash({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Home');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ImageBackground source={require('../assets/background.jpg')} style={style.imgBack}>
      <Image source={require('../assets/imagembossal.png')} style={style.imgLogo} resizeMode="contain" />
    </ImageBackground>
  );
}

const style = StyleSheet.create({
  imgBack: { flex: 1, justifyContent: "center", alignItems: "center" },
  imgLogo: { width: 300, height: 200 }
});