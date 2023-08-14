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
import AddResponsible from '../components/addResponsible'

const MainResponsible = ({ navigation }) => {
    const [show, setShow] = useState(false)
    const [responsibles, setResponsibles] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [refreshing, setRefreshing] = useState(false)
    const fetchResponsibles = async () => {
        setIsLoading(true)
        const data = await fetchData('api/responsibles/', setError)
        console.log(data)
        if (data?.length > 0) {
            setResponsibles(data)
        }
        setIsLoading(false)
    }
    useEffect(() => {
        fetchResponsibles()
    }, [])
    return (
        <View style={styles.container}>
            <SafeAreaView />
            <Header title='Responsibles' />
            {/* <View style={styles.inputWrapper}>
                <SearchInput />
            </View> */}
            <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
                {/* <View style={styles.heading}>
                    <HeadingTitle title='Responsibles' />
                </View> */}
                <View style={styles.content}>
                    <FlatList
                        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={fetchResponsibles} />}
                        scrollEnabled={false}
                        contentContainerStyle={{ rowGap: 15 }}
                        data={responsibles}
                        keyExtractor={(item) => item?.id}
                        renderItem={({ item }) => (
                            <PatientCard view patient={item} onPress={() => {
                                navigation.navigate("responsiblesView", { data: item })
                            }} />
                        )}
                    />
                </View>
            </ScrollView>
            <FloatingButton onPress={() => {
                setShow(true)
            }} />
            <AddResponsible show={show} setShow={setShow} label='Add Responsible' />
        </View>
    )
}

export default MainResponsible

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.WHITE,
        flex: 1,
    },
    wrapper: {
        rowGap: 20,
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