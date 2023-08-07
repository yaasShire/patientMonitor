import { View, Text, StyleSheet, ScrollView, Pressable, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../../components/molecules/header'
import { SCREEN_PADDING, colors } from '../../../constants'
import { Avatar, Divider } from 'react-native-paper'
import TableRow from '../components/tableRow'
import { patients } from '../../../utils/data'
import HeadingTitle from '../../../components/molecules/headingTitle'
import PatientCard from '../../../components/molecules/patientCard'
import { fetchData } from '../../../api/fetch'
import noDataImage from '../../../assets/noData.png'
const PatientView = ({ navigation, route }) => {
    return (
        <View style={styles.container}>
            <SafeAreaView />
            <Header title='Patient Information' back navigation={navigation} />
            <ScrollView contentContainerStyle={styles.scrollStyle}>
                <View style={styles.upperContentWrapper}>
                    <View style={styles.imageTextWrapper}>
                        <Avatar.Image size={55} source={require('../../../assets/splash.png')} />
                        <View>
                            <Text>{route?.params?.data?.name}</Text>
                            <Text>Patient</Text>
                        </View>
                    </View>
                    <Pressable style={styles.editButton}>
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
                                <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
                                    <Image source={noDataImage} style={{ width: 200, height: 150 }} />
                                    <Text>No Responsible Found</Text>
                                </View>
                        }
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default PatientView

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE
    },
    scrollStyle: {
        padding: SCREEN_PADDING,
        rowGap: 30
    },
    upperContentWrapper: {
        flexDirection: 'row',
        alignItems: "center",
        columnGap: 10,
        justifyContent: "space-between"
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