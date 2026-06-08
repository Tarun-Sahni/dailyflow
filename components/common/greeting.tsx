import { Text } from 'react-native'
import React from 'react'

const Greeting = ({ firstName }: { firstName: string }) => {
  const hour = new Date().getHours();
  let greeting = "Hello";

  if (hour >= 5 && hour < 12) {
    greeting = "Good Morning";
  } else if (hour >= 12 && hour < 17) {
    greeting = "Good Afternoon";
  } else if (hour >= 17 && hour < 21) {
    greeting = "Good Evening";
  } else {
    greeting = "Good Night";
  }
  return <Text className="text-xl font-bold tracking-wide dark:text-white line-clamp-1 capitalize">{greeting}, {firstName}</Text>;
}

export default Greeting