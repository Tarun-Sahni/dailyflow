import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useColorScheme } from 'nativewind'
import { BadgeCheck, ChartNoAxesCombined, Flame, Goal } from "lucide-react-native"
import Logo from '@/components/logo'
import { Link, router } from 'expo-router'

const OnBoarding = () => {
  const { colorScheme } = useColorScheme();
  return (
    <SafeAreaView className="flex-1 justify-between items-center py-14 px-4">
      {/* logo */}
      <View className='items-center justify-center gap-2'>
        <Logo />
        <Text className='text-2xl font-medium dark:text-white'>DayFlow</Text>
        <Text className='text-sm dark:text-white/50 mt-2'>
          Your daily planner & goal tracker
        </Text>
      </View>
      {/* middle section */}
      <View className='gap-4'>
        <View className='flex-row items-center gap-4 w-full'>
          <View className='h-0.5 flex-1 bg-black/10 dark:bg-white/10'></View>
          <Text className='text-center text-xs uppercase tracking-wider dark:text-rose-500'>Everything You Need</Text>
          <View className='h-0.5 flex-1 bg-black/10 dark:bg-white/10'></View>
        </View>
        <View className="flex-row gap-4 w-full">
          <View className="flex-1 justify-center items-start gap-4 bg-white dark:bg-neutral-800/50 rounded-xl p-6 shadow-lg">
            <View className='w-12 h-12 bg-blue-700/20 justify-center items-center rounded-2xl'>
              <Goal color="#3b82f6" />
            </View>
            <View className='gap-1'>
              <Text className='dark:text-white text-base font-medium'>Goal Focus</Text>
              <Text className='text-black/60 dark:text-white/50 text-sm leading-tight'>Build 7-days streaks with consistency</Text>
            </View>
          </View>
          <View className="flex-1 justify-center items-start gap-4 bg-white dark:bg-neutral-800/50 rounded-xl p-6 shadow-lg">
            <View className='w-12 h-12 bg-green-700/20 justify-center items-center rounded-2xl'>
              <BadgeCheck color="#22c55e" />
            </View>
            <View className='gap-1'>
              <Text className='dark:text-white text-base font-medium'>Quick Tasks</Text>
              <Text className='text-black/60 dark:text-white/50 text-sm leading-tight'>Capture your daily todos instantly</Text>
            </View>
          </View>
        </View>
        <View className="flex-row gap-4 w-full">
          <View className="flex-1 justify-center items-start gap-4 bg-white dark:bg-neutral-800/50 rounded-xl p-6 shadow-lg">
            <View className='w-12 h-12 bg-orange-700/20 justify-center items-center rounded-2xl'>
              <Flame color="#f97316" />
            </View>
            <View className='gap-1'>
              <Text className='dark:text-white text-base font-medium'>Streaks</Text>
              <Text className='text-black/60 dark:text-white/50 text-sm leading-tight'>Maintain your daily habits</Text>
            </View>
          </View>
          <View className="flex-1 justify-center items-start gap-4 bg-white dark:bg-neutral-800/50 rounded-xl p-6 shadow-lg">
            <View className='w-12 h-12 bg-purple-700/20 justify-center items-center rounded-2xl'>
              <ChartNoAxesCombined color="#a855f7" />
            </View>
            <View className='gap-1'>
              <Text className='dark:text-white text-base font-medium'>Progress</Text>
              <Text className='text-black/60 dark:text-white/50 text-sm leading-tight'>Track your improvement over time</Text>
            </View>
          </View>
        </View>
      </View>
      {/* end section */}
      <View className='w-full items-center gap-4'>
        <TouchableOpacity
          onPress={() => { router.push("/(auth)/register") }}
          className='bg-rose-500 px-6 py-3 rounded-full items-center justify-center w-full'>
          <Text className='text-white font-medium'>Get Started</Text>
        </TouchableOpacity>
        <View className='flex-row justify-center gap-1'>
          <Text className='dark:text-white/50'>
            Already have an account?
          </Text>
          <Link href="/(auth)/login" className='text-rose-500 font-medium'>Sign In</Link>
        </View>
      </View>

    </SafeAreaView>
  )
}

export default OnBoarding