import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import { FONT_FAMILIES } from "../theme";
import { BodyParts, ImageSlider } from "../components";

export default function Home() {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <StatusBar style="dark" />

      <View style={styles.headerContainer}>
        <View style={styles.subContainer}>
          <Text style={styles.title}>READY TO</Text>
          <Text style={styles.subTitle}>WORKOUT</Text>
        </View>

        <View style={styles.avatarContainer}>
          <Image
            source={require("../../assets/images/avatar.png")}
            style={styles.avater}
          />
          <View style={styles.notifContainer}>
            <Ionicons name="notifications" size={hp(3)} color={"gray"} />
          </View>
        </View>
      </View>

      <View style={{ marginVertical: 10 }}>
        <ImageSlider />
      </View>

      <View style={{ flex: 1 }}>
        <BodyParts />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    display: "flex",
    // padding: 16,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 5,
  },
  subContainer: {
    marginTop: 8,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: hp(4.5),
    color: "#404040",
    fontFamily: FONT_FAMILIES.POPPINS_SEMI_BOLD,
  },
  subTitle: {
    color: "#F8C06D",
    fontSize: hp(4.5),
    fontFamily: FONT_FAMILIES.POPPINS_SEMI_BOLD,
  },
  avatarContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
    marginBottom: 8,
    paddingHorizontal: 10,
  },
  avater: {
    borderRadius: 100,
    height: hp(6),
    width: hp(6),
  },
  notifContainer: {
    height: hp(5.5),
    width: hp(5.5),
    backgroundColor: "rgb(229 229 229)",
    borderRadius: 100,
    marginTop: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "rgb(212 212 212)",
  },
});
