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
import AddResponsible from '../components/addResponsible'
import UpdateResponsible from '../components/updateResponsible'
const ResponsibleView = ({ navigation, route }) => {
    const [show, setShow] = useState(false)
    return (
        <View style={styles.container}>
            <SafeAreaView />
            <Header title='Responsible Information' />
            <ScrollView contentContainerStyle={styles.scrollStyle}>
                <View style={styles.upperContentWrapper}>
                    <View style={styles.imageTextWrapper}>
                        <Avatar.Image size={55} source={require('../../../assets/splash.png')} />
                        <View>
                            <Text style={{ fontSize: 18, fontWeight: "500", color: colors.BLACK }}>{route?.params?.data?.name}</Text>
                            <Text style={{ fontSize: 15, fontWeight: "400", color: colors.BLACK }}>Responsible</Text>
                        </View>
                    </View>
                    <Pressable style={styles.editButton}>
                        <Text style={styles.editButtonText} onPress={() => {
                            setShow(true)
                        }}>Edit</Text>
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
            </ScrollView>
            <UpdateResponsible show={show} setShow={setShow} data={route?.params?.data} label="Update Responsible" />
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