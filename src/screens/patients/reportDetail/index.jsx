import { View, Text, Button } from 'react-native'
import React from 'react'
import ReportTabs from '../../../navigation/topTabs'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../../components/molecules/header'
const ReportDetail = ({ route }) => {
    return (
        <View style={{ flex: 1 }}>
            <SafeAreaView style={{ backgroundColor: "#fff" }} />
            <Header title='Patient Report' />
            <ReportTabs />
        </View>
    )
}

export default ReportDetail