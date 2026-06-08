import { View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, Platform, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { useColorScheme } from 'nativewind'
import { SafeAreaView } from 'react-native-safe-area-context'
import Logo from '@/components/common/logo'
import BrandName from '@/components/common/brand'
import { Asterisk, Eye, EyeClosed, ShieldCheck } from 'lucide-react-native'
import * as Progress from 'react-native-progress';
import { Link, router } from 'expo-router'
import { Toast } from 'toastify-react-native'
import { useAuthStore } from '@/store/authstore'

function PasswordStrengthChecker(password: string) {
  let score = 0;

  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  if (score <= 2) {
    return {
      score,
      strength: "Weak",
      color: "#ef4444",
      progress: 0.33,
    };
  }

  if (score <= 4) {
    return {
      score,
      strength: "Good",
      color: "#f59e0b",
      progress: 0.66,
    };
  }

  return {
    score,
    strength: "Strong",
    color: "#22c55e",
    progress: 1,
  };
}


const Register = () => {
  const { colorScheme } = useColorScheme();
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false)
  const passwordStrength = PasswordStrengthChecker(password);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  })

  const handleRegister = async () => {
    try {
      setLoading(true)
      if (form.firstName === "" || form.lastName === "" || form.email === "" || form.password === "") {
        Toast.error("Missing Required Fields.")
      } else if (passwordStrength.score <= 4) {
        Toast.error("Choose Strong Password.")
      } else {
        const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(form)
        })
        const data = await response.json();
        if (data?.success) {
          console.log(data);
          Toast.success(data?.message)
          useAuthStore.getState().setAuth(
  data.token,
  data.user
);
          router.replace("/(tabs)/today")
        } else {
          setForm({
            firstName: "",
            lastName: "",
            email: "",
            password: ""
          })
          Toast.error(data?.message)
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false)
    }
  }
  return (
    <View className='flex-1 relative'>
      <Image
        source={require("../../assets/images/bg1.jpg")}
        className="w-full h-96 absolute top-0 right-0 left-0 z-10"
      />
      <LinearGradient
        colors={colorScheme === "dark" ? ["transparent", "#000", "#000", "#000"] : ['transparent', '#ffffff', '#ffffff', '#ffffff']}
        className='flex-1 absolute top-0 left-0 right-0 bottom-0 z-20'
      />
      <SafeAreaView className='flex-1 z-50 justify-center'>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'height' : 'padding'}
          className='flex-1'>
          <ScrollView
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
            className='flex-1 px-4'
            contentContainerStyle={{ flexGrow: 1, justifyContent: "center", gap: 20 }}
          >
            <View className='items-center gap-3'>
              <Logo />
              <BrandName />
              <Text className='text-gray-500 mt-1 text-sm tracking-wider'>Start Your Journey with DayFlow</Text>
            </View>
            <View className='gap-3 mt-8'>
              <View className='flex-row items-center gap-4'>
                <View className='gap-2 flex-1'>
                  <Text className='text-sm tracking-wide dark:text-white'>First Name <Asterisk color="red" size={10} /></Text>
                  <TextInput
                    value={form.firstName}
                    onChangeText={(text) => setForm({ ...form, firstName: text })}
                    placeholderTextColor='gray'
                    placeholder='e.g. Elliot'
                    className='bg-white dark:bg-black border border-gray-500/50 rounded-lg py-2 px-4 dark:text-white text-black'
                  />
                </View>
                <View className='gap-2 flex-1'>
                  <Text className='text-sm tracking-wide dark:text-white'>Last Name <Asterisk color="red" size={10} /></Text>
                  <TextInput
                    value={form.lastName}
                    onChangeText={(text) => setForm({ ...form, lastName: text })}
                    placeholderTextColor='gray'
                    placeholder='e.g. Alderson'
                    className='bg-white dark:bg-black border border-gray-500/50 rounded-lg py-2 px-4 dark:text-white text-black'
                  />
                </View>
              </View>
              <View className='gap-2'>
                <Text className='text-sm tracking-wide dark:text-white'>Email <Asterisk color="red" size={10} /></Text>
                <TextInput
                  value={form.email}
                  onChangeText={(text) => setForm({ ...form, email: text })}
                  placeholderTextColor='gray'
                  autoCapitalize='none'
                  keyboardType='email-address'
                  placeholder='e.g. elliot0123@mail.com'
                  className='bg-white dark:bg-black border border-gray-500/50 rounded-lg py-2 px-4 dark:text-white text-black'
                />
              </View>
              <View className='gap-2'>
                <Text className='text-sm tracking-wide dark:text-white'>Password <Asterisk color="red" size={10} /></Text>
                <TextInput
                  value={form.password}
                  onChangeText={(text) => {
                    setPassword(text);
                    setForm({ ...form, password: text })
                  }}
                  secureTextEntry={!showPassword}
                  placeholderTextColor='gray'
                  autoCapitalize='none'
                  placeholder='e.g. Create Strong Password'
                  className='bg-white dark:bg-black border border-gray-500/50 rounded-lg py-2 px-4 dark:text-white text-black'
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  className='absolute bottom-0 right-0 h-10 rounded-lg w-10 justify-center items-center'>
                  {showPassword ?
                    <Eye color="gray" size={16} /> :
                    <EyeClosed color="gray" size={16} />
                  }
                </TouchableOpacity>
              </View>
              <View className='flex-row justify-between items-center gap-4 px-4'>
                <Progress.Bar
                  className='flex-1'
                  progress={password ? passwordStrength.progress : 0}
                  color={passwordStrength.color}
                  borderColor={passwordStrength.color}
                  width={null}
                  height={5}
                  borderRadius={10}
                />
                <Text className='dark:text-white'>Good</Text>
              </View>
            </View>
            <View className='gap-4'>
              <TouchableOpacity
                onPress={handleRegister}
                disabled={loading}
                className={`${loading ? "bg-gray-500" : "bg-rose-500"} 
               py-2 px-4 justify-center items-center rounded-full`}>
                {
                  loading ? <View className='flex-row gap-2 items-center justify-center'>
                    <ActivityIndicator size="small" color="white" />
                    <Text className='text-white'>
                      Submitting...
                    </Text>
                  </View> :
                    <Text className='text-white'>Create Account</Text>
                }
              </TouchableOpacity>
              <View className="flex-row justify-center items-center gap-3">
                <View className='h-0.5 flex-1 bg-gray-500'></View>
                <Text className='text-gray-500 text-xs tracking-wider'>OR CONTINUE WITH</Text>
                <View className='h-0.5 flex-1 bg-gray-500'></View>
              </View>
              <TouchableOpacity className='border border-gray-300 dark:bg-gray-800/50 bg-gray-500/10 dark:border-gray-700 py-2 px-4 justify-center items-center rounded-full flex-row gap-2'>
                <Image
                  source={require("../../assets/images/google.png")}
                  className='w-4 h-4'
                />
                <Text className='dark:text-white'>Continue with Google</Text>
              </TouchableOpacity>
            </View>
            <View className='gap-8'>
              <View className="flex-row justify-center items-center gap-1">
                <Text className='dark:text-white'>Already have an account?</Text>
                <Link href="/(auth)/login" className='text-rose-500'>Login</Link>
              </View>
              <View className='flex-row justify-center items-center gap-2'>
                <ShieldCheck color="#f43f5e" size={20} />
                <Text className='text-rose-500'>Your Data is Encrypted & Secure</Text>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  )
}

export default Register