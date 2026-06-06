import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useColorScheme } from 'nativewind'

const Tasks = () => {
  const {colorScheme} = useColorScheme()
  return (
    <SafeAreaView className={`${colorScheme === 'dark' ? 'bg-neutral-950' : 'bg-rose-50/20'} flex-1 justify-between items-center py-14 px-4`}>
      <Text className="dark:text-white">Tasks</Text>
    </SafeAreaView>
  )
}

export default Tasks