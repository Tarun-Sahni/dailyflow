import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useColorScheme } from 'nativewind'
import { LogOutIcon } from 'lucide-react-native';
import { useAuthStore } from '@/store/authstore';
import { router } from 'expo-router';

const LogOut = () => {
    const { colorScheme } = useColorScheme();
    const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
    router.replace("/");
  };
    return (
        <TouchableOpacity onPress={handleLogout}>
            <LogOutIcon color={colorScheme === "dark" ? "white" : "black"} size={20} />
        </TouchableOpacity>
    )
}

export default LogOut