import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './login'
import Signup from './signup'
import ForgetPassword from './forgetPassword'
const AuthStack = () => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator>
            <Stack.Screen name='login' component={Login} />
            <Stack.Screen name='signup' component={Signup} />
            <Stack.Screen name='forgetPassword' component={ForgetPassword} />
        </Stack.Navigator>
    )
}

export default AuthStack