import TabRoutes from "./src/routes/tab.routes";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer, ThemeProvider } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "./src/screens/SignIn";
const Stack = createStackNavigator();

export default function App() {
  return (
    <ThemeProvider theme="light">
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="home"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="tabroutes" component={TabRoutes} />
          <Stack.Screen name="signin" component={SignIn} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
