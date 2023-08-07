import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Feather } from 'react-native-vector-icons'
import { colors } from '../../../constants'
const FloatingButton = ({ onPress = () => { } }) => {
    return (
        <Pressable style={styles.container} onPress={onPress}>
            <Feather name="plus" size={35} color={colors.WHITE} />
        </Pressable>
    )
}

export default FloatingButton

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.PRIMARY_COLOR,
        width: 70,
        height: 70,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        position: 'absolute',
        bottom: 10,
        right: 10,
        elevation: 5,
        borderWidth: 10,
        borderColor: colors.PRIMARY_COLOR
    }
})