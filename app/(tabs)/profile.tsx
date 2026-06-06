import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useColorScheme } from 'nativewind'

const Profile = () => {
  const {colorScheme} = useColorScheme()
  return (
   <SafeAreaView className="flex-1 justify-between items-center py-14 px-4">
      <Text className="dark:text-white">Profile</Text>
    </SafeAreaView>
  )
}

export default Profile  