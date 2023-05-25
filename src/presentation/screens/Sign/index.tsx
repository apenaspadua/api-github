
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import React from 'react';
import { 
  SafeAreaView, View, 
} from 'react-native';
import { screensProps } from '../../../types/navigationProps';
import Header from '../../../global/components/ Header';
import { Button, Text, TextInput, Switch, Snackbar} from 'react-native-paper';
import { theme, themePaper } from '../../../global/styles/theme';
import { server } from '../../../mocks/server';
import axios from 'axios';

const Sign: React.FC = () => {
  const navigation = useNavigation<screensProps>();
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState(false);
  const [visible, setVisible] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const onDismissSnackBar = () => setVisible(false);

  function validateField(username: string, password: string): boolean {
    const isValid = !!username.trim() && !!password.trim();  
    if (!isValid) {
      setError(true);
      setVisible(true);
    }
    return isValid;
  }

  const handleLogin = async () => {
    server.listen();
    
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: 'admin',
          password: 'password',
        }),
      });
  
      if (response.ok) {
        console.log('Login successful');
      } else {
        const error = await response.json();
        console.error('Login failed:', error.errorMessage);
      }
    } catch (error) {
      console.error('Network request failed:', error);
    }

    server.close();
  };

  return(
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.contentText}>
          <Text style={styles.text}>Please, enter with your access.</Text>
        </View>
        <TextInput
          style={styles.textInputContainer}
          label='User'
          autoCapitalize='none'
          onChangeText={text => setUsername(text)}
          textColor={theme.colors.secondary}
          activeUnderlineColor={theme.colors.textInput}
          contentStyle={{ fontFamily: theme.fonts.text500}}
          error={error}
        />
        <TextInput
          style={styles.textInputContainer}
          label='Password'
          autoCapitalize='none'
          secureTextEntry={!isSwitchOn}
          onChangeText={text => setPassword(text)}
          textColor={theme.colors.secondary}
          activeUnderlineColor={theme.colors.textInput}
          contentStyle={{ fontFamily: theme.fonts.text500}}
          error={error}
        />
        <View style={styles.switchContainer}>
          <Switch 
            theme={themePaper}
            value={isSwitchOn} 
            onValueChange={onToggleSwitch} 
          />
          <Text style={styles.textShowPass}>Show password</Text>
        </View>
        <Button 
          style={styles.buttonContainer}
          mode={'contained'} 
          labelStyle={{ fontSize: 18 }}
          onPress={() => {
            if(validateField(username, password))
            handleLogin()
          }}>
          Sign
        </Button>
      </View>
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'Understand',
          onPress: () => {
            setVisible(false)
          },
        }}>
        Please, fill in all fields!
      </Snackbar>
    </SafeAreaView>
  );
}

export default Sign;