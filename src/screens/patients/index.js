import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainPatients from './main'
import PatientView from './view'
const PatientsStack = () => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='mainPatients' component={MainPatients} />
            <Stack.Screen name='patientView' component={PatientView} />
        </Stack.Navigator>
    )
}

export default PatientsStack