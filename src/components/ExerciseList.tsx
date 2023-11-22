import { FlatList, TouchableOpacity, View, Text } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import Animated, { FadeInDown } from "react-native-reanimated";
import { Image } from "expo-image";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FONT_FAMILIES } from "../theme";

interface ExerciseCardProps {
  item: any;
  index: number;
  router: NavigationProp<any, any>;
}
const ExerciseCard = ({ item, index, router }: ExerciseCardProps) => {
  return (
    <Animated.View
      entering={FadeInDown.duration(400)
        .delay(index * 200)
        .springify()}
    >
      <TouchableOpacity
        onPress={() => router.navigate("ExerciseDetails", { item })}
        style={{ display: "flex", paddingVertical: 12, marginTop: 12 }}
      >
        <View
          style={{
            backgroundColor: "#FFFFFF",
            shadowColor: "rgb(0 0 0)",
            shadowOffset: { width: 1, height: 3 },
            shadowOpacity: 0.1,
            borderRadius: 25,
          }}
        >
          <Image
            contentFit="cover"
            source={{ uri: item.gifUrl }}
            style={{ width: wp(44), height: wp(52), borderRadius: 25 }}
          />
        </View>
        <Text
          style={{
            fontSize: hp(1.7),
            color: "#404040",
            letterSpacing: 2,
            fontFamily: FONT_FAMILIES.POPPINS_SEMI_BOLD,
            marginLeft: 4,
          }}
        >
          {item?.name?.length > 20 ? item.name.slice(0, 20) + "..." : item.name}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default function ExerciseList({ data }: any) {
  const navigation: NavigationProp<any, any> = useNavigation();
  return (
    <View>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60, paddingTop: 20 }}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        renderItem={({ item, index }) => (
          <ExerciseCard router={navigation} index={index} item={item} />
        )}
      />
    </View>
  );
}
