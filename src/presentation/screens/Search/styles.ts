import { Platform, StyleSheet } from 'react-native';
import { theme } from '../../../global/styles/theme';
 
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.dark,
    alignItems: 'center'
  },

  header: {
    marginTop: Platform.OS === 'ios' ? 24 : 65,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24
  },
  title: {
    fontSize: 30,
    fontFamily: theme.fonts.title700,
    color: theme.colors.secondary,
  },
  textInputContainer: {
    width: '90%',
    backgroundColor: theme.colors.primary,
    fontSize: 18
  },
  buttonContainer: {
    marginTop: 16,
    backgroundColor: theme.colors.purple,
    borderRadius: 5,
    width: '90%',
  }
});