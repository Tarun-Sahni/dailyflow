import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, Modal, SectionList } from 'react-native'
import React, { useState } from 'react'
import TaskCardTwo from '@/components/common/taskcardtwo'
import DateTimePicker, { DateType, useDefaultStyles } from 'react-native-ui-datepicker';
import { Plus, X } from 'lucide-react-native';

const tasks = [
  {
    title: 'june 08, 2026',
    data: [
      {
        id: '1',
        title: 'Workout',
        date: 'June 8, 2026',
        time: '6:00 AM',
        priority: 'medium',
        status: 'pending',
      },
      {
        id: '2',
        title: 'Bug Bounty',
        date: 'June 7, 2026',
        time: '6:00 AM',
        priority: 'high',
        status: 'completed',
      },
    ],
  },
  {
    title: 'june 07, 2026',
    data: [
      {
        id: '3',
        title: 'CTF Challenge',
        date: 'June 8, 2026',
        time: '8:00 PM',
        priority: 'low',
        status: 'completed',
      },
    ],
  },
];

const Tasks = () => {
  const [selected, setSelected] = useState<DateType>();
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [addTask, setAddTask] = useState(false);
  const defaultStyles = useDefaultStyles();
  return (
    <View className='flex-1 justify-between gap-4 pb-8 px-4 relative'>
      {/* Add Tasks */}
      <TouchableOpacity
        onPress={() => setAddTask(true)}
        className='w-14 h-14 rounded-full bg-rose-500 absolute right-6 bottom-6 justify-center items-center z-50'>
        <Plus color="white" size={30} />
      </TouchableOpacity>
      {/* Date and Time Picker */}
      <Modal
        visible={showDatePicker}
        transparent
        animationType="fade"
      >
        <View className="flex-1 justify-center bg-black/50 px-6">
          <View className="bg-white dark:bg-neutral-800 rounded-xl p-4">
            <DateTimePicker
              mode="single"
              timePicker
              use12Hours
              date={selected}
              onChange={({ date }) => setSelected(date)}
              styles={defaultStyles}
            />
            <TouchableOpacity
              onPress={() => setShowDatePicker(false)}
              className="bg-rose-500 py-3 rounded-xl mt-4"
            >
              <Text className="text-center text-white">
                Done
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {/* Add Task */}
      <Modal
        visible={addTask}
        transparent
        animationType="slide"
      >
        <View className="flex-1 justify-end bg-black/50">
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'height' : 'height'}
            className="px-4 bg-white dark:bg-neutral-800 pb-12 pt-6">
            <View className='flex-row justify-between items-center mb-4 px-2'>
              <Text className="text-lg font-bold tracking-wide dark:text-white flex-1 text-black">Add New Task</Text>
              <TouchableOpacity onPress={() => { setAddTask(false) }}>
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
              <View className='gap-2'>
                <Text className='text-sm tracking-wide dark:text-white'>Select Date & Time</Text>
                <TouchableOpacity
                  onPress={() => setShowDatePicker(true)}
                  className="border border-gray-500/50 rounded-lg py-2 px-4"
                >
                  <Text className="text-black dark:text-white uppercase">
                    {selected
                      ? `${new Date(selected as any).toLocaleDateString()} ${new Date(
                        selected as any
                      ).toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: true,
                      })}`
                      : 'Select Date and Time'}
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity className='bg-rose-500 py-2 px-4 justify-center items-center rounded-full'>
                <Text className='text-white'>Add Task</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>

      </Modal>
      <View className='flex-row justify-center items-start gap-4 w-full'>
        <TouchableOpacity className='px-4 py-1 rounded-full border border-rose-500 bg-rose-500 '>
          <Text className='dark:text-white text-sm tracking-wide text-white'>
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className='px-4 py-1 rounded-full border border-rose-500'>
          <Text className='dark:text-white text-sm tracking-wide'>
            Done
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className='px-4 py-1 rounded-full border border-rose-500'>
          <Text className='dark:text-white text-sm tracking-wide'>
            Pending
          </Text>
        </TouchableOpacity>
      </View>
      <SectionList
        sections={tasks || []}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: 12 }}
        renderItem={({ item }) => (
          <TaskCardTwo task={item} />
        )}
        renderSectionHeader={({ section }) => (
          <Text className="text-base tracking-wider font-bold dark:text-white capitalize">
            {section.title}
          </Text>
        )}
      />
    </View>
  )
}

export default Tasks