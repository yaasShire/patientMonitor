import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import React from 'react'
import { SCREEN_PADDING, colors } from '../../../../constants'
import { Feather, FontAwesome } from 'react-native-vector-icons'

const ReportCard = ({ icon = "", data = {}, onPress = () => { }, label = "", image }) => {
    return (
        <>
            <Pressable style={styles.card} onPress={onPress}>
                <View style={styles.nameIcon}>
                    {/* <FontAwesome name="heartbeat" size={25} color={"red"} /> */}
                    <Image source={image} style={{ width: 50, height: 50 }} />
                    <View style={{ alignItems: "flex-start", rowGap: 5 }}>
                        <Text style={{ fontWeight: "500", fontSize: 16 }}>{label}</Text>
                        <Text style={{ fontWeight: "500", fontSize: 14, color: "red" }}>{data?.quantity}</Text>
                    </View>
                </View>
                <Feather name="chevron-right" size={25} />
            </Pressable>
        </>
    )
}

export default ReportCard
const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.WHITE,
        borderWidth: 2,
        borderColor: colors.SECONDARY_COLOR,
        height: 100,
        borderRadius: 5,
        paddingHorizontal: SCREEN_PADDING,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    nameIcon: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        // minWidth: 140,
        columnGap: 10
    }

})