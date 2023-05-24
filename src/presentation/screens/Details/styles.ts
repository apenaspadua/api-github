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
    fontSize: 34,
    fontFamily: theme.fonts.title700,
    color: theme.colors.secondary,
    marginStart: 5
  },
  avatar: {
    height: 150,
    width: 150,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: theme.colors.purple
  },
  containerInfo: {
    width: '90%',
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    marginTop: 24,
    padding: 20
  },
  text: {
    fontFamily: theme.fonts.text500,
    color: theme.colors.secondary,
    fontSize: 15
  },
  contentInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  name: {
    fontFamily: theme.fonts.text500,
    color: theme.colors.secondary,
    fontSize: 22,
  },
});