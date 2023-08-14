import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import ReportCard from '../components/reportCard'
import { SCREEN_PADDING, colors } from '../../../constants'
import { ReportData } from '../../../utils/data'
import RBSheet from 'react-native-raw-bottom-sheet'
import BottomSheetPatient from '../components/bottomSheet'
import { fetchData } from '../../../api/fetch'
import AsyncStorage from '@react-native-async-storage/async-storage'
import heartImage from '../../../assets/heart.png'
import fallImage from '../../../assets/fall.png'
import oxygenImage from '../../../assets/oxygen.png'
import temperatureImage from '../../../assets/temperature.png'
import bloodImage from '../../../assets/blood.png'
const DailyReport = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)
    const [sensorData, setSensorData] = useState({})
    const [label, setLabel] = useState('')
    const [sheetData, setSheetData] = useState([])
    const bottomSheet = useRef()
    const fetchDailyData = async () => {
        const id = await AsyncStorage.getItem('patiendId')
        const data = await fetchData(`api/admin/patients/report/daily/${id}/`, setError)
        setSensorData(data)
    }
    useEffect(() => {
        fetchDailyData()
    }, [])
    return (
        <>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.container}
            >
                <ReportCard image={temperatureImage} data={sensorData?.BodyTemp} label="Body Temperature" bottomSheet={bottomSheet} onPress={async () => {
                    await AsyncStorage.setItem('sensorData', JSON.stringify(sensorData?.BodyTemp))
                    await AsyncStorage.setItem('label', 'Body Temperature')
                    setLabel('Body Temperature')
                    setSheetData(sensorData?.BodyTemp)
                    bottomSheet.current.open()
                }} />
                <ReportCard image={heartImage} data={sensorData?.Heart} label="Heart Beat" bottomSheet={bottomSheet} onPress={async () => {
                    await AsyncStorage.setItem('sensorData', JSON.stringify(sensorData?.Heart))
                    await AsyncStorage.setItem('label', 'Heart Beat')
                    setLabel('Heart Beat')
                    setSheetData(sensorData?.Heart)
                    bottomSheet.current.open()
                }} />
                <ReportCard image={temperatureImage} data={sensorData?.RoomTemp} label="Room Temperature" bottomSheet={bottomSheet} onPress={async () => {
                    await AsyncStorage.setItem('sensorData', JSON.stringify(sensorData?.Roomtemp))
                    await AsyncStorage.setItem('label', 'Room Temperature')
                    setLabel('Room Temperature')
                    setSheetData(sensorData?.Roomtemp)
                    bottomSheet.current.open()
                }} />
                <ReportCard image={fallImage} data={sensorData?.falling} label="Falling" bottomSheet={bottomSheet} onPress={async () => {
                    await AsyncStorage.setItem('sensorData', JSON.stringify(sensorData?.falling))
                    await AsyncStorage.setItem('label', 'Fallling')
                    setLabel('Falling')
                    setSheetData(sensorData?.falling)
                    bottomSheet.current.open()
                }} />
                <ReportCard image={oxygenImage} data={sensorData?.oxygen} label="Oxygen" bottomSheet={bottomSheet} onPress={async () => {
                    await AsyncStorage.setItem('sensorData', JSON.stringify(sensorData?.oxygen))
                    await AsyncStorage.setItem('label', 'Oxygen')
                    setLabel('Oxygen')
                    setSheetData(sensorData?.oxygen)
                    bottomSheet.current.open()
                }} />
            </ScrollView>
            <BottomSheetPatient bottomSheet={bottomSheet} label={label} sheetData={sheetData} />
        </>
    )
}

export default DailyReport

const styles = StyleSheet.create({
    container: {
        flex: 1,
        rowGap: 10,
        paddingVertical: 10,
        padding: SCREEN_PADDING - 8,
        backgroundColor: colors.WHITE
    }
})