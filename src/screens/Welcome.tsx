import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
} from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FONT_FAMILIES } from "../theme";

const { width, height } = Dimensions.get("window");

export default function Welcome() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <LinearGradient
        colors={["#38474C", "#0E7D77"]}
        style={styles.linearGradient}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.8 }}
      >
        <Image
          source={require("../../assets/welcome.png")}
          style={styles.backgroundImage}
        />
        <Animated.View
          entering={FadeInDown.delay(100).springify()}
          style={styles.titleContainer}
        >
          <Text style={styles.title}>PUSH YOURSELF</Text>
          <Text style={styles.subTitle}>HARDER</Text>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(200).springify()}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.titleBtn}>Get Started</Text>
          </TouchableOpacity>
        </Animated.View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
  },
  backgroundImage: {
    height: "75%",
    width: width,
    position: "absolute",
  },
  linearGradient: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 12,
    width: wp(100),
    height: hp(70),
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
    top: 60,
  },
  title: {
    fontSize: hp(7),
    color: "white",
    fontWeight: "700",
    letterSpacing: 2,
    fontFamily: FONT_FAMILIES.RUFINA_BOLD,
    textAlign: "center",
  },
  subTitle: {
    color: "#F8C06D",
    fontSize: hp(7),
    fontWeight: "bold",
    letterSpacing: 2,
    fontFamily: FONT_FAMILIES.RUFINA_BOLD,
    textAlign: "center",
  },
  btn: {
    height: hp(7),
    width: "90%",
    backgroundColor: "#F8C06D",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: "auto",
    borderRadius: 100,
    marginLeft: 24,
  },
  titleBtn: {
    fontSize: hp(3),
    color: "#0a0a0a",
    fontWeight: "bold",
    fontFamily: FONT_FAMILIES.POPPINS_SEMI_BOLD,
  },
});
