import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { CircleCheckBig } from 'lucide-react-native'
import { router } from 'expo-router'

const TaskCardOne = ({ task }: any) => {
    return (
        <TouchableOpacity
            onPress={() => router.push("/(tabs)/tasks")}
            className='bg-white dark:bg-black rounded-xl py-3 px-4 shadow-xl flex-row justify-between items-center gap-4 dark:shadow-neutral-100 border-l-4 border-rose-500 border-r-4'>
            <View className='flex-row justify-start items-center gap-4'>
                <View className='w-10 h-10 bg-rose-500/20 dark:bg-rose-300/20 justify-center items-center rounded-xl'>
                    <CircleCheckBig color="#f43f5e" size={20} />
                </View>
                <View className='items-start gap-1'>
                    <Text className='dark:text-white text-black text-base tracking-wide font-medium'>{task.title}</Text>
                    <View className='w-fit bg-red-500/10 rounded-full px-3 py-0.5 font-medium'>
                        <Text className="text-xs tracking-wide text-red-500">High</Text>
                    </View>
                </View>
            </View>
            <View className="gap-2 justify-center items-end">
                <View className="w-fit bg-yellow-500 rounded-full px-3 py-0.5">
                    <Text className='text-xs capitalize'>
                        {task.status}
                    </Text>
                </View>
                <Text className='dark:text-white'>6:00AM</Text>
            </View>
        </TouchableOpacity>
    )
}

export default TaskCardOne