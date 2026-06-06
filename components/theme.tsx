import { Pressable, Text } from "react-native";
import { useColorScheme } from "nativewind";

export default function ThemeToggle() {
  const { colorScheme, setColorScheme } = useColorScheme();

  const toggleTheme = () => {
    setColorScheme(colorScheme === "dark" ? "light" : "dark");
  };

  return (
    <Pressable onPress={toggleTheme}>
      <Text className="text-lg font-bold text-black dark:text-white">
        {colorScheme === "dark" ? "Dark" : "Light"}
      </Text>
    </Pressable>
  );
}