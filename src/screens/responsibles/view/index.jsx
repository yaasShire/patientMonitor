import { View, Text, StyleSheet, ScrollView, Pressable, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../../components/molecules/header'
import { SCREEN_PADDING, colors } from '../../../constants'
import { Avatar, Divider } from 'react-native-paper'
import TableRow from '../../patients/components/tableRow'
import { patients } from '../../../utils/data'
import HeadingTitle from '../../../components/molecules/headingTitle'
import PatientCard from '../../../components/molecules/patientCard'
import { fetchData } from '../../../api/fetch'
const ResponsibleView = ({ navigation, route }) => {
    return (
        <View style={styles.container}>
            <SafeAreaView />
            <Header title='Responsible Information' />
            <ScrollView contentContainerStyle={styles.scrollStyle}>
                <View style={styles.upperContentWrapper}>
                    <View style={styles.imageTextWrapper}>
                        <Avatar.Image size={55} source={require('../../../assets/splash.png')} />
                        <View>
                            <Text>{route?.params?.data?.name}</Text>
                            <Text>Responsible</Text>
                        </View>
                    </View>
                    <Pressable style={styles.editButton}>
                        <Text style={styles.editButtonText}>Edit</Text>
                    </Pressable>
                </View>
                <View style={styles.table}>
                    <TableRow patient={patients[0]} title={'Responsible Id'} value={route?.params?.data?.id} />
                    <Divider />
                    <TableRow patient={patients[0]} title={'Name'} value={route?.params?.data?.name} />
                    <Divider />
                    <TableRow patient={patients[0]} title={'Age'} value={route?.params?.data?.age} />
                    <Divider />
                    <TableRow patient={patients[0]} title={'Mobile Number'} value={route?.params?.data?.tell} />
                    <Divider />
                    <TableRow patient={patients[0]} title={'Sex'} value={route?.params?.data?.sex} />
                    <Divider />
                </View>
                <View style={{ rowGap: 10 }}>
                    {/* <HeadingTitle title='Responsibles' /> */}
                    {/* <View style={{ rowGap: 20 }}>
                        <FlatList
                            contentContainerStyle={{ rowGap: 15 }}
                            scrollEnabled={false}
                            showVerticalScrollIndicator={false}
                            data={route?.params?.data?.Responsibles}
                            keyExtractor={(item) => item?.id}
                            renderItem={({ item }) => (

                                <PatientCard chevron type='Responsible' patient={item} onPress={() => {
                                    navigation.navigate('reponsiblesStack', { screen: "mainResponsibles", params: { data: item } })
                                }} />
                            )}
                        />
                    </View> */}
                </View>
            </ScrollView>
        </View>
    )
}

export default ResponsibleView

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