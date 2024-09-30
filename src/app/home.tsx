import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Categories, FilterTags } from "../features/categories";

const ios = Platform.OS === "ios";
const topMargin = ios ? "pt-3" : "pt-14";

export default function HomeScreen() {
  const [search, setSearch] = useState();
  const [activeCategory, setActivateCategory] = useState<number | null>(null);
  const [activeTag, setActiveTag] = useState<number | null>(null);
  return (
    <SafeAreaView>
      <ScrollView showsHorizontalScrollIndicator={false} className={topMargin}>
        <View className={`mx-5 flex-row justify-between items-center mb-10`}>
          <Text
            style={{ fontSize: wp(7) }}
            className={`font-bold text-neutral-700`}
          >
            Descubra
          </Text>
          <TouchableOpacity>
            <Image
              source={require("../assets/images/avatar.png")}
              style={{ height: wp(12), width: wp(12) }}
            ></Image>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* search bar  */}
      <View className={`mx-5 mb-4`}>
        <View
          className={`flex-row items-center bg-neutral-200 rounded-full p-4 space-x-2 pl-6`}
        >
          <FontAwesome
            name="search"
            size={20}
            strokeWidth={3}
            color="gray"
          ></FontAwesome>
          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="Buscar um destino"
            placeholderTextColor="gray"
            className={`flex-1 text-base pl-1 tracking-wider`}
          ></TextInput>
        </View>
      </View>

      {/* categories  */}
      <View className={`mb-4`}>
        <Categories
          activateCategory={activeCategory}
          setActivateCategory={setActivateCategory}
        />
      </View>

      {/* filter tags  */}
      <View className={`mb-4`}>
        <FilterTags
          activeTag={activeTag}
          setActiveTag={setActiveTag}
        ></FilterTags>
      </View>
    </SafeAreaView>
  );
}
