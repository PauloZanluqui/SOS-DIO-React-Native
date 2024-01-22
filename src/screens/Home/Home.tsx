import React from 'react';
import { View } from 'react-native';
import { styles } from './HomeStyles';
import { SosButton } from '../../components/SosButton/SosButton';
import { BatLogo } from '../../components/BatLogo/BatLogo';

export default function Home() {
  return (
    <View style={styles.AppContainer}>
      <View style={styles.LogoContainer}>
        <BatLogo />
      </View>

      <View style={styles.ButtonContainer}>
        <SosButton title='Solicitar Ajuda' toForm='Form'/>
      </View>
    </View>
  );
}