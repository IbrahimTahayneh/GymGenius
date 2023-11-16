import * as Font from "expo-font";

const loadFonts = async () => {
  await Font.loadAsync({
    Assistant: require("../../assets/fonts/Assistant-Regular.ttf"),
    "Assistant-Bold": require("../../assets/fonts/Assistant-Bold.ttf"),
    "Assistant-SemiBold": require("../../assets/fonts/Assistant-SemiBold.ttf"),
    "Gaegu-Regular": require("../../assets/fonts/Gaegu-Regular.ttf"),
    "Georgia-Italic": require("../../assets/fonts/Georgia-Italic.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Light": require("../../assets/fonts/Poppins-Light.ttf"),
    "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
    // Add other fonts here...
  });
};

export default loadFonts;
