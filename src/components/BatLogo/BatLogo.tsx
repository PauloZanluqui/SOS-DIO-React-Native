import React from 'react';
import { View, Text, Image } from 'react-native';

import batLogo from '../../../assets/Logo.jpg'

export function BatLogo() {
  return (
    <>
        <Image 
            source={batLogo}
        />
    </>
  );
}