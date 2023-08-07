import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../../../constants'

const CustomButton = ({ title = "", onPress = () => { } }) => {
    return (
        <Pressable style={styles.container} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.PRIMARY_COLOR,
        height: 50,
        width: "100%",
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: colors.WHITE,
        fontSize: 17,
        fontWeight: '500'
    }
})