import React from 'react';
import { useRoute } from '@react-navigation/native';
import UsersService from '../../../application/services/users';
import { UserDetailModel } from '../../../domain/models/userDetailModel';
import { Feather } from '@expo/vector-icons'; 
import { 
  Image,
  SafeAreaView, 
  View
} from 'react-native';
import styles from './styles';
import { Text} from 'react-native-paper';
import { theme } from '../../../global/styles/theme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import { screensProps } from '../../../types/navigationProps';

interface RouteParams {
  login: string;
}

const Details: React.FC = () => {
  const route = useRoute();
  const { login } = route.params as RouteParams;
  const [userDetails, setUsersDetails] = React.useState<UserDetailModel>()
  const navigation = useNavigation<screensProps>();

  async function handleGetData() {
    await UsersService.getDetailsUsers(login)
      .then((data) => {
        setUsersDetails(data);
        console.log(data)
      })  
      .catch((error) => {
        console.log(error);   
      })
  }

  React.useEffect(() => {
    handleGetData();
  }, [])

  return(
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.header} onPress={() => navigation.goBack()}>
        <Feather name='arrow-left' size={24} color={theme.colors.secondary} style={{marginRight: 10}}/>
        <Text style={styles.title}>{userDetails?.login}</Text>
      </TouchableOpacity>
      <Image style={styles.avatar} source={{ uri: userDetails?.avatar_url }} />
      <View style={styles.containerInfo}>
        <View style={styles.contentInfo}>
          <Feather name='github' size={22} color={theme.colors.secondary} style={{marginRight: 10}}/>
          <Text style={styles.name}>{userDetails?.name || 'no info'}</Text>
        </View>    
       <View style={styles.contentInfo} >
          <Feather name='bookmark' size={15} color={theme.colors.cian} style={{marginRight: 5}}/>
          <Text style={styles.text}>{userDetails?.bio || 'no info'}</Text>
        </View>   
       <View style={styles.contentInfo} >
          <Feather name='briefcase' size={15} color={theme.colors.textInput} style={{marginRight: 5}}/>
          <Text style={styles.text}>{userDetails?.company || 'no info'}</Text>
        </View>
        <View style={styles.contentInfo} >
          <Feather name='star' size={15} color={theme.colors.yellow} style={{marginRight: 5}}/>
          <Text style={styles.text}>{userDetails?.followers || 'no info'} followers</Text>
        </View>
        <View style={styles.contentInfo} >
          <Feather name='link' size={15} color={theme.colors.blue} style={{marginRight: 5}}/>
          <Text style={styles.text}>{userDetails?.html_url || 'no info'}</Text>
        </View>
        <View style={styles.contentInfo} >
          <Feather name='map-pin' size={15} color={theme.colors.orange} style={{marginRight: 5}}/>
          <Text style={styles.text}>{userDetails?.location || 'no info'}</Text>
        </View>
        <View style={styles.contentInfo} >
          <Feather name='git-branch' size={15} color={theme.colors.purple} style={{marginRight: 5}}/>
          <Text style={styles.text}>{userDetails?.public_repos || 'no info'} repositories</Text>
        </View>    
      </View> 
    </SafeAreaView> 
  );
}

export default Details;