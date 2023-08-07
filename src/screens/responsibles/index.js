import { View, Text } from 'react-native'
import React from 'react'
import MainResponsibles from './main'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ResponsibleView from './view'
const ResponsiblesStack = () => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='mainResponsibles' component={MainResponsibles} />
            <Stack.Screen name='responsiblesView' component={ResponsibleView} />
        </Stack.Navigator>
    )
}

export default ResponsiblesStack