import Date from '@/components/common/date';
import Greeting from '@/components/common/greeting';
import ThemeToggle from '@/components/theme/theme';
import { LinearGradient } from 'expo-linear-gradient';
import { BadgeCheck, Bell, Flame, Goal } from 'lucide-react-native';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Progress from 'react-native-progress';
import TaskCardOne from '@/components/common/taskcardone';
import { useColorScheme } from 'nativewind';

const tasks = [
  {
    id: '1',
    title: 'Workout',
    status: 'pending'
  },
  {
    id: '2',
    title: 'Study',
    status: 'pending'
  },
  {
    id: '3',
    title: 'Sleep',
    status: 'pending'
  }, {
    id: '4',
    title: 'Hack',
    status: 'pending'
  }
];

export default function Today() {
  const { colorScheme } = useColorScheme()
  return (
    <View className='flex-1'>
      <LinearGradient
        colors={['#f43f5e', 'transparent', 'transparent']}
        className='flex-1 absolute top-0 left-0 right-0 bottom-0'
      />
      <SafeAreaView className='flex-1 px-4 bg-transparent gap-6 py-4'>
        {/* greeting and date */}
        <View className='flex-row justify-between items-center px-3'>
          <View  className='flex-1'>
            <Greeting firstName="Tarun" />
            <Date />
          </View>
          <View className='flex-row items-center gap-4'>
            <Bell color={colorScheme === "dark" ? "white" : "black"} size={20} />
            <ThemeToggle />
          </View>
        </View>
        {/* goal streak and task progress */}
        <View className='flex-row justify-between items-center gap-4'>
          {/* goal streak */}
          <View className="flex-1 justify-start items-start gap-4 bg-white dark:bg-black rounded-xl p-4 flex-row">
            <View className='w-10 h-10 bg-orange-500/20 dark:bg-orange-300/20 justify-center items-center rounded-xl'>
              <Flame color="#f97316" size={20} />
            </View>
            <View className='flex-1'>
              <Text className='text-base font-medium dark:text-white'>Goal Streak</Text>
              <Text className='text-sm text-black/60 dark:text-white/50'>4/7 Days</Text>
              <Progress.Bar
                className='mt-4'
                progress={0.6}
                color="#f43f5e"
                borderColor="#f43f5e"
                width={null}
                height={5}
                borderRadius={10}
              />
            </View>
          </View>
          {/* task progress */}
          <View className="flex-1 justify-start items-start gap-4 bg-white dark:bg-black rounded-xl p-4 flex-row">
            <View className='w-10 h-10 bg-green-500/20 dark:bg-green-300/20 justify-center items-center rounded-xl'>
              <BadgeCheck color="#22c55e" size={20} />
            </View>
            <View className='flex-1'>
              <Text className='text-base font-medium dark:text-white'>Tasks Done</Text>
              <Text className='text-sm text-black/60 dark:text-white/50'>3/8 Done</Text>
              <Progress.Bar
                className='mt-4'
                progress={0.6}
                color="#f43f5e"
                borderColor="#f43f5e"
                width={null}
                height={5}
                borderRadius={10}
              />
            </View>
          </View>
        </View>
        {/* Goal Card */}
        <View className='gap-4'>
          <View className="items-center justify-center">
            <Text className='text-lg font-bold tracking-wide capitalize dark:text-white'>Weekly Daily Focus</Text>
            <Text className='text-sm tracking-wider dark:text-white'>Stay Consistent, one day at a time</Text>
          </View>
          <View className="bg-white dark:bg-black rounded-xl p-6 gap-2 shadow-xl shadow-neutral-500 dark:shadow-neutral-100">
            <View className='flex-row gap-4'>
              <View className='w-12 h-12 bg-green-500/20 dark:bg-green-300/20 justify-center items-center rounded-xl'>
                <Goal color="#22c55e" size={22} />
              </View>
              <View className='items-start gap-1'>
                <Text className='dark:text-white font-medium tracking-wide'>Morning Workout</Text>
                <View className='bg-gray-500/10 dark:bg-white/20 rounded-full flex-row justify-center items-center px-3 py-0.5 w-fit flex-rowcenter gap-1'>
                  <Text className='text-xs dark:text-white'>4 Days</Text>
                  <Flame size={10} color="#f97316" />
                </View>
              </View>
            </View>
            <View className='flex-row justify-between items-start gap-6 mt-4'>
              <View className='flex-row justify-start items-start gap-2 flex-wrap flex-1'>
                {Array.from({ length: 7 }).map((_, i) => (
                  <View
                    key={i}
                    className='w-4 h-4 rounded-full border border-rose-500 p-0.5 justify-center items-center'>
                    <View
                      className='w-full h-full rounded-full bg-rose-500'
                    />
                  </View>
                ))}
              </View>
              <Text className="font-medium text-base dark:text-white">
                7 Days
              </Text>
            </View>
            <TouchableOpacity
              className='bg-rose-500 py-2 rounded-xl px-4 justify-center items-center mt-4'>
              <Text className='text-white'>Mark Done Today</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* todays quick tasks */}
        <FlatList
          ListHeaderComponent={
            <View className="items-center justify-center mb-2">
              <Text className='text-lg font-bold tracking-wide capitalize dark:text-white'>Your Pending Tasks</Text>
              <Text className='text-sm tracking-wider dark:text-white/50 text-black/50'>Small wins leads big results</Text>
            </View>
          }
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ gap: 12 }}
          data={tasks}
          renderItem={({ item }) => <TaskCardOne task={item} />}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </View>
  );
}