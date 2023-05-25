import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import * as LocalAuthentication from 'expo-local-authentication';
import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Button, Snackbar, Switch, Text, TextInput } from 'react-native-paper';

import { loginService } from '../../../application/services/login';
import { saveToken } from '../../../application/storage/tokenUser';
import Header from '../../../global/components/ Header';
import { theme, themePaper } from '../../../global/styles/theme';
import { screensProps } from '../../../types/navigationProps';
import styles from './styles';

const Sign: React.FC = () => {
  const navigation = useNavigation<screensProps>();
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState(false);
  const [messageError, setMessageError] = React.useState('');
  const [visible, setVisible] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const onDismissSnackBar = () => setVisible(false);

  function validateField(username: string, password: string): boolean {
    const isValid = !!username.trim() && !!password.trim();
    if (!isValid) {
      setError(true);
      setMessageError('Please, fill in all fields!')
      setVisible(true);
    }
    return isValid;
  }

  React.useEffect(() => {
    checkLoggedIn();
  }, []);

  async function checkLoggedIn() {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token) {
       authenticateBiometric()
      }
    } catch (error) {
      throw error;
    }
  }

  async function handleLogin() {
    await loginService(username, password)
      .then((data) => {
        console.log('USUARIO LOGADO');
        saveToken(data.token);
        navigation.navigate('Home');
      })
      .catch(() => {
        setError(true);
        setMessageError('Username or password incorrect!')
        setVisible(true);
      });
  }

  async function handleLoginDevice() {
    saveToken('tokenteste');
    navigation.navigate('Home');
  }

  async function authenticateBiometric() {
    const hasBiometricAuth = await LocalAuthentication.hasHardwareAsync();

    if (hasBiometricAuth) {
      const isBiometricEnrolled = await LocalAuthentication.isEnrolledAsync();

      if (isBiometricEnrolled) {
        const { success } = await LocalAuthentication.authenticateAsync();
        if (success) {
          navigation.navigate('Home');
        }
      }
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.contentText}>
          <Text style={styles.text}>Please, enter with your access.</Text>
        </View>
        <TextInput
          style={styles.textInputContainer}
          label="User"
          autoCapitalize="none"
          onChangeText={(text) => setUsername(text)}
          textColor={theme.colors.secondary}
          activeUnderlineColor={theme.colors.textInput}
          contentStyle={{ fontFamily: theme.fonts.text500 }}
          error={error}
        />
        <TextInput
          style={styles.textInputContainer}
          label="Password"
          autoCapitalize="none"
          secureTextEntry={!isSwitchOn}
          onChangeText={(text) => setPassword(text)}
          textColor={theme.colors.secondary}
          activeUnderlineColor={theme.colors.textInput}
          contentStyle={{ fontFamily: theme.fonts.text500 }}
          error={error}
        />
        <View style={styles.switchContainer}>
          <Switch theme={themePaper} value={isSwitchOn} onValueChange={onToggleSwitch} />
          <Text style={styles.textShowPass}>Show password</Text>
        </View>
        <Button
          style={styles.buttonContainer}
          mode={'contained'}
          labelStyle={{ fontSize: 18 }}
          onPress={() => {
            if (validateField(username, password)) handleLogin();
          }}
        >
          Sign
        </Button>
      </View>
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'Understand',
          onPress: () => {
            setVisible(false);
          },
        }}
      >
        {messageError}
      </Snackbar>
    </SafeAreaView>
  );
};

export default Sign;
