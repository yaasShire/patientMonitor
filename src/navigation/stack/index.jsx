import { View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import BottomTabs from '../bottomTabs'
import MainHome from '../../screens/home/main'
import AuthStack from '../../screens/auth'
import AsyncStorage from '@react-native-async-storage/async-storage'
const MainStack = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(null)

    useEffect(() => {
        const fetchLoginStatus = async () => {
            const loginStatus = await AsyncStorage.getItem('token')
            setIsLoggedIn(!!loginStatus)
        };

        fetchLoginStatus()
    }, []);

    if (isLoggedIn === null) {
        return
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <ActivityIndicator size={100} />
        </View>
    }
    const initialRouteName = isLoggedIn ? 'bottomTabs' : 'auth'

    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={initialRouteName} screenOptions={{ headerShown: false }}>
                <Stack.Screen name='auth' component={AuthStack} />
                <Stack.Screen name='bottomTabs' component={BottomTabs} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack