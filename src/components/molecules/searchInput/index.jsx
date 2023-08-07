import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { SCREEN_PADDING, colors } from '../../../constants'
import { Feather } from 'react-native-vector-icons'
import { TextInput } from 'react-native-paper'
const SearchInput = () => {
    return (
        <View style={styles.container}>
            <Pressable>
                <Feather name="search" size={25} />
            </Pressable>
            <TextInput style={styles.input} />
        </View>
    )
}

export default SearchInput

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.SECONDARY_COLOR,
        height: 57,
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: SCREEN_PADDING,
        width: "100%"
    },
    input: {
        width: "95%",
        backgroundColor: colors.SECONDARY_COLOR
    }
})