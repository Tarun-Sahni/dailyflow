import BrandName from "@/components/common/brand";
import { Link } from "expo-router";
import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-gray-200">
      <Image
      source={require("@/assets/images/logo.png")}
      className="w-24 h-24 rounded-2xl"
      />
      <BrandName/>
    </SafeAreaView>
  );
}
