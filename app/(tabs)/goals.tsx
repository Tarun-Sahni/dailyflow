import { View, Text, TouchableOpacity, Modal, KeyboardAvoidingView, Platform, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Plus, X } from 'lucide-react-native'
import { DateType } from "react-native-ui-datepicker";
import DatePicker from '@/components/common/datepicker';
import AddGoal from '@/components/common/addgoal';

const Goals = () => {
  const [addGoal, setAddGoal] = useState(false)
  return (
    <View className='flex-1 justify-between gap-4 pb-8 px-4 relative'>
      {/* Add Goal */}
      <TouchableOpacity
        onPress={() => setAddGoal(true)}
        className='w-14 h-14 rounded-full bg-rose-500 absolute right-6 bottom-6 justify-center items-center z-50'>
        <Plus color="white" size={30} />
      </TouchableOpacity>
      <AddGoal
        visible={addGoal}
        onClose={() => setAddGoal(false)}
      />
    </View>
  )
}

export default Goals