import { View, Text } from 'react-native'
import { TextInput } from 'react-native-paper'
import React from 'react'

const TextField = (props, { keyboardType = "default" }) => {
    return (
        <TextInput
            style={{ width: "100%", height: 50, borderRadius: 3 }}
            {...props}
        />
    )
}

export default TextField