import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DailyReport from '../../screens/patients/dailyReport';
import WeeklyReport from '../../screens/patients/weeklyReport';
import MonthlyReport from '../../screens/patients/monthlyReport';
import { colors } from '../../constants';
export default function ReportTabs({ patientId = {} }) {
    const Tab = createMaterialTopTabNavigator();
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarIndicatorStyle: { height: 2 },
                tabBarStyle: { height: 80 },
                tabBarLabelStyle: { fontSize: 14, fontWeight: "500", textTransform: 'capitalize', marginTop: 30 },
                tabBarItemStyle: { alignItems: "center", justifyContent: "center" }
            }}
        >
            <Tab.Screen name="Daily" component={DailyReport} />
            <Tab.Screen name="Weekly" component={WeeklyReport} />
            <Tab.Screen name="Monthly" component={MonthlyReport} />
        </Tab.Navigator>
    );
}