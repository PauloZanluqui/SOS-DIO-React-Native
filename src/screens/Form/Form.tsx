import React from "react";
import { View, ScrollView, Image } from "react-native";

import { styles } from "./FormStyles";
import { BatForm } from "../../components/BatForm/BatForm";
import batLogo from "../../../assets/LogoResize.jpg";
import { SosButton } from "../../components/SosButton/SosButton";

export default function Form() {
  return (
    <ScrollView style={styles.scrollViewContainer}>
      <Image style={styles.LogoContainer} source={batLogo} />
      <View style={styles.container}>
        <BatForm />

        <View style={styles.ButtonContainer}>
            <SosButton title="Enviar Solicitação" toForm="Home"/>
        </View>
        
      </View>
    </ScrollView>
  );
}
