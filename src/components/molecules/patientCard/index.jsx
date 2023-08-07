import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { SCREEN_PADDING, colors } from '../../../constants'
import { Avatar } from 'react-native-paper';
import { Feather } from 'react-native-vector-icons'
import Animated, { FlipInXUp, FlipInYRight, interpolate, useSharedValue, withTiming, SlideInDown, SlideInUp, BounceIn, FadeIn, FadeInRight, FadeInLeft, useAnimatedStyle } from 'react-native-reanimated'
const PatientCard = ({ chevron = false, view = false, patient, onPress = () => { }, type = "" }) => {
    const bgValue = useSharedValue(1)
    const aStyle = useAnimatedStyle(() => ({

        backgroundColor: interpolate(bgValue.value, [0, 1], ['pink', 'purple']),
        // backgroundColor: interpolate(bgValue.value, [0, 1], ['pink', 'purple']),
    }))
    return (
        <Animated.View entering={bgValue.value == 1 ? BounceIn.stiffness(300) : FlipInXUp.stiffness(300)} exiting={SlideInDown} style={[styles.container, aStyle]}>
            <Pressable onPress={onPress} style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                <View style={styles.subWrapper}>
                    <Avatar.Image size={55} source={require('../../../assets/splash.png')} />
                    <View>
                        <Text style={styles.name}>{patient?.name}</Text>
                        <Text style={styles.name}>Tel:{patient?.tell}</Text>
                        <Text style={styles.value}>{type}</Text>
                    </View>
                </View>
                <View>
                    {
                        chevron && (
                            <Pressable onPress={() => {
                                onPress()
                                bgValue.value = bgValue.value == 1 ? 0 : 1
                            }} >
                                <Feather name='chevron-right' size={30} />
                            </Pressable>
                        )
                    }
                    {
                        view && (
                            <Pressable onPress={onPress} style={{ backgroundColor: colors.PRIMARY_COLOR, width: 70, height: 30, borderRadius: 25, justifyContent: "center", alignItems: 'center' }}>
                                <Text style={{ color: colors.WHITE }}>View</Text>
                            </Pressable>
                        )
                    }
                </View>
            </Pressable>
        </Animated.View>
    )
}

export default PatientCard

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.WHITE,
        height: 100,
        borderWidth: .5,
        borderColor: 'gray',
        borderRadius: 4,
        padding: SCREEN_PADDING,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    subWrapper: {
        flexDirection: "row",
        columnGap: 13,
        alignItems: 'center',
    },
    name: {
        fontWeight: "500",
        fontSize: 15,
        textTransform: 'capitalize'
    },
    value: {
        fontWeight: "400",
        fontSize: 15,
        opacity: .5
    }
})