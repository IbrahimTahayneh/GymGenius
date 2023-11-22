import { StatusBar } from "expo-status-bar";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-virtualized-view";

import { useRoute, useNavigation } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";

import { FONT_FAMILIES } from "../theme";
import ExerciseList from "../components/ExerciseList";
import { demoData } from "../constants";

export default function Exercies() {
  const navigation = useNavigation();

  const { params } = useRoute();
  const { image, name }: any = params;

  return (
    <ScrollView>
      <StatusBar style="light" />
      <Image
        source={image}
        style={{
          width: wp(100),
          height: hp(45),
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
        }}
      />
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          height: hp(5.5),
          width: hp(5.5),
          marginTop: hp(7),
          marginHorizontal: 16,
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingRight: 4,
          borderRadius: 100,
          backgroundColor: "#F8C06D",
        }}
      >
        <Ionicons name="caret-back-outline" size={hp(4)} color="white" />
      </TouchableOpacity>
      <View style={{ marginHorizontal: 16, marginTop: 16 }}>
        <Text
          style={{
            fontSize: hp(3),
            fontFamily: FONT_FAMILIES.POPPINS_SEMI_BOLD,
            color: "#404040",
          }}
        >
          {name} Exercises
        </Text>
        <View style={{ marginBottom: 40 }}>
          <ExerciseList data={demoData} />
        </View>
      </View>
    </ScrollView>
  );
}
