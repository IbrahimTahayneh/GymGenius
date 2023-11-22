import { NavigationContainer as RNNavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./Welcome";
import Home from "./Home";
import Exercies from "./Exercies";

const Stack = createNativeStackNavigator();

export default function NavigationContainer() {
  return (
    <RNNavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Exercies"
          component={Exercies}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </RNNavigationContainer>
  );
}
