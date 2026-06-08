import { View, Text, TouchableOpacity, Modal, KeyboardAvoidingView, Platform, TextInput, ScrollView, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { Asterisk, X } from 'lucide-react-native'
import DatePicker from './datepicker';
import TimePickerModal from './timepicker';

interface DatePickerProps {
    visible: boolean;
    onClose: () => void;
}

const goalTypes = [
    { label: "Target", value: "target" },
    { label: "Recurring", value: "recurring" },
];

const goalFrequency = [
    { label: "Daily", value: "daily" },
    { label: "Weekly", value: "weekly" },
    { label: "Monthly", value: "monthly" },

];

const AddGoal = ({
    visible,
    onClose,
}: DatePickerProps) => {
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [startDate, setStartDate] = useState<Date>(new Date());
    const [endDate, setEndDate] = useState<Date>(new Date());
    const [showTimePicker, setShowTimePicker] = useState(false);
    const [startTime, setStartTime] = useState(new Date());
    const [endTime, setEndTime] = useState(new Date());
    const [activeField, setActiveField] = useState<"start" | "end" | null>(null);
    const [activeTimeField, setActiveTimeField] = useState<"start" | "end" | null>(null);
    const [goalType, setGoalType] = useState<"target" | "recurring">("target");
    const [goalFrequencyType, setGoalFrequencyType] = useState<"daily" | "weekly" | "monthly">("weekly");
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        title: '',
        description: '',
        startDate: '',
        endDate: '',
        startTime: '',
        endTime: '',
        goalType: 'target',
        targetValue: '',
        currentValue: '',
        frequencyType: 'weekly',
        targetPeriod: '',
        totalPeriod: ''
    })

    const handleAddGoal = () => {
        try {
            setLoading(true)
            console.log(form);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false)
            setForm({
                title: '',
                description: '',
                startDate: '',
                endDate: '',
                startTime: '',
                endTime: '',
                goalType: '',
                targetValue: '',
                currentValue: '',
                frequencyType: '',
                targetPeriod: '',
                totalPeriod: ''
            })
            onClose();
        }
    }

    return (
        <>
            {/* Date Picker */}
            <DatePicker
                visible={showDatePicker}
                value={activeField === "start" ? startDate : endDate}
                onClose={() => {
                    setShowDatePicker(false);
                    setActiveField(null);
                }}
                onSelect={(date) => {
                    if (activeField === "start") {
                        setStartDate(date);

                        setForm((prev) => ({
                            ...prev,
                            startDate: date.toISOString(),
                        }));
                    }

                    if (activeField === "end") {
                        setEndDate(date);

                        setForm((prev) => ({
                            ...prev,
                            endDate: date.toISOString(),
                        }));
                    }

                    setShowDatePicker(false);
                    setActiveField(null);
                }}
            />
            {/* Time Picker  */}
            <TimePickerModal
                visible={showTimePicker}
                value={
                    activeTimeField === "start"
                        ? startTime
                        : endTime
                }
                onClose={() => {
                    setShowTimePicker(false);
                    setActiveTimeField(null);
                }}
                onSelect={(time) => {
                    if (activeTimeField === "start") {
                        setStartTime(time);

                        setForm((prev) => ({
                            ...prev,
                            startTime: time.toISOString(),
                        }));
                    }

                    if (activeTimeField === "end") {
                        setEndTime(time);

                        setForm((prev) => ({
                            ...prev,
                            endTime: time.toISOString(),
                        }));
                    }

                    setShowTimePicker(false);
                    setActiveTimeField(null);
                }}
            />
            <Modal
                visible={visible}
                transparent
                animationType="slide">
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'height' : 'height'}
                    className="bg-white/50 dark:bg-black/50 flex-1">
                    <ScrollView
                        keyboardShouldPersistTaps="handled"
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingVertical: 40 }}
                        className="bg-white dark:bg-neutral-800 rounded-t-3xl px-4">
                        <View className='flex-row justify-between items-center mb-6 px-2'>
                            <Text className="text-lg font-bold tracking-wide dark:text-white flex-1 text-black">
                                Add Goal</Text>
                            <TouchableOpacity onPress={() => { onClose() }}>
                                <X color="gray" size={20} />
                            </TouchableOpacity>
                        </View>
                        <View className='gap-4'>
                            <View className='gap-2'>
                                <Text className='text-sm tracking-wide dark:text-white'>Goal Type <Asterisk color="red" size={10} /></Text>
                                <View className="flex-row gap-4 flex-wrap justify-center items-center">
                                    {goalTypes.map((item) => (
                                        <TouchableOpacity
                                            key={item.label}
                                            onPress={() => {
                                                setGoalType(item.value as "target" | "recurring");
                                                setForm({
                                                    ...form,
                                                    goalType: item.value,
                                                });
                                            }}
                                            className={`px-4 py-2 rounded-full border ${goalType === item.value
                                                ? "bg-rose-500 border-rose-500"
                                                : "border-gray-400"
                                                }`}
                                        >
                                            <Text className={`${goalType === item.value ? "text-white" : "dark:text-white text-black"} capitalize`}>
                                                {item.label}
                                            </Text>
                                        </TouchableOpacity>
                                    ))}
                                </View>
                            </View>
                            <View className='gap-2'>
                                <Text className='text-sm tracking-wide dark:text-white'>Goal Title <Asterisk color="red" size={10} /></Text>
                                <TextInput
                                    value={form.title}
                                    onChangeText={(text) => setForm({ ...form, title: text })}
                                    placeholderTextColor='gray'
                                    placeholder='e.g. Reading Books'
                                    className='border border-gray-500/50 rounded-lg py-2 px-4 dark:text-white'
                                />
                            </View>
                            <View className='gap-2'>
                                <Text className='text-sm tracking-wide dark:text-white'>Goal Description <Asterisk color="red" size={10} /></Text>
                                <TextInput
                                    value={form.description}
                                    onChangeText={(text) => setForm({ ...form, description: text })}
                                    multiline={true}
                                    numberOfLines={4}
                                    textAlignVertical="top"
                                    placeholderTextColor='gray'
                                    placeholder='e.g. Read 5 books this month'
                                    className='border border-gray-500/50 rounded-lg py-2 px-4 dark:text-white h-24'
                                />
                            </View>
                            <View className='flex-row gap-4'>
                                <View className='gap-2 flex-1'>
                                    <Text className='text-sm tracking-wide dark:text-white'>Start Date <Asterisk color="red" size={10} /></Text>
                                    <TouchableOpacity
                                        onPress={() => {
                                            setActiveField("start");
                                            setShowDatePicker(true);
                                        }}
                                        className="border border-gray-500/50 rounded-lg py-2 px-4"
                                    >
                                        <Text className="dark:text-white">
                                            {startDate ? new Date(startDate as Date).toLocaleDateString() : "Select Start Date"}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <View className='gap-2 flex-1'>
                                    <Text className='text-sm tracking-wide dark:text-white'>Start Time (Optional)</Text>
                                    <TouchableOpacity
                                        onPress={() => {
                                            setActiveTimeField("start");
                                            setShowTimePicker(true);
                                        }}
                                        className="border border-gray-500/50 rounded-lg py-2 px-4"
                                    >
                                        <Text className="dark:text-white uppercase">
                                            {startTime
                                                ? new Date(startTime as Date).toLocaleTimeString([], {
                                                    hour: "2-digit",
                                                    minute: "2-digit",
                                                    hour12: true
                                                })
                                                : "Select Reminder Time"}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View className='flex-row gap-4'>
                                <View className='gap-2 flex-1'>
                                    <Text className='text-sm tracking-wide dark:text-white'>End Date <Asterisk color="red" size={10} /></Text>
                                    <TouchableOpacity
                                        onPress={() => {
                                            setActiveField("end");
                                            setShowDatePicker(true);
                                        }}
                                        className="border border-gray-500/50 rounded-lg py-2 px-4"
                                    >
                                        <Text className="dark:text-white">
                                            {endDate ? new Date(endDate as Date).toLocaleDateString() : "Select End Date"}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <View className='gap-2 flex-1'>
                                    <Text className='text-sm tracking-wide dark:text-white'>End Time (Optional)</Text>
                                    <TouchableOpacity
                                        onPress={() => {
                                            setActiveTimeField("end");
                                            setShowTimePicker(true);
                                        }}
                                        className="border border-gray-500/50 rounded-lg py-2 px-4"
                                    >
                                        <Text className="dark:text-white uppercase">
                                            {endTime
                                                ? new Date(endTime as Date).toLocaleTimeString([], {
                                                    hour: "2-digit",
                                                    minute: "2-digit",
                                                    hour12: true
                                                })
                                                : "Select Reminder Time"}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>


                            {
                                goalType === "target" ? (
                                    <>
                                        <View className='gap-2'>
                                            <Text className='text-sm tracking-wide dark:text-white'>Target Value (Optional)</Text>
                                            <TextInput
                                                value={form.targetValue}
                                                onChangeText={(text) => setForm({ ...form, targetValue: text, })}
                                                placeholderTextColor='gray'
                                                placeholder='e.g. 10000 (Save Rs. 10000 in this month)'
                                                className='border border-gray-500/50 rounded-lg py-2 px-4 dark:text-white'
                                            />
                                        </View>
                                        <View className='gap-2'>
                                            <Text className='text-sm tracking-wide dark:text-white'>Current Value (Optional)</Text>
                                            <TextInput
                                                value={form.currentValue}
                                                onChangeText={(text) => setForm({ ...form, currentValue: text, })}
                                                placeholderTextColor='gray'
                                                placeholder='e.g. 750 (Currently 750 rs. are saved)'
                                                className='border border-gray-500/50 rounded-lg py-2 px-4 dark:text-white'
                                            />
                                        </View>
                                    </>
                                ) : (
                                    <>
                                        <View className='gap-2'>
                                            <Text className='text-sm tracking-wide dark:text-white'>Goal Frequency Type <Asterisk color="red" size={10} /></Text>
                                            <View className="flex-row gap-4 flex-wrap justify-center items-center">
                                                {goalFrequency.map((item) => (
                                                    <TouchableOpacity
                                                        key={item.label}
                                                        onPress={() => {
                                                            setGoalFrequencyType(item.value as "daily" | "weekly" | "monthly");
                                                            setForm({ ...form, frequencyType: item.value });
                                                        }}
                                                        className={`px-4 py-2 rounded-full border ${goalFrequencyType === item.value
                                                            ? "bg-rose-500 border-rose-500"
                                                            : "border-gray-400"
                                                            }`}
                                                    >
                                                        <Text className={`${goalFrequencyType === item.value ? "text-white" : "dark:text-white text-black"} capitalize`}>
                                                            {item.label}
                                                        </Text>
                                                    </TouchableOpacity>
                                                ))}
                                            </View>
                                        </View>
                                        <View className='flex-row gap-4'>
                                            <View className='gap-2 flex-1'>
                                                <Text className='text-sm tracking-wide dark:text-white'>Target Per Period <Asterisk color="red" size={10} /></Text>
                                                <TextInput
                                                    value={form.targetPeriod}
                                                    onChangeText={(text) => setForm({ ...form, targetPeriod: text, })}
                                                    placeholderTextColor='gray'
                                                    keyboardType='number-pad'
                                                    placeholder={`${goalFrequencyType === "weekly" ? '1 Day in a Week' : goalFrequencyType === "monthly" ? '1 time in a Month' : '1 Time in a Day'}`}
                                                    className='border border-gray-500/50 rounded-lg py-2 px-4 dark:text-white'
                                                />
                                            </View>
                                            <View className='gap-2 flex-1'>
                                                <Text className='text-sm tracking-wide dark:text-white'>Total Period <Asterisk color="red" size={10} /></Text>
                                                <TextInput
                                                    value={form.totalPeriod}
                                                    onChangeText={(text) => setForm({ ...form, totalPeriod: text, })}
                                                    placeholderTextColor='gray'
                                                    keyboardType='number-pad'
                                                    placeholder={`${goalFrequencyType === "weekly" ? '4 Weeks' : goalFrequencyType === "monthly" ? '12 Months' : '7 Days'}`}
                                                    className='border border-gray-500/50 rounded-lg py-2 px-4 dark:text-white'
                                                />
                                            </View>
                                        </View>
                                    </>
                                )
                            }
                            <TouchableOpacity
                                onPress={handleAddGoal}
                                disabled={loading}
                                className={`${loading ? "bg-gray-500" : "bg-rose-500"} py-2 px-4 justify-center items-center rounded-full mt-4`}>
                                <Text className='text-white'>
                                    {loading ? <><ActivityIndicator color="white" size="small" /> Submitting...</> : "Add Goal"}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </Modal>
        </>

    )
}

export default AddGoal