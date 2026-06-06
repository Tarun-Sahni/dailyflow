import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useColorScheme } from 'nativewind'

const Today = () => {
  const {colorScheme} = useColorScheme()
  return (
    <SafeAreaView className="flex-1 justify-between items-center py-14 px-4">
      <Text className="dark:text-white">Today</Text>
    </SafeAreaView>
  )
}

export default Today