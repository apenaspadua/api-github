import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, Image, SafeAreaView, TouchableOpacity, View } from 'react-native';
import { ActivityIndicator, FAB, Text } from 'react-native-paper';

import UsersService from '../../../application/services/users';
import { removeToken } from '../../../application/storage/tokenUser';
import { UserModel } from '../../../domain/models/userModel';
import Header from '../../../global/components/ Header';
import { theme } from '../../../global/styles/theme';
import { screensProps } from '../../../types/navigationProps';
import styles from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation<screensProps>();
  const [users, setUsers] = React.useState([] as UserModel[])
  const [loading, setLoading] = React.useState(true)
  
  async function handleGetData() {
    const data = await UsersService.getUsers();    
    setUsers(data);
    setLoading(false)
  }

  React.useEffect(() => {
    handleGetData();
  }, [])

  const ItemView = ({ avatar, login, url }: any) => {
    let url_replace
    url_replace = url.replace("https://", "");    
    return (
      <TouchableOpacity style={styles.contentItemList} onPress={() => navigation.navigate('Details', { login })}>
        <Image style={styles.avatar} source={{ uri: avatar }} />
        <View>
          <View style={styles.contentText}>
            <Text style={styles.usernameText}>{login}</Text>
            <Feather name='star' size={22} color={theme.colors.yellow}/>
          </View>  
          <View style={styles.contentText}>
            <Feather name='link' size={16} color={theme.colors.blue}/>
            <Text style={styles.urlText}>{url_replace}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
  return(
    <SafeAreaView style={styles.container}>
      <Header />
      {
        loading ? (
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator animating={loading} color={theme.colors.purple} size={54} />
          </View>
        ) : 
        (
          <>
            <View style={styles.content}>
              <FlatList  
                showsVerticalScrollIndicator={false}
                style={styles.contentList}
                data={users}  
                keyExtractor={item => item.id}  
                renderItem={({item}) => <ItemView avatar={item.avatar_url} login={item.login} url={item.html_url}/>}
                contentContainerStyle={{ paddingBottom: '40%' }}
              />
            </View>    
            <FAB
              style={styles.fabSingup}
              small
              icon={'logout'}
              color={theme.colors.secondary}
              onPress={() => {
                removeToken()
                navigation.navigate('Sign')
              }}
            />
            <FAB
              style={styles.fabSearch}
              small
              icon={'account-search-outline'}
              color={theme.colors.secondary}
              onPress={() => navigation.navigate('Search')}
            />
          </>
        )
      }  
    </SafeAreaView>
  );
}

export default Home;