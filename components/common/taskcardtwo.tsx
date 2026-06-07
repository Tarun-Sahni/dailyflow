import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Check, CircleCheckBig, Trash2 } from 'lucide-react-native'
import { Checkbox } from 'expo-checkbox';
import { router } from 'expo-router'


const TaskCardTwo = ({ task }: any) => {
    const [isChecked, setChecked] = useState(false);
    return (
        <View
            className='bg-white dark:bg-black rounded-xl p-4 shadow-xl flex-row justify-between items-center gap-6 dark:shadow-neutral-100 border-l-4 border-rose-500 border-r-4'>
            <View className='flex-row justify-start items-center gap-4 flex-1'>
                <Checkbox
                    style={{
                        width: 20,
                        height: 20,
                        borderRadius: 12,
                        padding:8,
                        borderColor: '#f43f5e',

                    }}
                    value={task.status === 'pending' ? false : true}
                    onValueChange={setChecked}
                    color={task.status === 'completed' ? '#f43f5e' : undefined}
                />
                <View className='gap-2'>
                    <Text className='dark:text-white text-black text-base tracking-wide font-medium text-wrap leading-none'>{task.title}</Text>
                    <Text className='text-xs tracking-wide capitalize text-black/50 dark:text-white/50'>
                        Do till {task.date} {task.time}
                    </Text>
                </View>
            </View>
            <View className="gap-2 justify-center items-end">
                <TouchableOpacity className='px-2'>
                    <Trash2 size={20} color="#ef4444" />
                </TouchableOpacity>
                <View className={`w-fit rounded-full px-3 justify-center items-center border ${task.priority === 'high' ? 'bg-red-500/20 border-red-500' : task.priority === 'medium' ? 'bg-yellow-500/20 border-yellow-500' : 'bg-green-500/20 border-green-500'}`}>
                    <Text className={`text-xs tracking-wide capitalize ${task.priority === 'high' ? 'text-red-500' : task.priority === 'medium' ? 'text-yellow-600' : 'text-green-500'}`}>
                        {task.priority}
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default TaskCardTwo