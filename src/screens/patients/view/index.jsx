import { View, Text, StyleSheet, ScrollView, Pressable, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../../components/molecules/header'
import { HeightDimension, SCREEN_PADDING, colors } from '../../../constants'
import { Avatar, Divider } from 'react-native-paper'
import TableRow from '../components/tableRow'
import { patients } from '../../../utils/data'
import HeadingTitle from '../../../components/molecules/headingTitle'
import PatientCard from '../../../components/molecules/patientCard'
import { fetchData } from '../../../api/fetch'
import noDataImage from '../../../assets/noData.png'
import AddPatient from '../components/addPatient'
import UpdatePatient from '../components/updatePatient'
import ReportTabs from '../../../navigation/topTabs'
import AsyncStorage from '@react-native-async-storage/async-storage'
const PatientView = ({ navigation, route }) => {
    const [show, setShow] = useState(false)

    return (
        <ScrollView scrollEnabled={false} style={styles.container} contentContainerStyle={{ flex: 1 }}>
            <SafeAreaView />
            <Header title='Patient Information' back navigation={navigation} />
            <ScrollView scrollEnabled={false} style={styles.scrollStyle} contentContainerStyle={{ flex: 1, rowGap: 20 }}>
                <View style={styles.upperContentWrapper}>
                    <View style={styles.imageTextWrapper}>
                        <Avatar.Image size={55} source={require('../../../assets/splash.png')} />
                        <View>
                            <Text style={{ fontSize: 18, fontWeight: "500", color: colors.BLACK }}>{route?.params?.data?.name}</Text>
                            <Text style={{ fontSize: 15, fontWeight: "400", color: colors.BLACK }}>Patient</Text>
                        </View>
                    </View>
                    <Pressable style={styles.editButton} onPress={() => {
                        setShow(true)
                    }}>
                        <Text style={styles.editButtonText}>Edit</Text>
                    </Pressable>
                </View>
                <View style={styles.table}>
                    <TableRow patient={patients[0]} title={'PatientId'} value={route?.params?.data?.patientID} />
                    <Divider />
                    <TableRow patient={patients[0]} title={'Name'} value={route?.params?.data?.name} />
                    <Divider />
                    <TableRow patient={patients[0]} title={'Age'} value={route?.params?.data?.age} />
                    <Divider />
                    <TableRow patient={patients[0]} title={'Mobile Number'} value={route?.params?.data?.tell} />
                    <Divider />
                    <TableRow patient={patients[0]} title={'Sex'} value={route?.params?.data?.sex} />
                    <Divider />
                    <TableRow patient={patients[0]} title={'Responsibles'} value={route?.params?.data?.Responsibles?.length} />
                </View>
                <View style={{ alignItems: "flex-end", height: 50, justifyContent: "center" }}>
                    <Pressable onPress={async () => {
                        await AsyncStorage.setItem("patiendId", route?.params?.data?.patientID)
                        navigation.navigate("reportDetail", { patientId: route?.params?.data?.patientID })
                    }} style={{ backgroundColor: colors.PRIMARY_COLOR, width: 130, height: 40, borderRadius: 130 / 2, justifyContent: "center", alignItems: 'center' }}>
                        <Text style={{ color: colors.WHITE }}>Report Detail</Text>
                    </Pressable>
                </View>

                <View style={{ rowGap: 10 }}>
                    <HeadingTitle title='Responsibles' />
                    <View style={{ rowGap: 20 }}>
                        {
                            route?.params?.data?.Responsibles?.length > 0 ?
                                <FlatList
                                    contentContainerStyle={{ rowGap: 15 }}
                                    scrollEnabled={false}
                                    showVerticalScrollIndicator={false}
                                    data={route?.params?.data?.Responsibles}
                                    keyExtractor={(item) => item?.id}
                                    renderItem={({ item }) => (
                                        <PatientCard chevron type='Responsible' patient={item} onPress={() => {
                                            navigation.navigate('reponsiblesStack', { screen: "responsiblesView", params: { data: item } })
                                        }} />
                                    )}
                                /> :
                                <View style={{ justifyContent: "center", alignItems: "center", flex: 1, marginTop: 100 }}>
                                    <Image source={noDataImage} style={{ width: 200, height: 150 }} />
                                    <Text>No Responsible Found</Text>
                                </View>
                        }
                    </View>
                </View>
            </ScrollView>
            <UpdatePatient show={show} setShow={setShow} data={route?.params?.data} label="Update Patient" />
        </ScrollView>
    )
}

export default PatientView

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        height: HeightDimension,
        backgroundColor: colors.WHITE
    },
    scrollStyle: {
        paddingHorizontal: SCREEN_PADDING - 5,
        rowGap: 30,
    },
    upperContentWrapper: {
        flexDirection: 'row',
        alignItems: "center",
        columnGap: 10,
        justifyContent: "space-between",
        marginTop: 10
    },
    imageTextWrapper: {
        flexDirection: 'row',
        alignItems: "center",
        columnGap: 10
    },
    editButtonText: {
        fontSize: 15,
        fontWeight: "500",
        color: colors.PRIMARY_COLOR
    },
    editButton: {
        alignSelf: "flex-end"
    },
    table: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'gray'
    }
})