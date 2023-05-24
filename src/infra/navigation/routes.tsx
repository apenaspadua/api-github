import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../presentation/screens/Home';
import Search from '../../presentation/screens/Search';
import Details from '../../presentation/screens/Details';

const Stack = createStackNavigator();

export function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}