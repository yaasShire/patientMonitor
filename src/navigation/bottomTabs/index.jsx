import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeStack from '../../screens/home'
import PatientsStack from '../../screens/patients'
import ResponsiblesStack from '../../screens/responsibles'
import SettingStack from '../../screens/setting'
import { colors } from '../../constants';
import { Feather } from 'react-native-vector-icons'

const BottomTabs = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            initialRouteName="homeStack"
            screenOptions={{
                tabBarActiveTintColor: colors.PRIMARY_COLOR,
                headerShown: false,
                tabBarStyle: { height: 70 },
                tabBarLabelStyle: { paddingBottom: 10 }
            }}
        >
            <Tab.Screen
                name="homeStack"
                component={HomeStack}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="patientsStack"
                component={PatientsStack}
                options={{
                    tabBarLabel: 'Patients',
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="user" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="reponsiblesStack"
                component={ResponsiblesStack}
                options={{
                    tabBarLabel: 'Responsibles',
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="users" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="settingsStack"
                component={SettingStack}
                options={{
                    tabBarLabel: 'Setting',
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="settings" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default BottomTabs