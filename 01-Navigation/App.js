import Routes from './routes/Routes';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, ThemeProvider } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from './screens/SignIn';

const Stack = createStackNavigator()

export default function App() {
  return (
    <ThemeProvider theme="light">
      <StatusBar style='dark' />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='SignIn'
          screenOptions={{
            headerShown : false
          }}
          >
          <Stack.Screen
            name='SignIn'
            component={SignIn}
          />
          <Stack.Screen
            name='Routes'
            component={Routes}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
