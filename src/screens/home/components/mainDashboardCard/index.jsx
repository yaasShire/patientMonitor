import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Feather } from 'react-native-vector-icons'
import { SCREEN_PADDING } from '../../../../constants'
const MainDashboardCard = ({ bgColor = "pink", title = "", count = 0 }) => {
    return (
        <View style={styles.container(bgColor)}>
            <Text style={styles.count}>{count}</Text>
            <View style={styles.iconNameWrapper}>
                <Feather name="user" size={50} color="#fff" />
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    )
}

export default MainDashboardCard

const styles = StyleSheet.create({
    container: (bgColor) => ({
        width: 170,
        height: 130,
        backgroundColor: bgColor,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "center",
        padding: SCREEN_PADDING
    }),
    iconNameWrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "#fff",
        fontSize: 17
    },
    count: {
        color: "#fff",
        fontSize: 17,
        fontWeight: '500'
    }
})