import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import ModalUserScreen from './screens/ModalUser/ModalUserScreen';


export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{headerShown:false}}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ModalScreen" component={ModalUserScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

