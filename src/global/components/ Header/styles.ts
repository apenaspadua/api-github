import { Platform, StyleSheet } from 'react-native';
import { theme } from '../../../global/styles/theme';
 
export default StyleSheet.create({
  header: {
    marginTop: Platform.OS === 'ios' ? 0 : 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontFamily: theme.fonts.title700,
    color: theme.colors.secondary,
    marginStart: 8,
    marginTop: 24,
    marginBottom: 14
  },
});