import { StyleSheet } from 'react-native';
import { theme } from '../../../global/styles/theme';
 
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.dark
  },
  content: {
    alignItems: 'center',
    marginTop: 30
  },
  contentText: {
    width: '90%',
    marginBottom: 16
  },
  text: {
    fontFamily: theme.fonts.title500,
    fontSize: 20,
    color: theme.colors.secondary
  },
  textInputContainer: {
    width: '90%',
    backgroundColor: theme.colors.primary,
    fontSize: 18,
    marginBottom: 16
  },
  switchContainer: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 16
  },
  textShowPass: {
    fontFamily: theme.fonts.text500,
    fontSize: 16,
    color: theme.colors.secondary,
    marginLeft: 8
  },
  buttonContainer: {
    marginTop: 16,
    backgroundColor: theme.colors.purple,
    borderRadius: 5,
    width: '90%',
  }
});