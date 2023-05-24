import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import { Feather } from '@expo/vector-icons';
import { Text } from 'react-native-paper';

const  Header: React.FC = () => (
  <View style={styles.header}>
    <Feather name='github' size={36} color={'white'}/>
    <Text style={styles.title}>Github Users</Text>
  </View>
)

export default  Header;