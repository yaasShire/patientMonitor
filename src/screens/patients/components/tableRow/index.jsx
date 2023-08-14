import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SCREEN_PADDING, colors } from '../../../../constants'

const TableRow = ({ title = "", value = "", patient = {} }) => {
    return (
        <View style={styles.container}>
            <View style={styles.leftPart}>
                <Text style={{ color: colors.BLACK, opacity: .5 }}>{title}</Text>
            </View>
            <View style={styles.rightPart}>
                <Text style={{ color: colors.BLACK, opacity: 1, fontWeight: "500" }}>{value}</Text>
            </View>
        </View>
    )
}

export default TableRow

const styles = StyleSheet.create({
    container: {
        backgroundColor: "pink",
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        height: 45,
    },
    leftPart: {
        backgroundColor: colors.SECONDARY_COLOR,
        height: "100%",
        width: "50%",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingHorizontal: SCREEN_PADDING + 10
    },
    rightPart: {
        backgroundColor: "#F9FBFC",
        height: "100%",
        width: "50%",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingHorizontal: SCREEN_PADDING + 10
    },
})