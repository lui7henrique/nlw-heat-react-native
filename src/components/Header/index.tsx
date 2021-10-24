import React from "react";

import { Text, View } from "react-native";
import LogoSvg from "../../assets/logo.svg";

import { styles } from "./styles";

export function Header() {
  return (
    <View>
      <LogoSvg />
      <Text>Sair</Text>
    </View>
  );
}
