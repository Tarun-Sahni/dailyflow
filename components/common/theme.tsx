import { Pressable, Text } from "react-native";
import { useColorScheme } from "nativewind";
import { Moon, Sun } from "lucide-react-native";

export default function ThemeToggle() {
  const { colorScheme, setColorScheme } = useColorScheme();

  const toggleTheme = () => {
    setColorScheme(colorScheme === "dark" ? "light" : "dark");
  };

  return (
    <Pressable onPress={toggleTheme}>
      <Text className="text-lg font-bold">
        {colorScheme === "dark" ? <Sun color="white" size={20}/> : <Moon  size={20}/>}
      </Text>
    </Pressable>
  );
}