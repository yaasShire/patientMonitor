import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import React from 'react'
import { HeightDimension, WidthDimension, colors } from '../../../constants'

const AppLoader = () => {
    return (
        <View style={[styles.container, StyleSheet.absoluteFillObject]}>
            <ActivityIndicator color={'purple'} size={50} />
        </View>
    )
}

export default AppLoader

const styles = StyleSheet.create({
    container: {
        height: HeightDimension,
        width: WidthDimension,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.WHITE
    }
})