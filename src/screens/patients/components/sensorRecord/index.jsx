import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { FontAwesome } from 'react-native-vector-icons'
import { colors } from '../../../../constants'
const SensorRecord = ({ data = {}, label = "" }) => {
    console.log(data)
    return (
        <View style={styles.card}>

            <Text style={{ fontWeight: "700", fontSize: 17, color: 'red' }}>{data?.data}</Text>
            <Text style={{ fontWeight: "700", fontSize: 15, color: colors.BLACK }}>{new Date(data?.date).toDateString()}</Text>
            <View style={{ flexDirection: "row", justifyContent: "space-between", minWidth: 60 }}>
                <View style={{ width: 40, height: 25, backgroundColor: "red", borderRadius: 5, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ fontWeight: "500", fontSize: 12, color: colors.WHITE }}>{data?.state}</Text>
                </View>
            </View>
        </View>
    )
}

export default SensorRecord

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.SECONDARY_COLOR,
        width: "100%",
        height: 60,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 10,
        borderRadius: 10
    }
})