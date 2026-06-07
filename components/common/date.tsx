import { View, Text } from 'react-native'
import React from 'react'

const CurrentDate = () => {
    const date = new Date();
    return (
        <Text className='dark:text-white text-black'>
            {date.toLocaleDateString('en-US', {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
                year: 'numeric',
            })}
        </Text>)

}

export default CurrentDate