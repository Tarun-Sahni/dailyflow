import { View, Text } from 'react-native'
import React from 'react'

const BrandName = () => {
  return (
    <View className='flex-row justify-center items-center gap-1'>
        <Text className='text-2xl text-black dark:text-white font-bold'>Day</Text>
        <Text className='text-2xl text-rose-500 font-bold'>Flow</Text>
    </View>
  )
}

export default BrandName