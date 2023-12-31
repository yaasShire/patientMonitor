import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, Image, Pressable } from 'react-native';
import { Avatar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../../../constants';
import { Feather } from 'react-native-vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage';
import LogOutModal from '../components/logOutModal';
const MainSetting = ({ navigation }) => {
    const [notificationsEnabled, setNotificationsEnabled] = useState(false);
    const [darkModeEnabled, setDarkModeEnabled] = useState(false);
    const [showLogOutModal, setShowLogOutModal] = useState(false);
    const userName = "John Doe";
    const profileImage = require('../../../assets/splash.png')

    const handleNotificationsToggle = () => {
        setNotificationsEnabled(!notificationsEnabled);
    };

    const handleDarkModeToggle = () => {
        setDarkModeEnabled(!darkModeEnabled);
    };
    const handleLogOut = async () => {
        await AsyncStorage.setItem("token", "")
        navigation.navigate("auth", { screen: "login" })
    }

    return (
        <View style={styles.container}>
            <SafeAreaView />
            <View style={{ rowGap: 50 }}>
                <View>
                    <View style={styles.profileContainer}>
                        <Avatar.Image size={80} source={require('../../../assets/splash.png')} />
                        <Text style={styles.userName}>{userName}</Text>
                    </View>
                    <View style={styles.settingItem}>
                        <View style={{ backgroundColor: colors.SECONDARY_COLOR, width: "100%", height: 50, justifyContent: "space-between", alignItems: "center", paddingHorizontal: 10, borderRadius: 5, flexDirection: 'row' }}>
                            <Text style={[styles.settingText]}>Email:</Text>
                            <Text style={[styles.settingText, { fontWeight: "500" }]}>amiin3amiin@gmail.com</Text>
                        </View>
                    </View>
                    <View style={styles.settingItem}>
                        <View style={{ backgroundColor: colors.SECONDARY_COLOR, width: "100%", height: 50, justifyContent: "space-between", alignItems: "center", paddingHorizontal: 10, borderRadius: 5, flexDirection: 'row' }}>
                            <Text style={[styles.settingText]}>Telephone:</Text>
                            <Text style={[styles.settingText, { fontWeight: "500" }]}>0613834877</Text>
                        </View>
                    </View>
                </View>
                <Pressable onPress={() => setShowLogOutModal(true)} style={{ flexDirection: 'row', justifyContent: "flex-start", alignItems: "center", columnGap: 10, backgroundColor: colors.LIGHT_BLUE, height: 50, borderRadius: 5, paddingHorizontal: 10 }}>
                    <Feather name="log-out" size={25} color="red" />
                    <Text style={{ fontWeight: "500", fontSize: 18, color: colors?.WHITE }}>Log out</Text>
                </Pressable>
            </View>
            <LogOutModal show={showLogOutModal} setShow={setShowLogOutModal} onPress={handleLogOut} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#ffffff',
    },
    profileContainer: {
        alignItems: 'center',
        marginBottom: 16,
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 12,
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    settingItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    settingText: {
        fontSize: 16,
    },
});

export default MainSetting;