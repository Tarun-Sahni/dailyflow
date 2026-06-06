import { View, Text, Image } from 'react-native'
import React from 'react'

const Logo = () => {
  return (
    <Image
      source={require('@/assets/images/logo.png')}
      className="w-14 h-14 rounded-2xl"
    />
  )
}

export default Logo