import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Stack/Home/HomeScreen';
import Ventana2 from './Stack/Ventana2/Ventana2';

export default function App() {

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Ventana2" component={Ventana2}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


