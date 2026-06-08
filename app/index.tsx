import { useAuthStore } from "@/store/authstore";
import { router } from "expo-router";
import { ChartColumnBig, CircleCheckBig, Flame, Goal } from "lucide-react-native";
import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const token = useAuthStore((state) => state?.token);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;

    if (token) {
      router.replace("/(tabs)/today");
    } else {
      router.replace("/onboarding");
    }
  }, [ready, token]);

  return (
    <SafeAreaView className="flex-1 items-center justify-between py-10 bg-rose-500">
      <View />
      <View className="gap-6 items-center">
        <Image
          source={require("@/assets/images/logo.png")}
          className="w-24 h-24 rounded-2xl shadow-xl shadow-white"
        />
        <View className="items-center gap-2">
          <Text className='text-4xl font-bold text-white'>Day Flow</Text>
          <Text className="text-lg uppercase font-medium tracking-wider text-white">Daily Planner & Goal Tracker</Text>
        </View>
        <View className="flex-row justify-center items-center gap-4 mt-4">
          <View className="flex-row items-center justify-center gap-1 bg-gray-200/50 px-4 py-2 rounded-full ">
            <Goal color="#3b82f6" size="18" />
            <Text>Goal Focus</Text>
          </View>
          <View className="flex-row items-center justify-center gap-1 bg-gray-200/50 px-4 py-2 rounded-full">
            <CircleCheckBig color="#22c55e" size="18" />
            <Text>Quick Tasks</Text>
          </View>
        </View>
        <View className="flex-row justify-center items-center gap-4">
          <View className="flex-row items-center justify-center gap-1 bg-gray-200/50 px-4 py-2 rounded-full">
            <Flame color="#f97316" size="18" />
            <Text>Streaks</Text>
          </View>
          <View className="flex-row items-center justify-center gap-1 bg-gray-200/50 px-4 py-2 rounded-full">
            <ChartColumnBig color="#6366f1" size="18" />
            <Text>Progress</Text>
          </View>
        </View>
      </View>
      <View className="items-center">
        <View className="flex-row justify-center items-center gap-2">
          <Text className="text-4xl text-white">.</Text>
          <Text className="text-4xl text-white">.</Text>
          <Text className="text-4xl text-white">.</Text>
        </View>
        <Text className="text-white tracking-wider">Loading</Text>
      </View>
    </SafeAreaView>
  );
}
