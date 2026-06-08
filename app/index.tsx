import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <Link href="/onboarding" className="text-white bg-rose-500 p-8">OnBoarding</Link>
    </SafeAreaView>
  );
}
