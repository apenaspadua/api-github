import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { Image, SafeAreaView, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ActivityIndicator, Text } from 'react-native-paper';

import UsersService from '../../../application/services/users';
import { UserDetailModel } from '../../../domain/models/userDetailModel';
import { theme } from '../../../global/styles/theme';
import { screensProps } from '../../../types/navigationProps';
import styles from './styles';

interface RouteParams {
  login: string;
}
const Details: React.FC = () => {
  const route = useRoute();
  const { login } = route.params as RouteParams;
  const [userDetails, setUsersDetails] = React.useState<UserDetailModel>()
  const [loading, setLoading] = React.useState(true)
  const navigation = useNavigation<screensProps>();

  async function handleGetData() {
    await UsersService.getDetailsUsers(login)
      .then((data) => {
        setUsersDetails(data);
        setLoading(false)
      })  
      .catch((error) => {
        console.log(error);   
        setLoading(false)
      })
  }

  React.useEffect(() => {
    handleGetData();
  }, [])

  return(
    <SafeAreaView style={styles.container}>
      {
        loading ? (
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator animating={loading} color={theme.colors.purple} size={54} />
          </View>
        ) : (
          <>
            {
              !userDetails ? (
                <TouchableOpacity style={styles.header} onPress={() => navigation.goBack()}>
                  <Feather name='arrow-left' size={24} color={theme.colors.secondary} style={{marginRight: 10}}/>
                  <Text style={styles.title}>USER NOT FOUND!</Text>
                </TouchableOpacity>
              ) : (
                <>
                  <TouchableOpacity style={styles.header} onPress={() => navigation.goBack()}>
                    <Feather name='arrow-left' size={24} color={theme.colors.secondary} style={{marginRight: 10}}/>
                    <Text style={styles.title}>{userDetails?.login}</Text>
                  </TouchableOpacity>
                  <Image style={styles.avatar} source={{ uri: userDetails?.avatar_url }} />
                  <View style={styles.containerInfo}>
                    <View style={styles.contentInfo}>
                      <Feather name='github' size={22} color={theme.colors.secondary} style={{marginRight: 10}}/>
                      <Text style={styles.name}>{userDetails?.name || '--'}</Text>
                    </View>    
                  <View style={styles.contentInfo} >
                      <Feather name='bookmark' size={15} color={theme.colors.cian} style={{marginRight: 5}}/>
                      <Text style={styles.text}>{userDetails?.bio || '--'}</Text>
                    </View>   
                  <View style={styles.contentInfo} >
                      <Feather name='briefcase' size={15} color={theme.colors.textInput} style={{marginRight: 5}}/>
                      <Text style={styles.text}>{userDetails?.company || '--'}</Text>
                    </View>
                    <View style={styles.contentInfo} >
                      <Feather name='star' size={15} color={theme.colors.yellow} style={{marginRight: 5}}/>
                      <Text style={styles.text}>{userDetails?.followers || '--'} followers</Text>
                    </View>
                    <View style={styles.contentInfo} >
                      <Feather name='link' size={15} color={theme.colors.blue} style={{marginRight: 5}}/>
                      <Text style={styles.text}>{userDetails?.html_url || '--'}</Text>
                    </View>
                    <View style={styles.contentInfo} >
                      <Feather name='map-pin' size={15} color={theme.colors.orange} style={{marginRight: 5}}/>
                      <Text style={styles.text}>{userDetails?.location || '--'}</Text>
                    </View>
                    <View style={styles.contentInfo} >
                      <Feather name='git-branch' size={15} color={theme.colors.purple} style={{marginRight: 5}}/>
                      <Text style={styles.text}>{userDetails?.public_repos || '--'} repositories</Text>
                    </View>    
                  </View>  
                </>
              ) 
            }
          </> 
        )
      }
    </SafeAreaView> 
  );
}
export default Details;


           