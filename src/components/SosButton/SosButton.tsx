import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface Props {
  title: string;
  toForm: string;
}

import { styles } from './SosButtonStyles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export function SosButton({title, toForm}: Props) {
  const {navigate} = useNavigation<NativeStackNavigationProp<any>>();

  const AsyncAlert = async () => new Promise(() => {
    if(toForm == 'Home'){
      Alert.alert(
        'Sucesso!',
        'Dados enviados com sucesso.',
        [
          {
            text: 'Ok',
            onPress: () => {
              navigate(toForm);
            },
          },
        ]
      );
    } else {
      navigate(toForm);
    }
    
  });
  
  return (
    <View>
        <TouchableOpacity style={styles.button} onPress={AsyncAlert}>
          <Text style={styles.textButton}>{title}</Text>
        </TouchableOpacity>
    </View>
  );
}