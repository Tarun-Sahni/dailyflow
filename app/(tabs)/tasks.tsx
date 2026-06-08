import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, Modal, SectionList } from 'react-native'
import React, { useState } from 'react'
import TaskCardTwo from '@/components/common/taskcardtwo'
import { Asterisk, Plus, X } from 'lucide-react-native';
import AddTaskModal from '@/components/common/addtask';

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
  const [addTask, setAddTask] = useState(false);

  return (
    <View className='flex-1 justify-between gap-4 pb-8 px-4 relative'>
      {/* Add Tasks */}
      <TouchableOpacity
        onPress={() => setAddTask(true)}
        className='w-14 h-14 rounded-full bg-rose-500 absolute right-6 bottom-6 justify-center items-center z-50'>
        <Plus color="white" size={30} />
      </TouchableOpacity>
      {/* Add Task */}
      <AddTaskModal
        visible={addTask}
        onClose={() => setAddTask(false)}
      />
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