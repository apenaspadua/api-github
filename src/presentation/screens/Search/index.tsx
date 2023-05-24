import React from 'react';
import { Text, TextInput, Button, Snackbar} from 'react-native-paper';
import { 
  SafeAreaView, 
} from 'react-native';
import styles from './styles';
import { theme } from '../../../global/styles/theme';
import {useNavigation} from '@react-navigation/native';
import { screensProps } from '../../../types/navigationProps';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'; 

const Search: React.FC = () => {
  const [login, setLogin] = React.useState("");
  const [error, setError] = React.useState(false)
  const [visible, setVisible] = React.useState(false);
  const onDismissSnackBar = () => setVisible(false);
  const navigation = useNavigation<screensProps>();

  function validateField(text: string): boolean {
    const isValid = !!text.trim();
    setError(!isValid);
    setVisible(!isValid);
    return isValid;
  }
  return(
    <SafeAreaView style={styles.container}>      
      <TouchableOpacity style={styles.header} onPress={() => navigation.goBack()}>
        <Feather name='arrow-left' size={24} color={theme.colors.secondary} style={{marginRight: 10}}/>
        <Text style={styles.title}>Search a Github User</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.textInputContainer}
        label='Username'
        autoCapitalize='none'
        value={login}
        onChangeText={text => setLogin(text)}
        textColor={theme.colors.secondary}
        activeUnderlineColor={theme.colors.textInput}
        contentStyle={{ fontFamily: theme.fonts.text500}}
        error={error}
      />
      <Button 
        icon={'account-search-outline'      }
        style={styles.buttonContainer}
        mode={'contained'} 
        labelStyle={{ fontSize: 18 }}
        onPress={() => { 
          if(validateField(login))
          navigation.navigate('Details', { login })
        }}>
        Search
      </Button>
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'Understand',
          onPress: () => {
            setVisible(false)
          },
        }}>
        Fill in the username field.
      </Snackbar>
    </SafeAreaView>
  );
}

export default Search;