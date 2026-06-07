import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useColorScheme } from 'nativewind'
import { Bell, ChevronLeft, Plus } from 'lucide-react-native'
import ThemeToggle from '@/components/theme/theme'
import { router } from 'expo-router'

const Goals = () => {
  const { colorScheme } = useColorScheme()
  return (
    <SafeAreaView className="flex-1 justify-between items-center py-4 px-4 relative">
      {/* Add Goals */}
      <TouchableOpacity className='w-14 h-14 rounded-full bg-rose-500 absolute right-6 bottom-6 justify-center items-center'>
        <Plus color="white" size={30} />
      </TouchableOpacity>
      <Text>test</Text>
    </SafeAreaView>
  )
}

export default Goals