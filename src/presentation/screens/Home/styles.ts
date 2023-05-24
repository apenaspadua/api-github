import { StyleSheet } from 'react-native';
import { theme } from '../../../global/styles/theme';
 
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.dark
  },
  content: {
    alignItems: 'center'
  },
  textInputContainer: {
    width: '90%',
    backgroundColor: theme.colors.secondary,
    marginTop: 16
  },
  contentList: {
    width: '90%',
  },
  contentItemList: {
    height: 120,
    backgroundColor: theme.colors.primary,
    marginTop: 8,
    borderRadius: 5,
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center'
  },
  avatar: {
    height: 80,
    width: 80,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: theme.colors.purple
  },
  usernameText: {
    fontFamily: theme.fonts.text500,
    fontSize: 22,
    color: theme.colors.secondary,
    marginRight: 5
  },
  contentText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  urlText: {
    fontFamily: theme.fonts.text500,
    fontSize: 16,
    color: theme.colors.blue,
    marginLeft: 2
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 16,
    bottom: 16,
    backgroundColor: theme.colors.purple
  },
});