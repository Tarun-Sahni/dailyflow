import { Tabs } from 'expo-router';
import { CalendarDays, Goal, ListChecks, ShieldUser } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';

export default function TabLayout() {
    const { colorScheme } = useColorScheme();
    return (
        <Tabs screenOptions={{
            headerShown: false,
            animation: 'shift',
            tabBarActiveTintColor: '#f43f5e',
            tabBarInactiveTintColor: 'gray',
            sceneStyle: {
                backgroundColor: colorScheme === 'dark' ? 'bg-neutral-950' : 'bg-rose-50/20',
            },
            tabBarStyle: {
                backgroundColor: colorScheme === 'dark' ? '#000' : '#fff',
                borderTopWidth: 0,
            },
        }}>
            <Tabs.Screen
                name="today"
                options={{
                    title: 'Today',
                    tabBarIcon: () => <CalendarDays color="#f43f5e" />,
                }}
            />
            <Tabs.Screen
                name="goals"
                options={{
                    title: 'Goals',
                    tabBarIcon: () => <Goal color="#f43f5e" />,
                }}
            />
            <Tabs.Screen
                name="tasks"
                options={{
                    title: 'Tasks',
                    tabBarIcon: () => <ListChecks color="#f43f5e" />,
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    tabBarIcon: () => <ShieldUser color="#f43f5e" />,
                }}
            />
        </Tabs>
    );
}
