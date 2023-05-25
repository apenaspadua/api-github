import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../presentation/screens/Home';
import Search from '../../presentation/screens/Search';
import Details from '../../presentation/screens/Details';
import Sign from '../../presentation/screens/Sign';

const Stack = createStackNavigator();

export function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Sign"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Sign" component={Sign} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}