import { View, Text } from 'react-native'
import React from 'react'
import MainHome from './main'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const HomeStack = () => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='mainHome' component={MainHome} />
        </Stack.Navigator>
    )
}

export default HomeStack