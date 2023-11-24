import { useNavigation, useRoute } from "@react-navigation/native";
import { ScrollView, TouchableOpacity, View, Text } from "react-native";
import { Image } from "expo-image";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Anticons from "react-native-vector-icons/AntDesign";
import Animated, { FadeInDown } from "react-native-reanimated";
import { FONT_FAMILIES } from "../theme";
import { Key } from "react";

export default function ExericeDetails() {
  const navigation = useNavigation();
  const { params } = useRoute();
  const { data }: any = params;

  return (
    <View style={{ flex: 1, display: "flex" }}>
      <View
        style={{
          backgroundColor: "#FFFFFF",
          shadowColor: "rgb(0 0 0)",
          shadowOffset: { width: 1, height: -1 },
          shadowOpacity: 0.3,
          borderBottomRightRadius: 40,
          borderBottomLeftRadius: 40,
        }}
      >
        <Image
          source={{ uri: data.gifUrl }}
          contentFit="cover"
          style={{
            width: wp(100),
            height: wp(100),
            borderBottomRightRadius: 40,
            borderBottomLeftRadius: 40,
          }}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          marginHorizontal: 8,
          position: "absolute",
          borderRadius: 100,
          marginTop: 8,
          right: 0,
        }}
      >
        <Anticons name="closecircle" size={hp(4.5)} color="#F8C06D" />
      </TouchableOpacity>

      <ScrollView
        style={{ marginHorizontal: 16, marginTop: 12 }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60 }}
      >
        <Animated.Text
          entering={FadeInDown.duration(300).springify()}
          style={{
            fontSize: hp(3),
            fontFamily: FONT_FAMILIES.POPPINS_SEMI_BOLD,
            color: "rgb(38 38 38)",
            marginBottom: 6,
          }}
        >
          {data.name}
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.delay(100).duration(300).springify()}
          style={{
            fontSize: hp(2),
            fontFamily: FONT_FAMILIES.POPPINS_REGULAR,
            color: "rgb(64 64 64)",
          }}
        >
          Equipment{" "}
          <Text
            style={{
              color: "rgb(38 38 38)",
              fontFamily: FONT_FAMILIES.POPPINS_SEMI_BOLD,
            }}
          >
            {data.equipment}
          </Text>
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.delay(200).duration(300).springify()}
          style={{
            fontSize: hp(2),
            fontFamily: FONT_FAMILIES.POPPINS_REGULAR,
            color: "rgb(64 64 64)",
          }}
        >
          Secondary Muscles{" "}
          <Text
            style={{
              color: "rgb(38 38 38)",
              fontFamily: FONT_FAMILIES.POPPINS_SEMI_BOLD,
            }}
          >
            {data.secondaryMuscles.map((muscles: string) => muscles) + ""}
          </Text>
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.delay(300).duration(300).springify()}
          style={{
            fontSize: hp(2),
            fontFamily: FONT_FAMILIES.POPPINS_REGULAR,
            color: "rgb(64 64 64)",
          }}
        >
          Target{" "}
          <Text
            style={{
              color: "rgb(38 38 38)",
              fontFamily: FONT_FAMILIES.POPPINS_SEMI_BOLD,
            }}
          >
            {data.target}
          </Text>
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.delay(400).duration(300).springify()}
          style={{
            fontSize: hp(3),
            fontFamily: FONT_FAMILIES.POPPINS_SEMI_BOLD,
            color: "rgb(64 64 64)",
          }}
        >
          Instructions
        </Animated.Text>
        {data.instructions.map((instruction: string, index: number) => {
          return (
            <Animated.Text
              key={index}
              entering={FadeInDown.delay((index + 5) * 100)
                .duration(300)
                .springify()}
              style={{
                fontSize: hp(1.7),
                fontFamily: FONT_FAMILIES.POPPINS_REGULAR,
                color: "rgb(64 64 64)",
                marginBottom: 4,
              }}
            >
              {index + 1 + " - " + instruction}
            </Animated.Text>
          );
        })}
      </ScrollView>
    </View>
  );
}
