//@ts-nocheck
import { LinearGradient } from "expo-linear-gradient";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import { FONT_FAMILIES } from "../theme";
import { bodyParts } from "../constants";

interface CardProps {
  index: number;
  item: {
    name: string;
    image: any;
  };
}

const BodyPartCard = ({ index, item }: CardProps) => {
  const navigation = useNavigation();
  return (
    <Animated.View
      entering={FadeInDown.duration(500)
        .delay(index * 200)
        .springify()}
    >
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Exercies", { name: item.name, image: item.image })
        }
        style={styles.btn}
      >
        <Image source={item.image} resizeMode="cover" style={styles.imageBG} />
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.9)"]}
          style={styles.linergrad}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
        />
        <Text style={styles.txtBodyCard}>{item.name}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default function BodyParts() {
  return (
    <View style={{ marginLeft: 4, paddingHorizontal: 10 }}>
      <Text style={styles.txtCard}>Exercises</Text>
      <FlatList
        data={bodyParts}
        numColumns={2}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50, paddingTop: 20 }}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        renderItem={({ item, index }) => (
          <BodyPartCard index={index} item={item} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: wp(44),
    height: wp(52),
    display: "flex",
    justifyContent: "flex-end",
    padding: 4,
    marginBottom: 4,
  },
  imageBG: {
    width: wp(44),
    height: wp(52),
    borderRadius: 40,
    position: "absolute",
  },
  linergrad: {
    width: wp(44),
    height: hp(15),
    position: "absolute",
    bottom: 0,
    borderBottomEndRadius: 35,
    borderBottomStartRadius: 35,
  },
  txtBodyCard: {
    fontSize: hp(2.3),
    fontFamily: FONT_FAMILIES.POPPINS_SEMI_BOLD,
    color: "#FFFFFF",
    textAlign: "center",
    letterSpacing: 2,
  },

  txtCard: {
    fontSize: hp(3),
    color: "rgb(64 64 64)",
    fontFamily: FONT_FAMILIES.POPPINS_SEMI_BOLD,
  },
});
