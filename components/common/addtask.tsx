import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, Modal, SectionList } from 'react-native'
import React, { useState } from 'react'
import { Asterisk, X } from 'lucide-react-native';

interface TaskProps {
    visible: boolean;
    onClose: () => void;
}

const AddTaskModal = ({ visible, onClose }: TaskProps) => {
    const [selected, setSelected] = useState<Date>();
    const [addTask, setAddTask] = useState(false);
    const [showDatePicker, setShowDatePicker] = useState(false);
    return (
        <Modal
            visible={visible}
            onRequestClose={onClose}
            transparent
            animationType="slide"
        >
            <View className="flex-1 justify-end bg-black/50">
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'height' : 'height'}
                    className="px-4 bg-white dark:bg-neutral-800 pb-12 pt-6">
                    <View className='flex-row justify-between items-center mb-4 px-2'>
                        <Text className="text-lg font-bold tracking-wide dark:text-white flex-1 text-black">Add New Task</Text>
                        <TouchableOpacity onPress={() => { onClose() }}>
                            <X color="gray" size={20} />
                        </TouchableOpacity>
                    </View>
                    <View className='gap-4'>
                        <View className='gap-2'>
                            <Text className='text-sm tracking-wide dark:text-white'>Task Title</Text>
                            <TextInput
                                placeholderTextColor='gray'
                                placeholder='e.g. Morning Workout'
                                className='border border-gray-500/50 rounded-lg py-2 px-4 dark:text-white'
                            />
                        </View>
                        <View className='gap-2'>
                            <Text className='text-sm tracking-wide dark:text-white'>Priority</Text>
                            <View className="flex-row gap-3 justify-center items-center">
                                <TouchableOpacity
                                    className='bg-red-500 px-4 rounded-full py-1 flex-1 justify-center items-center'>
                                    <Text className='text-sm tracking-wide text-white capitalize text-center'>High</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    className='bg-yellow-500 px-4 rounded-full py-1 flex-1 justify-center items-center'>
                                    <Text className='text-sm tracking-wide text-white capitalize text-center'>Medium</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    className='bg-green-500 px-4 rounded-full py-1 flex-1 justify-center items-center'>
                                    <Text className='text-sm tracking-wide text-white capitalize text-center'>Low</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        {/* <View className='gap-2 flex-1'>
                            <Text className='text-sm tracking-wide dark:text-white'>Start Date <Asterisk color="red" size={10} /></Text>
                            <TouchableOpacity
                                onPress={() => {
                                    setShowDatePicker(true);
                                }}
                                className="border border-gray-500/50 rounded-lg py-2 px-4"
                            >
                                <Text className="dark:text-white">
                                    {selected ? new Date(selected as Date).toLocaleDateString() : "Select Start Date"}
                                </Text>
                            </TouchableOpacity>
                        </View> */}

                        <TouchableOpacity className='bg-rose-500 py-2 px-4 justify-center items-center rounded-full mt-4'>
                            <Text className='text-white'>Add Task</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </View>

        </Modal>
    )
}

export default AddTaskModal