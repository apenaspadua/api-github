import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import OneSignal from 'react-native-onesignal';
import { PaperProvider } from 'react-native-paper';

import { Routes } from './src/navigation/routes';

import 'react-native-url-polyfill';

export default function App() {
  OneSignal.setAppId("9b0f5fa4-a2d8-475b-8b0d-f209c1bd39f1");

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }
  
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <PaperProvider>
        <Routes />
      </PaperProvider>
    </NavigationContainer>
  );
}
