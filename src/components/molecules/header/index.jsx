import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { SCREEN_PADDING, colors } from '../../../constants'
import { Feather } from 'react-native-vector-icons'

const Header = ({ title = "", navigation, back = false }) => {
    return (
        <View style={styles.container}>
            {
                back && (
                    <Pressable style={{ alignContent: 'flex-start' }} onPress={() => {
                        navigation.goBack()
                    }}>
                        <Feather name="chevron-left" size={30} />
                    </Pressable>
                )
            }
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.WHITE,
        padding: SCREEN_PADDING,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderBottomColor: colors.SECONDARY_COLOR
    },
    title: {
        flex: 1,
        textAlign: "center",
        fontSize: 19,
        fontWeight: "500"
    }
})