import ThemeToggle from '@/components/theme/theme';
import { router, Tabs } from 'expo-router';
import { Bell, CalendarDays, ChevronLeft, Goal, ListChecks, ShieldUser } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import { Text, TouchableOpacity, View } from 'react-native';

export default function TabLayout() {
    const { colorScheme } = useColorScheme();
    return (
        <Tabs screenOptions={{
            animation: 'shift',
            tabBarActiveTintColor: '#f43f5e',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: {
                backgroundColor: colorScheme === 'dark' ? '#171717' : '#fff',
                borderTopWidth: 0,
            },
        }}>
            <Tabs.Screen
                name="goals"
                options={{
                    headerStyle: { backgroundColor: 'transparent' },
                    headerShadowVisible: false,
                    tabBarIcon: () => <Goal color="#f43f5e" size={22} />,
                    headerTitleAlign: 'left',
                    headerTitle: () => (<Text className='text-lg font-bold pl-2 dark:text-white'>Goal Focus</Text>),
                    headerRight: () => (<View className='flex-row items-center gap-4 pr-6'>
                        <Bell color={colorScheme === "dark" ? "white" : "black"} size={20} />
                        <ThemeToggle />
                    </View>),
                }}
            />
            <Tabs.Screen
                name="tasks"
                options={{
                    headerStyle: { backgroundColor: 'transparent' },
                    headerShadowVisible: false,
                    tabBarIcon: () => <Goal color="#f43f5e" size={22} />,
                    headerTitleAlign: 'left',
                    headerTitle: () => (<Text className='text-lg font-bold pl-2 dark:text-white'>Today's Tasks</Text>),
                    headerRight: () => (<View className='flex-row items-center gap-4 pr-6'>
                        <Bell color={colorScheme === "dark" ? "white" : "black"} size={20} />
                        <ThemeToggle />
                    </View>),
                }}
            />
            <Tabs.Screen
                name="today"
                options={{
                    headerShown: false,
                    title: 'Today',
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                width: 45,
                                height: 45,
                                borderRadius: 30,
                                backgroundColor: '#f43f5e',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: -30,
                                elevation: 5,
                            }}
                        >
                            <CalendarDays color="white" size={22} />
                        </View>
                    ),
                    tabBarLabelStyle: {
                        marginTop: 8,
                    },
                }}
            />
            <Tabs.Screen
                name="notes"

                options={{
                    headerShadowVisible: false,
                    tabBarIcon: () => <Goal color="#f43f5e" size={22} />,
                    headerTitleAlign: 'left',
                    headerTitle: () => (<Text className='text-lg font-bold pl-2 dark:text-white'>Today's Tasks</Text>),
                    headerRight: () => (<View className='flex-row items-center gap-4 pr-6'>
                        <Bell color={colorScheme === "dark" ? "white" : "black"} size={20} />
                        <ThemeToggle />
                    </View>),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    tabBarIcon: () => <ShieldUser color="#f43f5e" size={22} />,
                }}
            />
        </Tabs>
    );
}
