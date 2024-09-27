import { LinearGradient } from "expo-linear-gradient";
import { Image, Text, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export default function WelcomeScreen() {
  return (
    <View className={`flex-1 flex justify-center`}>
      <Image
        source={require("../assets/images/welcome.png")}
        className={`h-full w-full absolute`}
      ></Image>

      <View className={`p-5 pb-10 space-y-8`}>
        <LinearGradient
          colors={["transparent", "rgba(3,105,161,0.8)"]}
          style={{ width: wp(100), height: hp(60) }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          className={`absolute`}
        />
        <View className={`space-y-3`}>
          <Text
            className={`text-white font-bold text-xl`}
            style={{ fontSize: wp(10) }}
          >
            Facilitando as viagens
          </Text>
        </View>
      </View>
    </View>
  );
}
