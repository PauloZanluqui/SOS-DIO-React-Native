import React from 'react';
import { Text, TextInput } from 'react-native';

import { styles } from './BatFormStyles';

export function BatForm() {
  return (
    <>
        <Text style={styles.labels}>Nome</Text>
        <TextInput style={styles.inputer} />
        <Text style={styles.labels}>Telefone</Text>
        <TextInput style={styles.inputer} keyboardType="number-pad" />
        <Text style={styles.labels}>Endereço</Text>
        <TextInput style={styles.inputer} />
        <Text style={styles.labels}>Motivo</Text>
        <TextInput style={styles.inputerMultiline} multiline/>
    </>
  );
}