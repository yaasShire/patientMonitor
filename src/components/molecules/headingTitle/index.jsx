import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../../../constants'

const HeadingTitle = ({ title = "" }) => {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default HeadingTitle

const styles = StyleSheet.create({
    title: {
        fontSize: 17,
        color: colors.BLACK,
        fontWeight: '500'
    }
})