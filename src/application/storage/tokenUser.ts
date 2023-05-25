import AsyncStorage from '@react-native-async-storage/async-storage';

export async function saveToken(token: string): Promise<void> {
  await AsyncStorage.setItem('token', token);
  console.log('token salvo');
  
}

export async function removeToken(): Promise<void> {
  await AsyncStorage.removeItem('token');
  console.log('token removido');
}