import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { AppContainer } from "./src";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const queryClient = new QueryClient();

  const [fontsLoaded] = useFonts({
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Rufina-Bold": require("./assets/fonts/Rufina-Bold.ttf"),
  });

  const handleOnLayout = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync(); //hide the splashscreen
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider
        onLayout={handleOnLayout}
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <AppContainer />
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
