import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SCREEN_PADDING, colors } from '../../../constants'
import { SafeAreaView } from 'react-native-safe-area-context'
import MainDashboardCard from '../components/mainDashboardCard'
import PatientCard from '../../../components/molecules/patientCard'
import Header from '../../../components/molecules/header'
import Animated, { useAnimatedStyle, useSharedValue, useAnimatedScrollHandler, SlideInDown, SlideInUp, withTiming, withSpring } from 'react-native-reanimated'
import { fetchData } from '../../../api/fetch'
const MainHome = ({ navigation }) => {
    const scrollValue = useSharedValue(0)
    const headerOpacity = useSharedValue(1);
    const scrollY = useSharedValue(0);
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [patients, setPatients] = useState([])
    const [currentScrollValue, setCurrentScrollValue] = useState(0)
    const animatedScrollStyle = useAnimatedStyle(() => ({
        transform: [
            {
                translateY: scrollValue.value
            }
        ]
    }))
    // const handleScroll = useAnimatedScrollHandler({
    //     onScroll: (event) => {
    //         const offsetY = event.contentOffset.y;
    //         const diff = offsetY - scrollY.value;
    //         scrollY.value = offsetY;


    //         if (diff > 0) {
    //             // User is scrolling down
    //             scrollY.value = withSpring(offsetY);
    //         } else {
    //             // User is scrolling up
    //             scrollY.value = withSpring(offsetY);
    //         }

    //         const threshold = 100;

    //         headerOpacity.value = offsetY == 0 ? 1 : 0
    //     }
    // })
    const headerStyle = useAnimatedStyle(() => ({
        // opacity: withTiming(headerOpacity.value, { duration: 1000 }),
        transform: [
            {
                translateY: headerOpacity.value == 0 ? -100 : 0
            }
        ],
        marginTop: headerOpacity.value == 0 ? withTiming(-50, { duration: 1000 }) : withSpring(0),
        backgroundColor: "pink"
    }))
    const handleScroll = useAnimatedScrollHandler((event) => {
        const currentOffset = event.contentOffset.y;
        const diff = currentOffset - scrollY.value;

        scrollY.value = currentOffset;

        if (diff > 0) {
            headerOpacity.value = 0
            // User is scrolling down
            scrollY.value = withTiming(currentOffset, { duration: 2000 });
        } else {
            // User is scrolling up
            scrollY.value = withTiming(currentOffset, { duration: 2000 });
            headerOpacity.value = 1
        }
    });

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
            {/* <Animated.View >
                <Header title='Home' />
            </Animated.View> */}
            <Animated.ScrollView
                scrollEventThrottle={2}
                onScroll={handleScroll}
                showsVerticalScrollIndicator={false}>
                <View style={styles.textWrapper}>
                    <Text style={styles.txt1}>Welcome to </Text>
                    <Text style={styles.txt2}>Patient Monitor Dashboard</Text>
                </View>
                <View style={styles.cardsWrapper}>
                    <MainDashboardCard bgColor={colors.PRIMARY_COLOR} title="Patients" count={70} />
                    <MainDashboardCard bgColor={colors.LIGHT_BLUE} title="Responsibles" count={70} />
                </View>
                <View style={{ padding: SCREEN_PADDING, rowGap: 15 }}>
                    <Text>Recent Patients</Text>
                    <View style={styles.patientCardsWrapper}>
                        <Animated.FlatList
                            scrollEnabled={false}
                            contentContainerStyle={{ rowGap: 15 }}
                            data={patients}
                            renderItem={({ item }) => (
                                <PatientCard key={item?.name} chevron patient={item} onPress={() => {
                                    navigation.navigate('patientView', { data: item })
                                }} />
                            )}
                        // onScroll={handler}

                        />
                        {/* {
                            patients.map(patient => (
                                <PatientCard key={patient?.name} chevron patient={patient} />
                            ))
                        } */}
                    </View>
                </View>
            </Animated.ScrollView>
        </View>
    )
}

export default MainHome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE
    },
    textWrapper: {
        height: 130,
        padding: SCREEN_PADDING,
        justifyContent: "center",
        alignItems: 'flex-start'
    },
    txt1: {
        fontSize: 20,
        fontWeight: "500",
        color: colors.BLACK
    },
    txt2: {
        fontSize: 25,
        fontWeight: "500",
        color: colors.BLACK
    },
    cardsWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: SCREEN_PADDING
    },
    patientCardsWrapper: {
        rowGap: 20,
    }
})