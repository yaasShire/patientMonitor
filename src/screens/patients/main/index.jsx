import { View, Text, StyleSheet, ScrollView, FlatList, RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../../components/molecules/header'
import { SCREEN_PADDING, colors } from '../../../constants'
import SearchInput from '../../../components/molecules/searchInput'
import PatientCard from '../../../components/molecules/patientCard'
import HeadingTitle from '../../../components/molecules/headingTitle'
import { patients } from '../../../utils/data'
import FloatingButton from '../../../components/atoms/floatingButton'
import AddPerson from '../../../components/molecules/addModal'
import { fetchData } from '../../../api/fetch'
import AddPatient from '../components/addPatient'

const MainPatients = ({ navigation }) => {
    const [show, setShow] = useState(false)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [patients, setPatients] = useState([])
    const [refreshing, setRefreshing] = useState(false)
    const fetchPatients = async () => {
        setIsLoading(true)
        const data = await fetchData('api/patients/', setError)
        if (data?.length > 0) {
            setPatients(data)
        }
        setIsLoading(false)
    }
    useEffect(() => {
        fetchPatients()
    }, [])
    return (
        <View style={styles.container}>
            <SafeAreaView />
            <Header title='Patients' />
            {/* <View style={styles.inputWrapper}>
                <SearchInput />
            </View> */}
            <ScrollView
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={fetchPatients} />}
                style={styles.wrapper} showsVerticalScrollIndicator={false}>
                <View style={styles.heading}>
                    {/* <HeadingTitle title='Patients' /> */}
                </View>
                <View style={styles.content}>
                    <FlatList
                        scrollEnabled={false}
                        style={{ flex: 1 }}
                        contentContainerStyle={{ rowGap: 10 }}
                        data={patients}
                        keyExtractor={(item) => item?.patientID}
                        renderItem={({ item }) => (
                            <PatientCard type='Patient' view patient={item} onPress={() => {
                                navigation.navigate('patientView', { data: item })
                            }} />
                        )}
                    />
                </View>
            </ScrollView>
            <FloatingButton onPress={() => {
                setShow(true)
            }} />
            {/* <AddPerson show={show} setShow={setShow} /> */}
            <AddPatient show={show} setShow={setShow} label='Add Patient' />
        </View>
    )
}

export default MainPatients

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.WHITE,
        flex: 1,
    },
    wrapper: {
        rowGap: 20,
        flex: 1
    },
    inputWrapper: {
        paddingHorizontal: SCREEN_PADDING
    },
    content: {
        rowGap: 30,
        padding: SCREEN_PADDING
    },
    heading: {
        padding: SCREEN_PADDING,
    },

})